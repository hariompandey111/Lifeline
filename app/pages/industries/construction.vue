<script setup lang="ts">
useSeoMeta({
  title: 'Construction & Infrastructure | LTHS - Lifetime Hospitality Services',
  description:
    'Specialized facility management for construction sites, infrastructure projects, and building developments. Expert site management and support services.',
})

const features = [
  {
    icon: 'i-heroicons-wrench-screwdriver',
    title: 'Site Management',
    description:
      'Comprehensive site management including equipment maintenance, tool tracking, and construction area organization for optimal workflow.',
  },
  {
    icon: 'i-heroicons-users',
    title: 'Labour Support',
    description:
      'Skilled and unskilled labour support for various construction activities including material handling, site preparation, and general assistance.',
  },
  {
    icon: 'i-heroicons-shield-check',
    title: 'Safety Compliance',
    description:
      'Implementation of safety protocols, hazard identification, and compliance with construction safety standards and regulations.',
  },
  {
    icon: 'i-heroicons-truck',
    title: 'Logistics Support',
    description:
      'Material transportation, inventory management, and supply chain coordination to ensure timely delivery of construction materials.',
  },
  {
    icon: 'i-heroicons-sparkles',
    title: 'Site Cleaning',
    description:
      'Regular site cleaning, debris removal, and waste management to maintain clean and organized construction environments.',
  },
  {
    icon: 'i-heroicons-clock',
    title: 'Project Timeline Support',
    description:
      'Flexible scheduling and round-the-clock support to meet construction project timelines and deadlines.',
  },
]

const benefits = [
  { title: 'Efficient Operations', description: 'Streamlined site management reduces downtime and improves construction efficiency.' },
  { title: 'Safety First', description: 'Enhanced safety protocols protect workers and reduce accident risks on construction sites.' },
  { title: 'Cost Control', description: 'Optimized resource utilization and reduced material waste through professional management.' },
  { title: 'Quality Assurance', description: 'Consistent quality standards across all construction activities and deliverables.' },
  { title: 'Timeline Adherence', description: 'Reliable support services ensure projects stay on schedule and within budget.' },
  { title: 'Regulatory Compliance', description: 'Full compliance with construction industry regulations and safety standards.' },
]

const process = [
  { step: 1, title: 'Site Assessment', description: 'Comprehensive evaluation of construction site requirements, scope, and specific project needs.' },
  { step: 2, title: 'Resource Planning', description: 'Strategic planning of manpower, equipment, and logistics to support construction activities.' },
  { step: 3, title: 'Safety Implementation', description: 'Establishment of safety protocols and compliance measures specific to the construction site.' },
  { step: 4, title: 'Service Deployment', description: 'Deployment of skilled personnel and resources aligned with construction project phases.' },
  { step: 5, title: 'Performance Monitoring', description: 'Continuous monitoring and optimization of services to ensure project success.' },
]

const services = [
  'Site Management',
  'Construction Labour',
  'Equipment Maintenance',
  'Safety Compliance',
  'Site Cleaning',
  'Logistics Support',
  'Material Handling',
  'Waste Management',
  'Security Services',
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
          >Construction & Infrastructure</span>
          <h1
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 100 } }"
            class="font-display text-5xl md:text-6xl font-bold mb-6 text-theme-heading"
          >
            Construction Site
            <span class="gradient-text">Management</span>
          </h1>
          <p
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 200 } }"
            class="text-xl text-theme-secondary leading-relaxed mb-8"
          >
            Specialized facility management solutions for construction sites and infrastructure projects.
            We provide comprehensive support services that ensure your construction projects run smoothly, safely, and efficiently.
          </p>

          <div
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 300 } }"
            class="flex flex-wrap gap-4"
          >
            <NuxtLink
              to="/contact"
              class="inline-flex items-center gap-3 px-8 py-4 btn-primary rounded-full"
              data-testid="construction-cta-primary"
            >
              Get Started
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </NuxtLink>
            <NuxtLink
              to="/services"
              class="inline-flex items-center gap-3 px-8 py-4 border-2 border-brand text-brand hover:bg-brand hover:text-white rounded-full transition-colors duration-300"
              data-testid="construction-services-link"
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
            Specialized <span class="gradient-text">Construction Services</span>
          </h2>
          <p class="text-theme-secondary text-lg">
            Our comprehensive range of services is tailored to meet the unique demands of construction sites and infrastructure projects.
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
            Our <span class="gradient-text">Construction Implementation</span>
          </h2>
          <p class="text-theme-secondary text-lg">
            A systematic approach designed to integrate our services seamlessly with construction project timelines and requirements.
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
              Why Choose LTHS for Your <span class="gradient-text">Construction Projects</span>
            </h2>
            <p class="text-theme-secondary text-lg mb-8 leading-relaxed">
              We bring specialized construction site management expertise to ensure your infrastructure projects
              are completed safely, efficiently, and within budget while maintaining the highest standards of quality.
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
            class="aspect-[4/3] rounded-3xl image-placeholder flex items-center justify-center"
          >
            <div class="text-center">
              <UIcon name="i-heroicons-wrench-screwdriver" class="w-20 h-20 mb-4 text-brand" />
              <p class="text-theme-muted">Construction Site Image</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="relative py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <span class="inline-block text-brand font-medium uppercase tracking-widest text-sm mb-4">Complete Solutions</span>
          <h2 class="font-display text-4xl font-bold mb-6 text-theme-heading">
            Supporting <span class="gradient-text">Construction Success</span>
          </h2>
          <p class="text-theme-secondary text-lg mb-12">
            From site management to safety compliance, we provide all the specialized services your construction project requires.
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
          Ready to Accelerate Your <span class="gradient-text">Construction Project?</span>
        </h2>
        <p class="text-theme-secondary text-lg mb-8">
          Contact us today to discover how our specialized construction site management services can support your infrastructure development goals.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink
            to="/contact"
            class="inline-flex items-center gap-3 px-8 py-4 btn-primary rounded-full"
            data-testid="construction-final-cta"
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