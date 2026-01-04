<script setup lang="ts">
useSeoMeta({
  title: 'Industries We Serve | LTHS - Lifetime Hospitality Services',
  description:
    'LTHS serves diverse industries including manufacturing, healthcare, corporate offices, education, and residential complexes.',
})

const industries = [
  {
    icon: '🏭',
    slug: 'manufacturing',
    title: 'Manufacturing & Industrial',
    description:
      'Comprehensive facility management for manufacturing plants and industrial facilities. We understand the unique requirements of industrial environments.',
    services: ['Housekeeping', 'Labour Supply', 'Maintenance', 'Security', 'Catering'],
    image: null,
  },
  {
    icon: '🏥',
    slug: 'healthcare',
    title: 'Healthcare Facilities',
    description:
      'Specialized services for hospitals, clinics, and healthcare centers. Our teams are trained in healthcare-specific protocols and hygiene standards.',
    services: ['Patient Care', 'Housekeeping', 'Pantry', 'Security', 'Maintenance'],
    image: null,
  },
  {
    icon: '🏢',
    slug: 'corporate',
    title: 'Corporate Offices',
    description:
      'Professional facility services for modern workplaces. From reception to maintenance, we keep your office running smoothly.',
    services: ['Housekeeping', 'Pantry', 'Office Support', 'Security', 'Maintenance'],
    image: null,
  },
  {
    icon: '🎓',
    slug: 'education',
    title: 'Educational Institutions',
    description:
      'Creating clean, safe, and nurturing environments for schools, colleges, and universities. We support academic excellence through facility excellence.',
    services: ['Housekeeping', 'Catering', 'Security', 'Horticulture', 'Maintenance'],
    image: null,
  },
  {
    icon: '🏘️',
    slug: 'residential',
    title: 'Residential Complexes',
    description:
      'Enhancing community living with comprehensive residential facility management. We help create comfortable, secure, and well-maintained living spaces.',
    services: ['Housekeeping', 'Security', 'Horticulture', 'Maintenance', 'Pantry'],
    image: null,
  },
]
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
          >Industries We Serve</span>
          <h1
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 100 } }"
            class="font-display text-5xl md:text-6xl font-bold mb-6 text-theme-heading"
          >
            Industry-Specific
            <span class="gradient-text">Expertise</span>
          </h1>
          <p
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 200 } }"
            class="text-xl text-theme-secondary leading-relaxed"
          >
            Our versatile team brings specialized knowledge and tailored solutions to diverse industry sectors.
          </p>
        </div>
      </div>
    </section>

    <!-- Industries Grid -->
    <section class="relative py-24 section-dark">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="space-y-24">
          <div
            v-for="(industry, index) in industries"
            :key="industry.slug"
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :visible="{ opacity: 1, y: 0, transition: { delay: index * 100 } }"
            :id="industry.slug"
            class="grid lg:grid-cols-2 gap-12 items-center"
            :class="{ 'lg:grid-flow-dense': index % 2 === 1 }"
          >
            <!-- Image -->
            <div :class="{ 'lg:col-start-2': index % 2 === 1 }">
              <div class="aspect-[4/3] rounded-3xl image-placeholder flex items-center justify-center">
                <div class="text-center">
                  <span class="text-7xl block mb-4">{{ industry.icon }}</span>
                  <p class="text-theme-muted">Industry Image</p>
                </div>
              </div>
            </div>

            <!-- Content -->
            <div :class="{ 'lg:col-start-1': index % 2 === 1 }">
              <div class="w-16 h-16 rounded-2xl icon-box flex items-center justify-center text-3xl mb-6">
                {{ industry.icon }}
              </div>
              <h2 class="font-display text-3xl md:text-4xl font-bold mb-4 text-theme-heading">
                {{ industry.title }}
              </h2>
              <p class="text-theme-secondary text-lg leading-relaxed mb-6">
                {{ industry.description }}
              </p>

              <div class="mb-8">
                <h4 class="text-sm text-theme-muted uppercase tracking-wider mb-4">Key Services</h4>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="service in industry.services"
                    :key="service"
                    class="px-4 py-2 text-sm font-medium text-brand bg-brand-10 rounded-full"
                  >
                    {{ service }}
                  </span>
                </div>
              </div>

              <NuxtLink
                to="/contact"
                class="inline-flex items-center gap-2 text-brand font-semibold hover:gap-4 transition-all duration-300"
                :data-testid="`industry-${industry.slug}-cta`"
              >
                Get a Quote
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="relative py-24 section-gradient">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="font-display text-4xl font-bold mb-6 text-theme-heading">
          Don't See Your <span class="gradient-text">Industry?</span>
        </h2>
        <p class="text-theme-secondary text-lg mb-8">
          We adapt our services to meet any industry's unique requirements. Contact us to discuss your specific needs.
        </p>
        <NuxtLink
          to="/contact"
          class="inline-flex items-center gap-3 px-8 py-4 btn-primary rounded-full"
          data-testid="industries-cta"
        >
          Contact Us
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
