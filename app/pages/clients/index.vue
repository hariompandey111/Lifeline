<script setup lang="ts">
useSeoMeta({
  title: 'Our Clients | LTHS - Lifetime Hospitality Services',
  description:
    'Trusted by leading companies like TE Connectivity, Thyssenkrupp, and Forbes Marshall. Discover our client success stories.',
})

const clients = [
  {
    name: 'TE Connectivity',
    location: 'Wagholi, Pune',
    industry: 'Electronics Manufacturing',
    services: ['Housekeeping', 'Security', 'Catering'],
    logo: null,
  },
  {
    name: 'Thyssenkrupp',
    location: 'Chakan, Pune',
    industry: 'Industrial Manufacturing',
    services: ['Housekeeping', 'Labour Supply', 'Maintenance'],
    logo: null,
  },
  {
    name: 'Forbes Marshall',
    location: 'Chakan & Pimpri, Pune',
    industry: 'Steam Engineering',
    services: ['Housekeeping', 'Pantry', 'Security'],
    logo: null,
  },
]

const testimonials = [
  {
    quote:
      'LTHS has been instrumental in maintaining our facility standards. Their team is professional, reliable, and always goes the extra mile.',
    author: 'Facility Manager',
    company: 'Leading Manufacturing Company',
  },
  {
    quote:
      'We\'ve been working with LTHS for over 3 years and their consistency in service quality is remarkable. Highly recommended.',
    author: 'HR Director',
    company: 'Corporate Client',
  },
  {
    quote:
      'The patient care services provided by LTHS are compassionate and professional. Our healthcare facility has benefited greatly.',
    author: 'Operations Head',
    company: 'Healthcare Facility',
  },
]

