import { useSupabase, type ContactSubmission } from '../utils/supabase'
import { useResend, getEmailConfig } from '../utils/resend'

interface ContactFormBody {
  name: string
  email: string
  phone: string
  company?: string
  service: string
  message: string
}

export default defineEventHandler(async (event) => {
  const body = await readBody<ContactFormBody>(event)

  // Validate required fields
  const requiredFields = ['name', 'email', 'phone', 'service', 'message'] as const
  const missingFields = requiredFields.filter(field => !body[field])

  if (missingFields.length > 0) {
    throw createError({
      statusCode: 400,
      message: `Missing required fields: ${missingFields.join(', ')}`,
    })
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(body.email)) {
    throw createError({
      statusCode: 400,
      message: 'Invalid email format',
    })
  }

  const results = {
    database: false,
    email: false,
    errors: [] as string[],
  }

  // Get clients
  const supabase = useSupabase()
  const resend = useResend()
  const emailConfig = getEmailConfig()

  // Save to Supabase database
  if (supabase) {
    try {
      const submission: ContactSubmission = {
        name: body.name,
        email: body.email,
        phone: body.phone,
        company: body.company || null,
        service: body.service,
        message: body.message,
      }

      const { error } = await supabase
        .from('contact_submissions')
        .insert(submission)

      if (error) {
        console.error('Supabase insert error:', error)
        results.errors.push('Failed to save to database')
      }
      else {
        results.database = true
      }
    }
    catch (err) {
      console.error('Database error:', err)
      results.errors.push('Database connection failed')
    }
  }
  else {
    results.errors.push('Database not configured')
  }

  // Send email notification via Resend
  if (resend) {
    try {
      const { error } = await resend.emails.send({
        from: emailConfig.from,
        to: emailConfig.to,
        subject: `New Contact Form Submission: ${body.service}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>From:</strong> ${body.name}</p>
          <p><strong>Email:</strong> ${body.email}</p>
          <p><strong>Phone:</strong> ${body.phone}</p>
          ${body.company ? `<p><strong>Company:</strong> ${body.company}</p>` : ''}
          <p><strong>Service Interested:</strong> ${body.service}</p>
          <hr>
          <h3>Message:</h3>
          <p>${body.message.replace(/\n/g, '<br>')}</p>
          <hr>
          <p style="color: #666; font-size: 12px;">
            Submitted via LTHS website contact form
          </p>
        `,
      })

      if (error) {
        console.error('Resend email error:', error)
        results.errors.push('Failed to send email notification')
      }
      else {
        results.email = true
      }
    }
    catch (err) {
      console.error('Email error:', err)
      results.errors.push('Email service connection failed')
    }
  }
  else {
    results.errors.push('Email service not configured')
  }

  // Send confirmation email to the user
  if (resend && results.email) {
    try {
      await resend.emails.send({
        from: emailConfig.from,
        to: body.email,
        subject: 'Thank you for contacting LTHS',
        html: `
          <h2>Thank you for reaching out, ${body.name}!</h2>
          <p>We have received your inquiry regarding <strong>${body.service}</strong>.</p>
          <p>Our team will review your message and get back to you within 24 hours.</p>
          <hr>
          <h3>Your Message:</h3>
          <p>${body.message.replace(/\n/g, '<br>')}</p>
          <hr>
          <p>Best regards,<br>LTHS Team</p>
          <p style="color: #666; font-size: 12px;">
            Lifetime Hospitality Services<br>
            Phone: 8956690990 / 8320140215<br>
            Email: aman.l@lths.in
          </p>
        `,
      })
    }
    catch (err) {
      console.error('Confirmation email error:', err)
      // Don't add to errors - this is not critical
    }
  }

  // Return success if at least one method worked
  if (results.database || results.email) {
    return {
      success: true,
      message: 'Thank you for your inquiry! We will get back to you within 24 hours.',
      details: results,
    }
  }

  // If nothing worked, throw an error
  throw createError({
    statusCode: 500,
    message: 'Failed to process your request. Please try again or contact us directly.',
    data: results.errors,
  })
})
