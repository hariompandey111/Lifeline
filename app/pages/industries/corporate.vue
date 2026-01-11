<script setup lang="ts">
useSeoMeta({
  title: 'Corporate Office Facilities | LTHS - Lifetime Hospitality Services',
  description:
    'Professional facility management for modern workplaces and corporate offices. Comprehensive housekeeping, pantry, and maintenance services for business environments.',
})

const features = [
  {
    icon: 'i-heroicons-building-office-2',
    title: 'Office Housekeeping',
    description:
      'Professional cleaning services for workspaces, conference rooms, and common areas maintaining a pristine corporate environment.',
  },
  {
    icon: 'i-heroicons-cake',
    title: 'Pantry Management',
    description:
      'Complete pantry services including beverage preparation, snack management, and dining area maintenance.',
  },
  {
    icon: 'i-heroicons-user-group',
    title: 'Office Support',
    description:
      'Administrative support services including mail handling, supply management, and reception assistance.',
  },
  {
    icon: 'i-heroicons-wrench-screwdriver',
    title: 'Facility Maintenance',
    description:
      'Comprehensive maintenance services for HVAC, electrical systems, and general office infrastructure.',
  },
  {
    icon: 'i-heroicons-shield-check',
    title: 'Security Services',
    description:
      'Professional security personnel and access control systems to ensure workplace safety and security.',
  },
  {
    icon: 'i-heroicons-clock',
    title: 'Flexible Scheduling',
    description:
      'Services scheduled around business hours to minimize disruption to corporate operations and productivity.',
  },
]

const benefits = [
  { title: 'Professional Environment', description: 'Maintain a clean, professional workspace that impresses clients and boosts employee morale.' },
  { title: 'Increased Productivity', description: 'Well-maintained facilities allow employees to focus on their work without distractions.' },
  { title: 'Cost Efficiency', description: 'Outsourced facility management reduces overhead costs and provides predictable budgeting.' },
  { title: 'Compliance & Safety', description: 'Ensure workplace safety standards and regulatory compliance.' },
  { title: 'Scalable Solutions', description: 'Services that grow with your business needs and office expansion.' },
  { title: 'Expert Management', description: 'Professional facility management allowing your team to focus on core business activities.' },
]

const process = [
  { step: 1, title: 'Office Assessment', description: 'Comprehensive evaluation of your office layout, requirements, and current facility management needs.' },
  { step: 2, title: 'Service Customization', description: 'Development of tailored service plans that fit your corporate culture and business hours.' },
  { step: 3, title: 'Team Integration', description: 'Seamless integration of our team with your existing office operations and staff.' },
  { step: 4, title: 'Quality Implementation', description: 'Implementation of services with minimal disruption to daily business activities.' },
  { step: 5, title: 'Performance Monitoring', description: 'Continuous monitoring and optimization of service quality and efficiency.' },
]

const services = [
  'Office Housekeeping',
  'Pantry Services',
  'Office Support',
  'Security Services',
  'Facility Maintenance',
  'Mail & Courier Services',
  'Reception Support',
  'IT Support Assistance',
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
          >Corporate Offices</span>
            <h1
              v-motion
              :initial="{ opacity: 0, y: 30 }"
              :enter="{ opacity: 1, y: 0, transition: { delay: 100 } }"
              class="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-theme-heading"
            >
              Corporate Facility
              <span class="gradient-text">Management</span>
            </h1>
            <p
              v-motion
              :initial="{ opacity: 0, y: 30 }"
              :enter="{ opacity: 1, y: 0, transition: { delay: 200 } }"
              class="text-lg sm:text-xl text-theme-secondary leading-relaxed mb-8"
            >
            Professional facility management solutions designed for modern corporate offices and business environments.
            We create productive workspaces that enhance your company's image and employee satisfaction.
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
              data-testid="corporate-cta-primary"
            >
              Get Started
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </NuxtLink>
            <NuxtLink
              to="/services"
              class="inline-flex items-center gap-3 px-8 py-4 border-2 border-brand text-brand hover:bg-brand hover:text-white rounded-full transition-colors duration-300"
              data-testid="corporate-services-link"
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
            Comprehensive <span class="gradient-text">Office Services</span>
          </h2>
          <p class="text-theme-secondary text-lg">
            Our complete range of corporate facility management services designed to create productive and professional workspaces.
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
            Our <span class="gradient-text">Corporate Implementation</span>
          </h2>
          <p class="text-theme-secondary text-lg">
            A seamless integration process designed to minimize disruption to your business operations and maximize productivity.
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
              Why Choose LTHS for Your <span class="gradient-text">Corporate Office</span>
            </h2>
            <p class="text-theme-secondary text-lg mb-8 leading-relaxed">
              We bring corporate facility management expertise to create professional workspaces that enhance your company's
              image, boost employee productivity, and provide excellent value for your investment.
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
            <div class="text-center">
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop&crop=center" alt="Corporate Office Image" class="w-full h-full object-cover scale-110 sm:scale-125 md:scale-150">
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
            All Your <span class="gradient-text">Office Needs</span>
          </h2>
          <p class="text-theme-secondary text-lg mb-12">
            From daily housekeeping to comprehensive facility maintenance, we handle all aspects of corporate office management.
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
          Ready to Elevate Your <span class="gradient-text">Corporate Environment?</span>
        </h2>
        <p class="text-theme-secondary text-lg mb-8">
          Contact us today to discover how our comprehensive corporate facility management services can enhance your workplace.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink
            to="/contact"
            class="inline-flex items-center gap-3 px-8 py-4 btn-primary rounded-full"
            data-testid="corporate-final-cta"
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