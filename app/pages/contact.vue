<script setup lang="ts">
useSeoMeta({
  title: 'Contact Us | LTHS - Lifetime Hospitality Services',
  description:
    'Get in touch with LTHS for a free consultation. Request a quote or inquire about our hospitality services.',
})

const formData = reactive({
  name: '',
  email: '',
  phone: '',
  company: '',
  service: '',
  message: '',
})

const isSubmitting = ref(false)
const submitStatus = ref<'idle' | 'success' | 'error'>('idle')
const submitMessage = ref('')

const services = [
  'Patient Care Services',
  'Housekeeping Services',
  'Horticulture Services',
  'Catering Services',
  'Office Support Services',
  'Labour Supply',
  'Maintenance Services',
  'Pantry Services',
  'Security Services',
  'Multiple Services',
  'Other',
]

async function handleSubmit() {
  isSubmitting.value = true
  submitStatus.value = 'idle'
  submitMessage.value = ''

  try {
    const response = await $fetch('/api/contact', {
      method: 'POST',
      body: formData,
    })

    submitStatus.value = 'success'
    submitMessage.value = response.message

    // Reset form on success
    formData.name = ''
    formData.email = ''
    formData.phone = ''
    formData.company = ''
    formData.service = ''
    formData.message = ''
  } catch (error: unknown) {
    submitStatus.value = 'error'
    const fetchError = error as { data?: { message?: string } }
    submitMessage.value = fetchError.data?.message || 'Something went wrong. Please try again or contact us directly.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="relative pt-32 pb-20 overflow-hidden">
      <div class="absolute inset-0 animated-gradient"></div>
      <div class="absolute top-40 right-20 w-96 h-96 decorative-blob rounded-full blur-3xl"></div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl">
          <span
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0 }"
            class="inline-block text-brand font-medium uppercase tracking-widest text-sm mb-4"
          >Contact Us</span>
          <h1
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 100 } }"
            class="font-display text-5xl md:text-6xl font-bold mb-6 text-theme-heading"
          >
            Let's Start a
            <span class="gradient-text">Conversation</span>
          </h1>
          <p
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 200 } }"
            class="text-xl text-theme-secondary leading-relaxed"
          >
            Ready to transform your facility? Get in touch for a free
            consultation and customized quote.
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="relative py-24 section-dark">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16">
          <!-- Contact Form -->
          <div
            v-motion
            :initial="{ opacity: 0, x: -30 }"
            :visible="{ opacity: 1, x: 0 }"
          >
            <h2 class="font-display text-3xl font-bold mb-8 text-theme-heading">
              Send Us a <span class="gradient-text">Message</span>
            </h2>

            <form
              id="quote"
              class="space-y-6"
              data-testid="contact-form"
              @submit.prevent="handleSubmit"
            >
              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <label for="name" class="block text-sm font-medium text-theme-secondary mb-2">Full Name *</label>
                  <input
                    id="name"
                    v-model="formData.name"
                    type="text"
                    required
                    class="form-input"
                    placeholder="Your name"
                    data-testid="contact-input-name"
                  />
                </div>
                <div>
                  <label for="email" class="block text-sm font-medium text-theme-secondary mb-2">Email *</label>
                  <input
                    id="email"
                    v-model="formData.email"
                    type="email"
                    required
                    class="form-input"
                    placeholder="your@email.com"
                    data-testid="contact-input-email"
                  />
                </div>
              </div>

              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <label for="phone" class="block text-sm font-medium text-theme-secondary mb-2">Phone Number *</label>
                  <input
                    id="phone"
                    v-model="formData.phone"
                    type="tel"
                    required
                    class="form-input"
                    placeholder="Your phone number"
                    data-testid="contact-input-phone"
                  />
                </div>
                <div>
                  <label for="company" class="block text-sm font-medium text-theme-secondary mb-2">Company Name</label>
                  <input
                    id="company"
                    v-model="formData.company"
                    type="text"
                    class="form-input"
                    placeholder="Your company"
                    data-testid="contact-input-company"
                  />
                </div>
              </div>

              <div>
                <label for="service" class="block text-sm font-medium text-theme-secondary mb-2">Service Interested In *</label>
                <select
                  id="service"
                  v-model="formData.service"
                  required
                  class="form-select"
                  data-testid="contact-input-service"
                >
                  <option value="" disabled>Select a service</option>
                  <option v-for="service in services" :key="service" :value="service">
                    {{ service }}
                  </option>
                </select>
              </div>

              <div>
                <label for="message" class="block text-sm font-medium text-theme-secondary mb-2">Message *</label>
                <textarea
                  id="message"
                  v-model="formData.message"
                  rows="5"
                  required
                  class="form-textarea resize-none"
                  placeholder="Tell us about your requirements..."
                  data-testid="contact-input-message"
                ></textarea>
              </div>

              <!-- Status Message -->
              <div
                v-if="submitStatus !== 'idle'"
                :class="[
                  'p-4 rounded-xl text-sm',
                  submitStatus === 'success' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'
                ]"
                data-testid="contact-status-message"
              >
                <div class="flex items-center gap-2">
                  <UIcon 
                    :name="submitStatus === 'success' ? 'i-heroicons-check-circle' : 'i-heroicons-exclamation-circle'" 
                    class="w-5 h-5 flex-shrink-0" 
                  />
                  <span>{{ submitMessage }}</span>
                </div>
              </div>

              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full py-4 btn-primary rounded-full disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                data-testid="contact-submit"
              >
                <UIcon v-if="isSubmitting" name="i-heroicons-arrow-path" class="w-5 h-5 animate-spin" />
                {{ isSubmitting ? 'Sending...' : 'Send Message' }}
              </button>
            </form>
          </div>

          <!-- Contact Info -->
          <div
            v-motion
            :initial="{ opacity: 0, x: 30 }"
            :visible="{ opacity: 1, x: 0, transition: { delay: 100 } }"
          >
            <h2 class="font-display text-3xl font-bold mb-8 text-theme-heading">
              Get in <span class="gradient-text">Touch</span>
            </h2>

            <div class="space-y-6 mb-12">
              <div class="flex items-start gap-4 info-card">
                <div class="w-14 h-14 rounded-xl icon-box flex items-center justify-center flex-shrink-0">
                  <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-theme-heading text-lg mb-1">Registered Office</h3>
                  <p class="text-theme-secondary">
                    B-609, Ayush Park, 2, Varale Phata,<br />
                    Talegaon Dabhade, Pune – 410507
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-4 info-card">
                <div class="w-14 h-14 rounded-xl icon-box flex items-center justify-center flex-shrink-0">
                  <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-theme-heading text-lg mb-1">Phone</h3>
                  <p class="text-theme-secondary">
                    <a href="tel:+918320140215" class="hover:text-brand transition-colors">+918320140215</a>
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-4 info-card">
                <div class="w-14 h-14 rounded-xl icon-box flex items-center justify-center flex-shrink-0">
                  <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-theme-heading text-lg mb-1">Email</h3>
                  <p class="text-theme-secondary">
                    <a href="mailto:anup@lifetimehospitality.in" class="hover:text-brand transition-colors">anup@lifetimehospitality.in</a>
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-4 info-card">
                <div class="w-14 h-14 rounded-xl icon-box flex items-center justify-center flex-shrink-0">
                  <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-theme-heading text-lg mb-1">Business Hours</h3>
                  <p class="text-theme-secondary">
                    Monday - Saturday: 9:00 AM - 6:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            <!-- Map Placeholder -->
            <!-- <div class="aspect-video rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.452664163537!2d73.67592627496591!3d18.71678748235185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b1e0b7b7b7b7%3A0x3bc2b1e0b7b7b7b7!2sTalegaon%20Dabhade%2C%20Maharashtra%20410207!5e0!3m2!1sen!2sin!4v1703123456789!5m2!1sen!2sin"
                class="w-full h-full border-0"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="LTHS Office Location - Talegaon Dabhade, Pune"
              ></iframe>
            </div> -->
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Contact CTA -->
    <section class="relative py-24 section-gradient">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-3 gap-8">
          <div
            v-for="(item, index) in [
              {
                icon: 'i-heroicons-phone',
                title: 'Call Us',
                desc: 'Speak directly with our team',
                action: 'Call +918320140215',
                href: 'tel:+918320140215',
              },
              {
                icon: 'i-heroicons-envelope',
                title: 'Email Us',
                desc: 'We reply within 24 hours',
                action: 'anup@lifetimehospitality.in',
                href: 'mailto:anup@lifetimehospitality.in',
              },
              {
                icon: 'i-heroicons-chat-bubble-left-right',
                title: 'WhatsApp',
                desc: 'Quick chat with us',
                action: 'Start Chat',
                href: 'https://wa.me/918320140215',
              },
            ]"
            :key="item.title"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visible="{ opacity: 1, y: 0, transition: { delay: index * 100 } }"
            class="text-center p-8 rounded-3xl card-gradient hover:border-brand-30 transition-colors"
          >
            <UIcon :name="item.icon" class="w-12 h-12 mb-4 text-brand" />
            <h3 class="font-display text-xl font-semibold text-theme-heading mb-2">
              {{ item.title }}
            </h3>
            <p class="text-theme-muted text-sm mb-4">{{ item.desc }}</p>
            <a
              :href="item.href"
              class="inline-flex items-center gap-2 text-brand font-semibold hover:gap-3 transition-all"
            >
              {{ item.action }}
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
