<script setup lang="ts">
useSeoMeta({
  title: 'Why Choose LTHS | Lifetime Hospitality Services',
  description:
    'Discover why leading companies trust LTHS for their hospitality needs. Our expertise, reliability, and commitment set us apart.',
})

const reasons = [
  {
    icon: '🏆',
    title: 'Proven Track Record',
    description:
      'Over 8 years of excellence serving leading corporations like TE Connectivity, Thyssenkrupp, and Forbes Marshall.',
  },
  {
    icon: '👥',
    title: 'Trained Professionals',
    description:
      '500+ trained and certified professionals delivering quality service across all our service categories.',
  },
  {
    icon: '🔧',
    title: 'Own Infrastructure',
    description:
      'We operate with our own resources and infrastructure, ensuring complete control and quality assurance.',
  },
  {
    icon: '📋',
    title: 'Comprehensive Solutions',
    description:
      'From patient care to security services - we offer end-to-end hospitality solutions under one roof.',
  },
  {
    icon: '⚡',
    title: 'Quick Response',
    description:
      '24/7 support and rapid response times to ensure your operations never face disruption.',
  },
  {
    icon: '💰',
    title: 'Cost-Effective',
    description:
      'Competitive pricing without compromising on quality. We deliver value that exceeds investment.',
  },
  {
    icon: '🎓',
    title: 'Industry Expertise',
    description:
      'Led by professionals with decades of hospitality experience, bringing best practices to every engagement.',
  },
  {
    icon: '🔄',
    title: 'Flexible Engagement',
    description:
      'Customizable service packages tailored to your specific requirements and budget.',
  },
]

const stats = [
  { value: '8+', label: 'Years Experience' },
  { value: '500+', label: 'Trained Staff' },
  { value: '50+', label: 'Happy Clients' },
  { value: '9', label: 'Service Categories' },
]
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative pt-32 pb-20 overflow-hidden">
      <div class="absolute inset-0 animated-gradient"></div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <NuxtLink
          to="/about"
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
          Back to About
        </NuxtLink>

        <div class="max-w-3xl">
          <span class="text-[#d4a574] font-medium uppercase tracking-widest text-sm"
            >Why Choose Us</span
          >
          <h1 class="font-display text-5xl md:text-6xl font-bold mt-4 mb-6">
            The LTHS
            <span class="gradient-text">Difference</span>
          </h1>
          <p class="text-xl text-gray-400 leading-relaxed">
            Discover why leading organizations trust us for their hospitality
            needs.
          </p>
        </div>
      </div>
    </section>

    <!-- Stats Banner -->
    <section class="relative py-12 bg-[#050505]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div
            v-for="(stat, index) in stats"
            :key="stat.label"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visible="{ opacity: 1, y: 0, transition: { delay: index * 100 } }"
            class="text-center"
          >
            <p class="font-display text-4xl font-bold gradient-text">
              {{ stat.value }}
            </p>
            <p class="text-gray-500 text-sm mt-2">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Reasons Grid -->
    <section class="relative py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="(reason, index) in reasons"
            :key="reason.title"
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :visible="{ opacity: 1, y: 0, transition: { delay: index * 80 } }"
            class="group p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/5 hover:border-[#d4a574]/30 transition-all duration-300 hover-lift"
          >
            <div
              class="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#d4a574]/20 to-[#d4a574]/5 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform"
            >
              {{ reason.icon }}
            </div>
            <h3
              class="font-display text-lg font-semibold text-white mb-2 group-hover:text-[#d4a574] transition-colors"
            >
              {{ reason.title }}
            </h3>
            <p class="text-gray-500 text-sm leading-relaxed">
              {{ reason.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Comparison Section -->
    <section class="relative py-24 bg-[#050505]">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="font-display text-4xl font-bold mb-6">
            What Sets Us <span class="gradient-text">Apart</span>
          </h2>
        </div>

        <div
          class="rounded-3xl overflow-hidden border border-white/10 bg-white/5"
        >
          <table class="w-full">
            <thead>
              <tr class="border-b border-white/10">
                <th class="p-6 text-left text-gray-400">Feature</th>
                <th class="p-6 text-center text-[#d4a574]">LTHS</th>
                <th class="p-6 text-center text-gray-500">Others</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="item in [
                  'Own Infrastructure',
                  'Trained & Certified Staff',
                  '24/7 Support',
                  'Customizable Packages',
                  'Single Point of Contact',
                  'Quality Assurance',
                ]"
                :key="item"
                class="border-b border-white/5"
              >
                <td class="p-6 text-white">{{ item }}</td>
                <td class="p-6 text-center">
                  <span
                    class="inline-flex w-8 h-8 rounded-full bg-green-500/20 text-green-400 items-center justify-center"
                  >
                    ✓
                  </span>
                </td>
                <td class="p-6 text-center">
                  <span
                    class="inline-flex w-8 h-8 rounded-full bg-gray-500/20 text-gray-500 items-center justify-center"
                  >
                    ?
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="relative py-24">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="font-display text-4xl font-bold mb-6">
          Ready to Experience the
          <span class="gradient-text">Difference?</span>
        </h2>
        <p class="text-gray-400 text-lg mb-8">
          Join our growing list of satisfied clients. Request a free quote
          today.
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <NuxtLink
            to="/contact"
            class="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#d4a574] to-[#b8956e] text-[#0a0a0a] font-semibold rounded-full hover:shadow-2xl hover:shadow-[#d4a574]/30 transition-all duration-500"
            data-testid="why-choose-cta"
          >
            Get a Free Quote
          </NuxtLink>
          <a
            href="tel:8956690990"
            class="inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-white font-semibold rounded-full hover:bg-white/5 transition-all duration-300"
          >
            Call 8956690990
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

