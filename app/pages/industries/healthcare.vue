<script setup lang="ts">
useSeoMeta({
  title: 'Healthcare Facilities Management | LTHS - Lifetime Hospitality Services',
  description:
    'Specialized facility management for hospitals, clinics, and healthcare centers. Expert patient care, hygiene, and support services tailored for medical environments.',
})

const features = [
  {
    icon: 'i-heroicons-heart',
    title: 'Patient Care Support',
    description:
      'Trained patient attendants providing compassionate care, medication reminders, and assistance with daily activities.',
  },
  {
    icon: 'i-heroicons-sparkles',
    title: 'Medical Hygiene',
    description:
      'Strict adherence to healthcare hygiene protocols and infection control standards for patient safety.',
  },
  {
    icon: 'i-heroicons-clipboard-document-list',
    title: 'Clinical Support',
    description:
      'Administrative and logistical support to healthcare facilities, including patient coordination and record management.',
  },
  {
    icon: 'i-heroicons-clock',
    title: '24/7 Availability',
    description:
      'Round-the-clock services to ensure continuous support for healthcare facilities and patient needs.',
  },
  {
    icon: 'i-heroicons-user-group',
    title: 'Trained Healthcare Staff',
    description:
      'Professionals trained in healthcare protocols, emergency response, and patient care standards.',
  },
  {
    icon: 'i-heroicons-shield-check',
    title: 'Compliance & Safety',
    description:
      'Full compliance with healthcare regulations, safety standards, and infection control protocols.',
  },
]

const benefits = [
  { title: 'Patient Safety First', description: 'Highest standards of hygiene and safety for patient well-being.' },
  { title: 'Quality Care', description: 'Compassionate and professional care from trained healthcare attendants.' },
  { title: 'Operational Support', description: 'Comprehensive support allowing medical staff to focus on patient care.' },
  { title: 'Regulatory Compliance', description: 'Full adherence to healthcare industry regulations and standards.' },
  { title: 'Emergency Ready', description: 'Trained personnel equipped to handle medical emergencies and support situations.' },
  { title: 'Cost Effective', description: 'Efficient resource utilization reducing operational costs for healthcare facilities.' },
]

const process = [
  { step: 1, title: 'Healthcare Assessment', description: 'Detailed evaluation of facility requirements and patient care needs.' },
  { step: 2, title: 'Compliance Review', description: 'Ensuring all services meet healthcare regulatory standards.' },
  { step: 3, title: 'Staff Training', description: 'Specialized training for healthcare protocols and patient care.' },
  { step: 4, title: 'Service Integration', description: 'Seamless integration of services into healthcare operations.' },
  { step: 5, title: 'Quality Monitoring', description: 'Continuous monitoring and improvement of service quality.' },
]

const services = [
  'Patient Care Attendants',
  'Medical Housekeeping',
  'Clinical Support',
  'Pantry Services',
  'Security Services',
  'Maintenance',
  'Waste Management',
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
          >Healthcare Facilities</span>
            <h1
              v-motion
              :initial="{ opacity: 0, y: 30 }"
              :enter="{ opacity: 1, y: 0, transition: { delay: 100 } }"
              class="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-theme-heading"
            >
              Healthcare Facility
              <span class="gradient-text">Management</span>
            </h1>
            <p
              v-motion
              :initial="{ opacity: 0, y: 30 }"
              :enter="{ opacity: 1, y: 0, transition: { delay: 200 } }"
              class="text-lg sm:text-xl text-theme-secondary leading-relaxed mb-8"
            >
            Specialized facility management solutions for hospitals, clinics, and healthcare centers.
            Our services are designed to support patient care while maintaining the highest standards of hygiene and safety.
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
              data-testid="healthcare-cta-primary"
            >
              Get Started
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </NuxtLink>
            <NuxtLink
              to="/services"
              class="inline-flex items-center gap-3 px-8 py-4 border-2 border-brand text-brand hover:bg-brand hover:text-white rounded-full transition-colors duration-300"
              data-testid="healthcare-services-link"
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
            Specialized <span class="gradient-text">Healthcare Services</span>
          </h2>
          <p class="text-theme-secondary text-lg">
            Our comprehensive range of services is tailored to meet the unique demands of healthcare facilities and patient care.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(feature, index) in features"
            :key="feature.title"
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :visible="{ opacity: 1, y: 0, transition: { delay: index * 100 } }"
            class="bg-theme-card p-8 rounded-3xl border-theme-border hover:shadow-xl transition-all duration-300"
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
            Our <span class="gradient-text">Healthcare Implementation</span>
          </h2>
          <p class="text-theme-secondary text-lg">
            A systematic approach ensuring our services integrate seamlessly with healthcare operations and regulatory requirements.
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
              Why Choose LTHS for Your <span class="gradient-text">Healthcare Facility</span>
            </h2>
            <p class="text-theme-secondary text-lg mb-8 leading-relaxed">
              We bring specialized healthcare knowledge and proven methodologies to ensure your medical facility operates
              efficiently while maintaining the highest standards of patient care and safety.
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
            <img src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&h=600&fit=crop&crop=center" alt="Healthcare Facility Image" class="w-full h-full object-cover scale-110 sm:scale-125 md:scale-150">
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
            Complete <span class="gradient-text">Healthcare Solutions</span>
          </h2>
          <p class="text-theme-secondary text-lg mb-12">
            From patient care to facility maintenance, we provide all the specialized services your healthcare facility requires.
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
          Ready to Enhance Your <span class="gradient-text">Healthcare Operations?</span>
        </h2>
        <p class="text-theme-secondary text-lg mb-8">
          Contact us today to discuss how our specialized healthcare facility management services can support your medical facility's goals.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink
            to="/contact"
            class="inline-flex items-center gap-3 px-8 py-4 btn-primary rounded-full"
            data-testid="healthcare-final-cta"
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