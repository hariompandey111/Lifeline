<script setup lang="ts">
useSeoMeta({
  title: 'Our Services | LTHS - Lifetime Hospitality Services',
  description:
    'Explore our comprehensive range of hospitality services including patient care, housekeeping, catering, security, and more.',
})

const services = [
  {
    icon: 'i-heroicons-heart',
    title: 'Patient Care Services',
    description:
      'Compassionate and professional patient care with trained attendants ensuring comfort, dignity, and well-being of patients.',
    href: '/services/patient-care',
    features: ['24/7 Care', 'Trained Attendants', 'Medical Support'],
  },
  {
    icon: 'i-heroicons-sparkles',
    title: 'Housekeeping Services',
    description:
      'Comprehensive cleaning and maintenance solutions for pristine, hygienic environments that reflect professionalism.',
    href: '/services/housekeeping',
    features: ['Deep Cleaning', 'Daily Maintenance', 'Specialized Cleaning'],
  },
  {
    icon: 'i-lucide-leaf',
    title: 'Horticulture Services',
    description:
      'Expert landscaping and garden maintenance to create beautiful, serene green spaces that enhance your environment.',
    href: '/services/horticulture',
    features: ['Landscaping', 'Garden Maintenance', 'Plant Care'],
  },
  {
    icon: 'i-lucide-utensils',
    title: 'Catering Services',
    description:
      'Delicious, nutritious meals prepared with quality ingredients and served with professional hospitality.',
    href: '/services/catering',
    features: ['Corporate Catering', 'Event Catering', 'Canteen Management'],
  },
  {
    icon: 'i-heroicons-briefcase',
    title: 'Office Support Services',
    description:
      'Efficient administrative and office support to streamline your operations and boost productivity.',
    href: '/services/office-support',
    features: ['Reception', 'Admin Support', 'Documentation'],
  },
  {
    icon: 'i-heroicons-users',
    title: 'Labour Supply',
    description:
      'Reliable, skilled workforce supply for various industrial and commercial requirements.',
    href: '/services/labour-supply',
    features: ['Skilled Labour', 'Semi-skilled', 'Unskilled Workers'],
  },
  {
    icon: 'i-heroicons-wrench-screwdriver',
    title: 'Maintenance Services',
    description:
      'Reliable maintenance and repair services to keep your facilities running smoothly and efficiently.',
    href: '/services/maintenance',
    features: ['Preventive', 'Corrective', 'Emergency Repairs'],
  },
  {
    icon: 'i-lucide-coffee',
    title: 'Pantry Services',
    description:
      'Professional pantry management ensuring your team has access to refreshments and amenities.',
    href: '/services/pantry',
    features: ['Tea/Coffee Service', 'Snack Management', 'Inventory'],
  },
  {
    icon: 'i-heroicons-shield-check',
    title: 'Security Services',
    description:
      'Trained security personnel providing comprehensive protection for your premises and assets.',
    href: '/services/security',
    features: ['24/7 Security', 'Access Control', 'Surveillance'],
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
          >Our Services</span>
          <h1
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 100 } }"
            class="font-display text-2xl md:text-6xl font-bold mb-6 text-theme-heading"
          >
            Comprehensive
            <span class="gradient-text">Hospitality</span> Solutions
          </h1>
          <p
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 200 } }"
            class="text-xl text-theme-secondary leading-relaxed"
          >
            From patient care to security, we deliver a complete spectrum of
            hospitality services tailored to your unique needs.
          </p>
        </div>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="relative py-24 section-dark">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <NuxtLink
            v-for="(service, index) in services"
            :key="service.title"
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :visible="{ opacity: 1, y: 0, transition: { delay: index * 80 } }"
            :to="service.href"
            class="group relative p-8 rounded-3xl card-gradient hover:border-brand-30 transition-all duration-500 hover-lift"
            :data-testid="`service-${service.title.toLowerCase().replace(/\s+/g, '-')}`"
          >
            <!-- Icon -->
            <div class="w-20 h-20 rounded-2xl icon-box flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <UIcon :name="service.icon" class="w-10 h-10" />
            </div>

            <!-- Content -->
            <h3 class="font-display text-2xl font-semibold text-theme-heading mb-3 group-hover:text-brand transition-colors">
              {{ service.title }}
            </h3>
            <p class="text-theme-secondary leading-relaxed mb-6">
              {{ service.description }}
            </p>

            <!-- Features -->
            <div class="flex flex-wrap gap-2 mb-6">
              <span
                v-for="feature in service.features"
                :key="feature"
                class="px-3 py-1 text-xs font-medium text-brand bg-brand-10 rounded-full"
              >
                {{ feature }}
              </span>
            </div>

            <!-- Arrow -->
            <div class="flex items-center gap-2 text-brand font-medium opacity-0 group-hover:opacity-100 transition-opacity">
              Learn More
              <svg class="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Why Choose Our Services -->
    <section class="relative py-24 section-gradient">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span class="text-brand font-medium uppercase tracking-widest text-sm">Why Choose Us</span>
            <h2 class="font-display text-4xl font-bold mt-4 mb-6 text-theme-heading">
              Excellence in Every
              <span class="gradient-text">Service</span>
            </h2>
            <div class="space-y-6">
              <div
                v-for="item in [
                  {
                    icon: 'i-heroicons-check-circle',
                    title: 'Trained Professionals',
                    desc: 'All staff undergo rigorous training and certification',
                  },
                  {
                    icon: 'i-heroicons-check-circle',
                    title: 'Quality Assurance',
                    desc: 'Regular audits and feedback systems ensure standards',
                  },
                  {
                    icon: 'i-heroicons-check-circle',
                    title: 'Customized Solutions',
                    desc: 'Services tailored to your specific requirements',
                  },
                  {
                    icon: 'i-heroicons-check-circle',
                    title: '24/7 Support',
                    desc: 'Round-the-clock assistance for all your needs',
                  },
                ]"
                :key="item.title"
                class="flex items-start gap-4"
              >
                <div class="w-10 h-10 rounded-lg icon-box flex items-center justify-center flex-shrink-0">
                  <UIcon :name="item.icon" class="w-5 h-5" />
                </div>
                <div>
                  <h3 class="font-semibold text-theme-heading">{{ item.title }}</h3>
                  <p class="text-theme-muted text-sm">{{ item.desc }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Image Placeholder -->
          <div class="relative">
            <div class="aspect-square rounded-3xl image-placeholder flex items-center justify-center">
             <img src="https://gayoqnznilzdyltepowm.supabase.co/storage/v1/object/sign/lifetime-assets/success_story.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xOTQ0OTI5Yy1jYTE1LTQ0MDctOWJlYS1jMjgyODM5ZTcyNzUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsaWZldGltZS1hc3NldHMvc3VjY2Vzc19zdG9yeS5qcGciLCJpYXQiOjE3NjgxMTk0MzcsImV4cCI6MTA0NzI5OTA0OTIyNjM3fQ.4D1sZWEVBMQt_ncP1QJW_l8yf_RoALZGtczTMGkOoko" alt="Quality Services Image" class="w-full h-full object-cover rounded-3xl">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="relative py-24 section-dark">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center rounded-3xl card-gradient border-brand-20 p-12">
        <h2 class="font-display text-4xl font-bold mb-6 text-theme-heading">
          Need a Custom <span class="gradient-text">Solution?</span>
        </h2>
        <p class="text-theme-secondary text-lg mb-8">
          We can create tailored service packages that perfectly match your
          organization's needs.
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <NuxtLink
            to="/contact"
            class="inline-flex items-center gap-3 px-8 py-4 btn-primary rounded-full"
            data-testid="services-cta"
          >
            Request Custom Quote
          </NuxtLink>
          <a
            href="tel:+918320140215"
            class="inline-flex items-center gap-3 px-8 py-4 btn-ghost rounded-full"
          >
            Call Us
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
