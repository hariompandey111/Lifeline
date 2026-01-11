<script setup lang="ts">
useSeoMeta({
  title: 'Why Choose LTHS | Lifetime Hospitality Services',
  description:
    'Discover why leading companies trust LTHS for their hospitality needs. Our expertise, reliability, and commitment set us apart.',
})

const reasons = [
  {
    icon: 'i-heroicons-trophy',
    title: 'Proven Track Record',
    description:
      'Over 8 years of excellence serving leading corporations like TE Connectivity, Thyssenkrupp, and Forbes Marshall.',
  },
  {
    icon: 'i-heroicons-user-group',
    title: 'Trained Professionals',
    description:
      '500+ trained and certified professionals delivering quality service across all our service categories.',
  },
  {
    icon: 'i-heroicons-wrench-screwdriver',
    title: 'Own Infrastructure',
    description:
      'We operate with our own resources and infrastructure, ensuring complete control and quality assurance.',
  },
  {
    icon: 'i-heroicons-clipboard-document-list',
    title: 'Comprehensive Solutions',
    description:
      'From patient care to security services - we offer end-to-end hospitality solutions under one roof.',
  },
  {
    icon: 'i-heroicons-bolt',
    title: 'Quick Response',
    description:
      '24/7 support and rapid response times to ensure your operations never face disruption.',
  },
  {
    icon: 'i-heroicons-banknotes',
    title: 'Cost-Effective',
    description:
      'Competitive pricing without compromising on quality. We deliver value that exceeds investment.',
  },
  {
    icon: 'i-heroicons-academic-cap',
    title: 'Industry Expertise',
    description:
      'Led by professionals with decades of hospitality experience, bringing best practices to every engagement.',
  },
  {
    icon: 'i-heroicons-arrow-path',
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
          class="inline-flex items-center gap-2 text-theme-secondary hover:text-brand transition-colors mb-8"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          Back to About
        </NuxtLink>

        <div class="max-w-3xl">
          <span class="text-brand font-medium uppercase tracking-widest text-sm">Why Choose Us</span>
          <h1 class="font-display text-2xl md:text-6xl font-bold mt-4 mb-6 text-theme-heading">
            The LTHS
            <span class="gradient-text">Difference</span>
          </h1>
          <p class="text-xl text-theme-secondary leading-relaxed">
            Discover why leading organizations trust us for their hospitality needs.
          </p>
        </div>
      </div>
    </section>

    <!-- Stats Banner -->
    <section class="relative py-12 section-dark">
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
            <p class="text-theme-muted text-sm mt-2">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Reasons Grid -->
    <section class="relative py-24 section-gradient">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="(reason, index) in reasons"
            :key="reason.title"
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :visible="{ opacity: 1, y: 0, transition: { delay: index * 80 } }"
            class="group p-6 rounded-2xl card-gradient hover:border-brand-30 transition-all duration-300 hover-lift"
          >
            <div class="w-16 h-16 rounded-2xl icon-box flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <UIcon :name="reason.icon" class="w-8 h-8" />
            </div>
            <h3 class="font-display text-lg font-semibold text-theme-heading mb-2 group-hover:text-brand transition-colors">
              {{ reason.title }}
            </h3>
            <p class="text-theme-muted text-sm leading-relaxed">
              {{ reason.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Comparison Section -->
    <section class="relative py-24 section-dark">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="font-display text-4xl font-bold mb-6 text-theme-heading">
            What Sets Us <span class="gradient-text">Apart</span>
          </h2>
        </div>

        <div class="rounded-3xl overflow-hidden border border-theme card-gradient">
          <table class="w-full">
            <thead>
              <tr class="border-b border-theme">
                <th class="p-6 text-left text-theme-secondary">Feature</th>
                <th class="p-6 text-center text-brand">LTHS</th>
                <th class="p-6 text-center text-theme-muted">Others</th>
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
                class="border-b border-theme-light"
              >
                <td class="p-6 text-theme-heading">{{ item }}</td>
                <td class="p-6 text-center">
                  <span class="inline-flex w-8 h-8 rounded-full bg-green-500/20 text-green-400 items-center justify-center">
                    ✓
                  </span>
                </td>
                <td class="p-6 text-center">
                  <span class="inline-flex w-8 h-8 rounded-full bg-brand-10 text-theme-muted items-center justify-center">
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
    <section class="relative py-24 section-gradient">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="font-display text-4xl font-bold mb-6 text-theme-heading">
          Ready to Experience the
          <span class="gradient-text">Difference?</span>
        </h2>
        <p class="text-theme-secondary text-lg mb-8">
          Join our growing list of satisfied clients. Request a free quote today.
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <NuxtLink
            to="/contact"
            class="inline-flex items-center gap-3 px-8 py-4 btn-primary rounded-full"
            data-testid="why-choose-cta"
          >
            Get a Free Quote
          </NuxtLink>
          <a
            href="tel:+918320140215"
            class="inline-flex items-center gap-3 px-8 py-4 btn-ghost rounded-full"
          >
            Call +918320140215
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
