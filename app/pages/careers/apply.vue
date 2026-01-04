<script setup lang="ts">
useSeoMeta({
  title: 'Apply Now | Careers | LTHS',
  description: 'Submit your application to join the LTHS team.',
})

const formData = reactive({
  name: '',
  email: '',
  phone: '',
  position: '',
  experience: '',
  message: '',
})

const positions = [
  'Housekeeping Supervisor',
  'Security Guard',
  'Patient Care Attendant',
  'Office Admin Executive',
  'Catering Staff',
  'Maintenance Technician',
  'Other',
]

function handleSubmit() {
  // Handle form submission
  console.log('Form submitted:', formData)
  alert(
    'Thank you for your application! We will review and get back to you soon.',
  )
}
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative pt-32 pb-12 overflow-hidden">
      <div class="absolute inset-0 animated-gradient"></div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <NuxtLink
          to="/careers"
          class="inline-flex items-center gap-2 text-gray-400 hover:text-[#d4a574] transition-colors mb-8"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Careers
        </NuxtLink>

        <div class="max-w-3xl">
          <h1 class="font-display text-5xl font-bold mb-6">
            Apply <span class="gradient-text">Now</span>
          </h1>
          <p class="text-xl text-gray-400">
            Fill out the form below and take the first step towards joining our
            team.
          </p>
        </div>
      </div>
    </section>

    <!-- Application Form -->
    <section class="relative py-24">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <form
          class="space-y-6 p-8 rounded-3xl bg-white/5 border border-white/10"
          data-testid="application-form"
          @submit.prevent="handleSubmit"
        >
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-300 mb-2"
                >Full Name *</label
              >
              <input
                id="name"
                v-model="formData.name"
                type="text"
                required
                class="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-[#d4a574] focus:outline-none focus:ring-1 focus:ring-[#d4a574] transition-colors"
                placeholder="Your name"
                data-testid="input-name"
              />
            </div>
            <div>
              <label for="email" class="block text-sm font-medium text-gray-300 mb-2"
                >Email *</label
              >
              <input
                id="email"
                v-model="formData.email"
                type="email"
                required
                class="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-[#d4a574] focus:outline-none focus:ring-1 focus:ring-[#d4a574] transition-colors"
                placeholder="your@email.com"
                data-testid="input-email"
              />
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <label for="phone" class="block text-sm font-medium text-gray-300 mb-2"
                >Phone Number *</label
              >
              <input
                id="phone"
                v-model="formData.phone"
                type="tel"
                required
                class="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-[#d4a574] focus:outline-none focus:ring-1 focus:ring-[#d4a574] transition-colors"
                placeholder="Your phone number"
                data-testid="input-phone"
              />
            </div>
            <div>
              <label
                for="position"
                class="block text-sm font-medium text-gray-300 mb-2"
                >Position Applying For *</label
              >
              <select
                id="position"
                v-model="formData.position"
                required
                class="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-[#d4a574] focus:outline-none focus:ring-1 focus:ring-[#d4a574] transition-colors"
                data-testid="input-position"
              >
                <option value="" disabled>Select position</option>
                <option v-for="pos in positions" :key="pos" :value="pos">
                  {{ pos }}
                </option>
              </select>
            </div>
          </div>

          <div>
            <label
              for="experience"
              class="block text-sm font-medium text-gray-300 mb-2"
              >Years of Experience *</label
            >
            <select
              id="experience"
              v-model="formData.experience"
              required
              class="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-[#d4a574] focus:outline-none focus:ring-1 focus:ring-[#d4a574] transition-colors"
              data-testid="input-experience"
            >
              <option value="" disabled>Select experience</option>
              <option value="0-1">0-1 years</option>
              <option value="1-3">1-3 years</option>
              <option value="3-5">3-5 years</option>
              <option value="5+">5+ years</option>
            </select>
          </div>

          <div>
            <label for="resume" class="block text-sm font-medium text-gray-300 mb-2"
              >Resume/CV</label
            >
            <div
              class="w-full px-4 py-8 rounded-xl bg-white/5 border border-dashed border-white/20 text-center cursor-pointer hover:border-[#d4a574]/50 transition-colors"
            >
              <svg
                class="w-10 h-10 mx-auto text-gray-500 mb-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
              <p class="text-gray-500 text-sm">
                Click to upload or drag and drop
              </p>
              <p class="text-gray-600 text-xs mt-1">PDF, DOC up to 5MB</p>
            </div>
          </div>

          <div>
            <label for="message" class="block text-sm font-medium text-gray-300 mb-2"
              >Cover Letter / Additional Information</label
            >
            <textarea
              id="message"
              v-model="formData.message"
              rows="4"
              class="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-[#d4a574] focus:outline-none focus:ring-1 focus:ring-[#d4a574] transition-colors resize-none"
              placeholder="Tell us about yourself..."
              data-testid="input-message"
            ></textarea>
          </div>

          <button
            type="submit"
            class="w-full py-4 bg-gradient-to-r from-[#d4a574] to-[#b8956e] text-[#0a0a0a] font-semibold rounded-full hover:shadow-2xl hover:shadow-[#d4a574]/30 transition-all duration-500"
            data-testid="submit-application"
          >
            Submit Application
          </button>
        </form>
      </div>
    </section>
  </div>
</template>

