<script setup lang="ts">
useSeoMeta({
  title: 'Manufacturing & Industrial Facilities | LTHS - Lifetime Hospitality Services',
  description:
    'Comprehensive facility management for manufacturing plants and industrial facilities. Expert housekeeping, maintenance, and support services tailored for industrial environments.',
})

const features = [
  {
    icon: 'i-heroicons-building-storefront',
    title: 'Industrial Cleaning',
    description:
      'Specialized cleaning protocols for manufacturing floors, equipment, and industrial spaces with heavy-duty equipment and trained personnel.',
  },
  {
    icon: 'i-heroicons-wrench-screwdriver',
    title: 'Equipment Maintenance',
    description:
      'Regular maintenance and servicing of industrial equipment, ensuring optimal performance and minimizing downtime.',
  },
  {
    icon: 'i-heroicons-shield-check',
    title: 'Safety Compliance',
    description:
      'Adherence to industrial safety standards and protocols to maintain a safe working environment for all personnel.',
  },
  {
    icon: 'i-heroicons-clock',
    title: '24/7 Operations',
    description:
      'Round-the-clock support to ensure continuous operations and immediate response to any facility requirements.',
  },
  {
    icon: 'i-heroicons-users',
    title: 'Skilled Workforce',
    description:
      'Trained professionals familiar with industrial environments and manufacturing processes.',
  },
  {
    icon: 'i-heroicons-cog',
    title: 'Process Optimization',
    description:
      'Streamlined processes that complement manufacturing operations without disrupting production schedules.',
  },
]

const benefits = [
  { title: 'Operational Efficiency', description: 'Minimize downtime and maintain optimal production schedules.' },
  { title: 'Cost Reduction', description: 'Efficient resource utilization and preventive maintenance programs.' },
  { title: 'Safety First', description: 'Maintain highest safety standards in industrial environments.' },
  { title: 'Quality Assurance', description: 'Consistent service quality that meets manufacturing standards.' },
  { title: 'Expert Support', description: 'Industry-specific knowledge and specialized service delivery.' },
  { title: 'Flexible Solutions', description: 'Adaptable services that fit your manufacturing schedule and needs.' },
]

const process = [
  { step: 1, title: 'Facility Assessment', description: 'Comprehensive evaluation of your manufacturing facility and specific requirements.' },
  { step: 2, title: 'Customized Planning', description: 'Development of tailored service plans that complement your production processes.' },
  { step: 3, title: 'Team Deployment', description: 'Deployment of trained personnel familiar with industrial environments.' },
  { step: 4, title: 'Quality Monitoring', description: 'Continuous monitoring and quality assurance to ensure service excellence.' },
  { step: 5, title: 'Performance Review', description: 'Regular performance reviews and optimization of service delivery.' },
]

