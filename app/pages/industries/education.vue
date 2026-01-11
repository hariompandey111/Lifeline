<script setup lang="ts">
useSeoMeta({
  title: 'Educational Institutions | LTHS - Lifetime Hospitality Services',
  description:
    'Comprehensive facility management for schools, colleges, and universities. Creating safe, clean learning environments that support academic excellence.',
})

const features = [
  {
    icon: 'i-heroicons-academic-cap',
    title: 'Educational Cleaning',
    description:
      'Specialized cleaning protocols for classrooms, laboratories, libraries, and educational facilities maintaining a healthy learning environment.',
  },
  {
    icon: 'i-heroicons-cake',
    title: 'Catering Services',
    description:
      'Nutritious meal services for students and staff, including cafeterias, canteens, and special dietary accommodations.',
  },
  {
    icon: 'i-heroicons-shield-check',
    title: 'Campus Security',
    description:
      'Comprehensive security services ensuring the safety of students, faculty, and campus facilities around the clock.',
  },
  {
    icon: 'i-heroicons-sparkles',
    title: 'Facility Maintenance',
    description:
      'Regular maintenance of educational infrastructure including classrooms, sports facilities, and administrative buildings.',
  },
  {
    icon: 'i-heroicons-home-modern',
    title: 'Hostel Management',
    description:
      'Complete hostel and dormitory management including housekeeping, security, and resident support services.',
  },
  {
    icon: 'i-heroicons-user-group',
    title: 'Student Support',
    description:
      'Additional support services for student welfare including medical assistance and emergency response coordination.',
  },
]

const benefits = [
  { title: 'Safe Learning Environment', description: 'Clean, secure, and well-maintained facilities that support student safety and well-being.' },
  { title: 'Academic Focus', description: 'Well-maintained facilities allow students and teachers to focus on education without distractions.' },
  { title: 'Health & Hygiene', description: 'Strict hygiene standards protect against illnesses and maintain a healthy campus environment.' },
  { title: 'Operational Efficiency', description: 'Professional facility management reduces administrative burden on educational institutions.' },
  { title: 'Community Trust', description: 'Demonstrates commitment to quality education through excellent facility management.' },
  { title: 'Cost Effectiveness', description: 'Predictable budgeting and efficient resource utilization for educational institutions.' },
]

const process = [
  { step: 1, title: 'Campus Assessment', description: 'Comprehensive evaluation of educational facilities, student population, and specific institutional requirements.' },
  { step: 2, title: 'Educational Planning', description: 'Development of customized service plans that align with academic calendars and institutional goals.' },
  { step: 3, title: 'Staff Integration', description: 'Seamless integration with existing faculty and staff while maintaining campus security protocols.' },
  { step: 4, title: 'Service Implementation', description: 'Careful implementation of services with minimal disruption to academic activities.' },
  { step: 5, title: 'Quality Assurance', description: 'Continuous monitoring and improvement of service quality to meet educational standards.' },
]

const services = [
  'Educational Housekeeping',
  'Campus Catering',
  'Security Services',
  'Hostel Management',
  'Facility Maintenance',
  'Horticulture & Landscaping',
  'Student Support Services',
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
          >Educational Institutions</span>
          <h1
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 100 } }"
            class="font-display text-5xl md:text-6xl font-bold mb-6 text-theme-heading"
          >
            Educational Facility
            <span class="gradient-text">Management</span>
          </h1>
          <p
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 200 } }"
            class="text-xl text-theme-secondary leading-relaxed mb-8"
          >
            Comprehensive facility management solutions for schools, colleges, and universities.
            We create safe, clean, and nurturing learning environments that support academic excellence and student development.
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
              data-testid="education-cta-primary"
            >
              Get Started
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </NuxtLink>
            <NuxtLink
              to="/services"
              class="inline-flex items-center gap-3 px-8 py-4 border-2 border-brand text-brand hover:bg-brand hover:text-white rounded-full transition-colors duration-300"
              data-testid="education-services-link"
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
            Specialized <span class="gradient-text">Educational Services</span>
          </h2>
          <p class="text-theme-secondary text-lg">
            Our comprehensive range of services is tailored to meet the unique needs of educational institutions and support student learning.
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
            Our <span class="gradient-text">Educational Implementation</span>
          </h2>
          <p class="text-theme-secondary text-lg">
            A careful and systematic approach designed to integrate our services seamlessly with academic schedules and institutional requirements.
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
              Why Choose LTHS for Your <span class="gradient-text">Educational Institution</span>
            </h2>
            <p class="text-theme-secondary text-lg mb-8 leading-relaxed">
              We understand the unique challenges of educational facilities and bring specialized expertise to create
              environments that support learning, safety, and the overall educational mission of your institution.
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
              <img src="https://gayoqnznilzdyltepowm.supabase.co/storage/v1/object/sign/lifetime-assets/education_institution.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xOTQ0OTI5Yy1jYTE1LTQ0MDctOWJlYS1jMjgyODM5ZTcyNzUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsaWZldGltZS1hc3NldHMvZWR1Y2F0aW9uX2luc3RpdHV0aW9uLnBuZyIsImlhdCI6MTc2ODEyNTQzMiwiZXhwIjo3MzI4MDc4NzQzMTc0MzJ9.P0O2MoEJORT2Mw3ri7IExfjIKW1WTmM361RhFvCLy9k" alt="Educational Institution Image" class="w-full h-full object-cover scale-150">
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
            Supporting <span class="gradient-text">Educational Excellence</span>
          </h2>
          <p class="text-theme-secondary text-lg mb-12">
            From classroom cleaning to campus security, we provide comprehensive services that support the educational mission of your institution.
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
          Ready to Support Your <span class="gradient-text">Educational Mission?</span>
        </h2>
        <p class="text-theme-secondary text-lg mb-8">
          Contact us today to discover how our comprehensive educational facility management services can enhance your learning environment.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink
            to="/contact"
            class="inline-flex items-center gap-3 px-8 py-4 btn-primary rounded-full"
            data-testid="education-final-cta"
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