const stats = [
  { value: '50+', label: 'Happy Clients' },
  { value: '8+', label: 'Years of Service' },
  { value: '95%', label: 'Client Retention' },
  { value: '100%', label: 'Commitment' },
]
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="relative pt-32 pb-20 overflow-hidden">
      <div class="absolute inset-0 animated-gradient"></div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl">
          <span
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0 }"
            class="inline-block text-[#d4a574] font-medium uppercase tracking-widest text-sm mb-4"
            >Our Clients</span
          >
          <h1
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 100 } }"
            class="font-display text-5xl md:text-6xl font-bold mb-6"
          >
            Trusted by
            <span class="gradient-text">Industry Leaders</span>
          </h1>
          <p
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 200 } }"
            class="text-xl text-gray-400 leading-relaxed"
          >
            Our distinguished list of clients across industries speaks about our
            credentials and capabilities.
          </p>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section id="logos" class="relative py-16 bg-[#050505]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div
            v-for="(stat, index) in stats"
            :key="stat.label"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visible="{ opacity: 1, y: 0, transition: { delay: index * 100 } }"
            class="text-center p-6 rounded-2xl bg-white/5 border border-white/5"
          >
            <p class="font-display text-4xl font-bold gradient-text mb-2">
              {{ stat.value }}
            </p>
            <p class="text-gray-500 text-sm">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Clients -->
    <section class="relative py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="font-display text-4xl font-bold">
            Our Esteemed <span class="gradient-text">Clients</span>
          </h2>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div
            v-for="(client, index) in clients"
            :key="client.name"
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :visible="{ opacity: 1, y: 0, transition: { delay: index * 100 } }"
            class="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-[#d4a574]/30 transition-all duration-300 hover-lift"
          >
            <!-- Logo Placeholder -->
            <div
              class="h-24 rounded-xl bg-white/10 flex items-center justify-center mb-6"
            >
              <span class="text-2xl font-bold text-gray-400">{{
                client.name
              }}</span>
            </div>

            <h3 class="font-display text-xl font-semibold text-white mb-2">
              {{ client.name }}
            </h3>
            <p class="text-[#d4a574] text-sm mb-2">{{ client.location }}</p>
            <p class="text-gray-500 text-sm mb-4">{{ client.industry }}</p>

            <div class="flex flex-wrap gap-2">
              <span
                v-for="service in client.services"
                :key="service"
                class="px-3 py-1 text-xs text-gray-400 bg-white/5 rounded-full"
              >
                {{ service }}
              </span>
            </div>
          </div>
        </div>

        <p class="text-center text-gray-500 mt-8">...and many more</p>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="relative py-24 bg-[#050505]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="font-display text-4xl font-bold mb-6">
            What Our Clients <span class="gradient-text">Say</span>
          </h2>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div
            v-for="(testimonial, index) in testimonials"
            :key="index"
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :visible="{ opacity: 1, y: 0, transition: { delay: index * 100 } }"
            class="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10"
          >
            <svg
              class="w-10 h-10 text-[#d4a574]/30 mb-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"
              />
            </svg>
            <p class="text-gray-300 leading-relaxed mb-6">
              {{ testimonial.quote }}
            </p>
            <div>
              <p class="font-semibold text-white">{{ testimonial.author }}</p>
              <p class="text-[#d4a574] text-sm">{{ testimonial.company }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Case Studies / Success Stories -->
    <section class="relative py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span class="text-[#d4a574] font-medium uppercase tracking-widest text-sm"
              >Success Stories</span
            >
            <h2 class="font-display text-4xl font-bold mt-4 mb-6">
              Making a <span class="gradient-text">Difference</span>
            </h2>
            <p class="text-gray-400 text-lg leading-relaxed mb-8">
              From small startups to large corporations, we've helped
              organizations across industries create better environments for
              their people.
            </p>

            <div class="space-y-4">
              <div class="flex items-center gap-4 p-4 rounded-xl bg-white/5">
                <div
                  class="w-12 h-12 rounded-lg bg-[#d4a574]/20 flex items-center justify-center text-2xl"
                >
                  ✓
                </div>
                <div>
                  <p class="font-semibold text-white">
                    50+ facilities managed
                  </p>
                  <p class="text-gray-500 text-sm">Across Pune region</p>
                </div>
              </div>
              <div class="flex items-center gap-4 p-4 rounded-xl bg-white/5">
                <div
                  class="w-12 h-12 rounded-lg bg-[#d4a574]/20 flex items-center justify-center text-2xl"
                >
                  ✓
                </div>
                <div>
                  <p class="font-semibold text-white">
                    500+ professionals deployed
                  </p>
                  <p class="text-gray-500 text-sm">Trained and certified</p>
                </div>
              </div>
              <div class="flex items-center gap-4 p-4 rounded-xl bg-white/5">
                <div
                  class="w-12 h-12 rounded-lg bg-[#d4a574]/20 flex items-center justify-center text-2xl"
                >
                  ✓
                </div>
                <div>
                  <p class="font-semibold text-white">95% client retention</p>
                  <p class="text-gray-500 text-sm">Long-term partnerships</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Image Placeholder -->
          <div class="relative">
            <div
              class="aspect-square rounded-3xl image-placeholder bg-gradient-to-br from-[#1a1a2e] to-[#0a0a0a] border border-white/10 flex items-center justify-center"
            >
              <div class="text-center">
                <span class="text-6xl block mb-4">📈</span>
                <p class="text-gray-500">Success Story Image</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="relative py-24 bg-[#050505]">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="font-display text-4xl font-bold mb-6">
          Join Our Growing List of
          <span class="gradient-text">Happy Clients</span>
        </h2>
        <p class="text-gray-400 text-lg mb-8">
          Experience the LTHS difference. Contact us today for a consultation.
        </p>
        <NuxtLink
          to="/contact"
          class="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#d4a574] to-[#b8956e] text-[#0a0a0a] font-semibold rounded-full hover:shadow-2xl hover:shadow-[#d4a574]/30 transition-all duration-500"
          data-testid="clients-cta"
        >
          Get Started
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