const services = [
  'Industrial Housekeeping',
  'Equipment Cleaning & Maintenance',
  'Labour Supply',
  'Security Services',
  'Catering Solutions',
  'Waste Management',
  'Facility Support',
  'Emergency Response',
]
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="relative pt-32 pb-20 overflow-hidden">
      <div class="absolute inset-0 animated-gradient"></div>
      <div class="absolute top-40 right-20 w-96 h-96 decorative-blob rounded-full blur-3xl"></div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl">
          <span
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0 }"
            class="inline-block text-brand font-medium uppercase tracking-widest text-sm mb-4"
          >Manufacturing & Industrial</span>
            <h1
              v-motion
              :initial="{ opacity: 0, y: 30 }"
              :enter="{ opacity: 1, y: 0, transition: { delay: 100 } }"
              class="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-theme-heading"
            >
              Industrial Facility
              <span class="gradient-text">Management</span>
            </h1>
            <p
              v-motion
              :initial="{ opacity: 0, y: 30 }"
              :enter="{ opacity: 1, y: 0, transition: { delay: 200 } }"
              class="text-lg sm:text-xl text-theme-secondary leading-relaxed mb-8"
            >
            Comprehensive facility management solutions designed specifically for manufacturing plants and industrial facilities.
            We understand the unique requirements of industrial environments and deliver services that support your production goals.
          </p>

          <div
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 300 } }"
            class="flex flex-col sm:flex-row flex-wrap gap-4"
          >
            <NuxtLink
              to="/contact"
              class="inline-flex items-center gap-3 px-8 py-4 btn-primary rounded-full"
              data-testid="manufacturing-cta-primary"
            >
              Get Started
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </NuxtLink>
            <NuxtLink
              to="/services"
              class="inline-flex items-center gap-3 px-8 py-4 border-2 border-brand text-brand hover:bg-brand hover:text-white rounded-full transition-colors duration-300"
              data-testid="manufacturing-services-link"
            >
              Our Services
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="relative py-24 section-dark">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <span class="inline-block text-brand font-medium uppercase tracking-widest text-sm mb-4">What We Offer</span>
          <h2 class="font-display text-4xl font-bold mb-6 text-theme-heading">
            Specialized <span class="gradient-text">Industrial Services</span>
          </h2>
          <p class="text-theme-secondary text-lg">
            Our comprehensive range of services is tailored to meet the unique demands of manufacturing and industrial facilities.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(feature, index) in features"
            :key="feature.title"
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :visible="{ opacity: 1, y: 0, transition: { delay: index * 100 } }"
            class="bg-theme-card p-8 rounded-3xl border border-theme-border hover:shadow-xl transition-all duration-300"
          >
            <div class="w-16 h-16 rounded-2xl icon-box flex items-center justify-center mb-6">
              <UIcon :name="feature.icon" class="w-8 h-8" />
            </div>
            <h3 class="text-xl font-bold mb-4 text-theme-heading">{{ feature.title }}</h3>
            <p class="text-theme-secondary leading-relaxed">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="relative py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <span class="inline-block text-brand font-medium uppercase tracking-widest text-sm mb-4">How It Works</span>
          <h2 class="font-display text-4xl font-bold mb-6 text-theme-heading">
            Our <span class="gradient-text">Implementation Process</span>
          </h2>
          <p class="text-theme-secondary text-lg">
            A systematic approach to ensure seamless integration of our services into your manufacturing operations.
          </p>
        </div>

        <div class="relative">
          <!-- Connection Line -->
          <div class="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-full max-w-4xl h-0.5 bg-gradient-to-r from-brand to-brand-60"></div>

          <div class="grid lg:grid-cols-5 gap-8">
            <div
              v-for="(step, index) in process"
              :key="step.step"
              v-motion
              :initial="{ opacity: 0, y: 30 }"
              :visible="{ opacity: 1, y: 0, transition: { delay: index * 150 } }"
              class="text-center"
            >
              <div class="relative">
                <div class="w-20 h-20 rounded-full bg-brand text-white flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg">
                  {{ step.step }}
                </div>
              </div>
              <h3 class="text-xl font-bold mb-4 text-theme-heading">{{ step.title }}</h3>
              <p class="text-theme-secondary leading-relaxed">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="relative py-24 section-dark">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span class="inline-block text-brand font-medium uppercase tracking-widest text-sm mb-4">Benefits</span>
            <h2 class="font-display text-4xl font-bold mb-6 text-theme-heading">
              Why Choose LTHS for Your <span class="gradient-text">Manufacturing Facility</span>
            </h2>
            <p class="text-theme-secondary text-lg mb-8 leading-relaxed">
              We bring specialized knowledge and proven methodologies to ensure your industrial facility operates at peak efficiency
              while maintaining the highest standards of safety and cleanliness.
            </p>

            <div class="grid gap-6">
              <div
                v-for="(benefit, index) in benefits"
                :key="benefit.title"
                v-motion
                :initial="{ opacity: 0, x: -30 }"
                :visible="{ opacity: 1, x: 0, transition: { delay: index * 100 } }"
                class="flex gap-4"
              >
                <div class="w-2 h-2 rounded-full bg-brand mt-3 flex-shrink-0"></div>
                <div>
                  <h3 class="font-semibold text-theme-heading mb-1">{{ benefit.title }}</h3>
                  <p class="text-theme-secondary">{{ benefit.description }}</p>
                </div>
              </div>
            </div>
          </div>

          <div
            v-motion
            :initial="{ opacity: 0, x: 30 }"
            :visible="{ opacity: 1, x: 0 }"
            class="aspect-[4/4] rounded-3xl overflow-hidden"
          >
            <img src="https://gayoqnznilzdyltepowm.supabase.co/storage/v1/object/sign/lifetime-assets/manufacturing.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xOTQ0OTI5Yy1jYTE1LTQ0MDctOWJlYS1jMjgyODM5ZTcyNzUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsaWZldGltZS1hc3NldHMvbWFudWZhY3R1cmluZy5wbmciLCJpYXQiOjE3NjgxMjQyNjYsImV4cCI6MTMyNzA4Mjc0NjY2fQ.gUspFVPfeYF4hdqHkQjIvRmJy6dy7KBNyGrkqUsWDEE" alt="Manufacturing Facility Image" class="w-full h-full object-cover scale-110 sm:scale-125 md:scale-150">
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="relative py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <span class="inline-block text-brand font-medium uppercase tracking-widest text-sm mb-4">Comprehensive Services</span>
          <h2 class="font-display text-4xl font-bold mb-6 text-theme-heading">
            Complete <span class="gradient-text">Facility Solutions</span>
          </h2>
          <p class="text-theme-secondary text-lg mb-12">
            From housekeeping to emergency response, we provide all the services your manufacturing facility needs.
          </p>

          <div class="flex flex-wrap justify-center gap-3">
            <span
              v-for="service in services"
              :key="service"
              class="px-6 py-3 text-sm font-medium text-brand bg-brand-10 rounded-full"
            >
              {{ service }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="relative py-24 section-gradient">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="font-display text-4xl font-bold mb-6 text-theme-heading">
          Ready to Optimize Your <span class="gradient-text">Manufacturing Operations?</span>
        </h2>
        <p class="text-theme-secondary text-lg mb-8">
          Contact us today to discuss how our specialized industrial facility management services can support your manufacturing goals.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink
            to="/contact"
            class="inline-flex items-center gap-3 px-8 py-4 btn-primary rounded-full"
            data-testid="manufacturing-final-cta"
          >
            Get a Quote
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </NuxtLink>
          <a
            href="tel:+919876543210"
            class="inline-flex items-center gap-3 px-8 py-4 border-2 border-brand text-brand hover:bg-brand hover:text-white rounded-full transition-colors duration-300"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call Now
          </a>
        </div>
      </div>
    </section>
  </div>
</template>