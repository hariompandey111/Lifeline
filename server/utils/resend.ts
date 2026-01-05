import { Resend } from 'resend'

let resendClient: Resend | null = null

export function useResend() {
  if (resendClient) {
    return resendClient
  }

  const config = useRuntimeConfig()

  if (!config.resendApiKey) {
    console.warn('Resend API key not configured. Email features will be disabled.')
    return null
  }

  resendClient = new Resend(config.resendApiKey)
  return resendClient
}

export function getEmailConfig() {
  const config = useRuntimeConfig()
  return {
    from: config.emailFrom || 'LTHS Contact <onboarding@resend.dev>',
    to: config.emailTo || 'aman.l@lths.in',
  }
}
