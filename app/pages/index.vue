<script setup lang="ts">
useSeoMeta({
  title: 'LTHS - Lifetime Hospitality Services | Premium Hospitality Since 2016',
  description:
    'LTHS provides premium hospitality services including patient care, housekeeping, catering, security, and more. Trusted by leading companies across Pune.',
})

const stats = [
  { value: '8+', label: 'Years of Excellence' },
  { value: '500+', label: 'Trained Professionals' },
  { value: '50+', label: 'Corporate Clients' },
  { value: '9', label: 'Service Categories' },
]

const services = [
  {
    icon: '🏥',
    title: 'Patient Care Services',
    description:
      'Compassionate and professional patient care with trained attendants ensuring comfort and well-being.',
    href: '/services/patient-care',
  },
  {
    icon: '✨',
    title: 'Housekeeping Services',
    description:
      'Comprehensive cleaning and maintenance solutions for pristine, hygienic environments.',
    href: '/services/housekeeping',
  },
  {
    icon: '🌿',
    title: 'Horticulture Services',
    description:
      'Expert landscaping and garden maintenance to create beautiful green spaces.',
    href: '/services/horticulture',
  },
  {
    icon: '🍽️',
    title: 'Catering Services',
    description:
      'Delicious, nutritious meals prepared with quality ingredients and professional service.',
    href: '/services/catering',
  },
  {
    icon: '💼',
    title: 'Office Support Services',
    description:
      'Efficient administrative and office support to streamline your operations.',
    href: '/services/office-support',
  },
  {
    icon: '🔧',
    title: 'Maintenance Services',
    description:
      'Reliable maintenance and repair services to keep your facilities running smoothly.',
    href: '/services/maintenance',
  },
]

const clients = [
  { name: 'TE Connectivity', location: 'Wagholi' },
  { name: 'Thyssenkrupp', location: 'Chakan' },
  { name: 'Forbes Marshall', location: 'Chakan & Pimpri' },
]
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center overflow-hidden">
      <!-- Animated Background -->
      <div class="absolute inset-0 animated-gradient"></div>

      <!-- Decorative Elements -->
      <div
        class="absolute top-20 right-10 w-72 h-72 bg-[#d4a574]/10 rounded-full blur-3xl animate-float"
      ></div>
      <div
        class="absolute bottom-20 left-10 w-96 h-96 bg-[#d4a574]/5 rounded-full blur-3xl animate-float"
        style="animation-delay: -3s"
      ></div>

      <!-- Grid Pattern Overlay -->
      <div
        class="absolute inset-0 opacity-[0.02]"
        style="
          background-image: url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
        "
      ></div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <!-- Left Content -->
          <div
            v-motion
            :initial="{ opacity: 0, x: -50 }"
            :enter="{ opacity: 1, x: 0, transition: { duration: 800 } }"
          >
            <div
              class="inline-flex items-center gap-2 px-4 py-2 bg-[#d4a574]/10 rounded-full border border-[#d4a574]/20 mb-8"
            >
              <span class="w-2 h-2 bg-[#d4a574] rounded-full animate-pulse"></span>
              <span class="text-[#d4a574] text-sm font-medium"
                >Trusted Since 2016</span
              >
            </div>

            <h1
              class="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            >
              Elevating
              <span class="gradient-text block">Hospitality</span>
              Standards
            </h1>

            <p class="text-xl text-gray-400 leading-relaxed mb-10 max-w-xl">
              From patient care to security services, we deliver comprehensive
              hospitality solutions that transform spaces and exceed
              expectations.
            </p>

            <div class="flex flex-wrap gap-4">
              <NuxtLink
                to="/contact"
                class="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#d4a574] to-[#b8956e] text-[#0a0a0a] font-semibold rounded-full hover:shadow-2xl hover:shadow-[#d4a574]/30 transition-all duration-500 transform hover:scale-105"
                data-testid="hero-cta-quote"
              >
                Get a Free Quote
                <svg
                  class="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </NuxtLink>
              <NuxtLink
                to="/about"
                class="inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-white font-semibold rounded-full hover:bg-white/5 hover:border-[#d4a574]/50 transition-all duration-300"
                data-testid="hero-cta-learn"
              >
                Learn More
              </NuxtLink>
            </div>

            <!-- Client Logos Preview -->
            <div class="mt-16 pt-8 border-t border-white/10">
              <p class="text-sm text-gray-500 mb-4">Trusted by leading companies</p>
              <div class="flex flex-wrap gap-8 items-center">
                <div
                  v-for="client in clients"
                  :key="client.name"
                  class="text-gray-400 hover:text-[#d4a574] transition-colors cursor-pointer"
                >
                  <p class="font-semibold">{{ client.name }}</p>
                  <p class="text-xs text-gray-500">{{ client.location }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Content - Hero Video -->
          <div
            v-motion
            :initial="{ opacity: 0, x: 50 }"
            :enter="{ opacity: 1, x: 0, transition: { duration: 800, delay: 200 } }"
            class="relative"
          >
            <div
              class="relative aspect-[4/5] rounded-3xl overflow-hidden glass pulse-glow"
            >
              <!-- Hero Video -->
              <video
                autoplay
                loop
                muted
                playsinline
                class="absolute inset-0 w-full h-full object-cover"
              >
                <source src="/hero_video.mp4" type="video/mp4" />
              </video>
              
              <!-- Video Overlay for better text contrast -->
              <div class="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 via-transparent to-[#0a0a0a]/30"></div>

              <!-- Decorative Frame -->
              <div
                class="absolute inset-0 border-2 border-[#d4a574]/20 rounded-3xl pointer-events-none"
              ></div>
            </div>

            <!-- Floating Stats Card -->
            <div
              v-motion
              :initial="{ opacity: 0, y: 20 }"
              :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 600 } }"
              class="absolute -bottom-8 -left-8 glass rounded-2xl p-6 shadow-2xl"
            >
              <div class="flex items-center gap-4">
                <div
                  class="w-14 h-14 rounded-xl bg-gradient-to-br from-[#d4a574] to-[#b8956e] flex items-center justify-center"
                >
                  <span class="text-2xl">⭐</span>
                </div>
                <div>
                  <p class="text-2xl font-bold text-white">10+</p>
                  <p class="text-sm text-gray-400">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div
        class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
      >
        <span class="text-xs uppercase tracking-widest">Scroll</span>
        <div class="w-px h-12 bg-gradient-to-b from-[#d4a574] to-transparent"></div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="relative py-20 bg-[#050505]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div
            v-for="(stat, index) in stats"
            :key="stat.label"
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :visible="{ opacity: 1, y: 0, transition: { delay: index * 100, duration: 500 } }"
            class="text-center p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/5 hover:border-[#d4a574]/30 transition-colors duration-500 group"
          >
            <p
              class="font-display text-4xl md:text-5xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300"
            >
              {{ stat.value }}
            </p>
            <p class="text-gray-400 text-sm">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- About Preview Section -->
    <section class="relative py-24 overflow-hidden">
      <div class="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#d4a574]/5 to-transparent"></div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <!-- Image Grid -->
          <div
            v-motion
            :initial="{ opacity: 0, x: -30 }"
            :visible="{ opacity: 1, x: 0, transition: { duration: 600 } }"
            class="grid grid-cols-2 gap-4"
          >
            <div class="space-y-4">
              <div
                class="aspect-[3/4] rounded-2xl image-placeholder bg-gradient-to-br from-[#1a1a2e] to-[#0a0a0a] border border-white/10 flex items-center justify-center"
              >
                <span class="text-4xl">🏢</span>
              </div>
              <div
                class="aspect-square rounded-2xl image-placeholder bg-gradient-to-br from-[#1a1a2e] to-[#0a0a0a] border border-white/10 flex items-center justify-center"
              >
                <span class="text-4xl">👥</span>
              </div>
            </div>
            <div class="space-y-4 pt-8">
              <div
                class="aspect-square rounded-2xl image-placeholder bg-gradient-to-br from-[#1a1a2e] to-[#0a0a0a] border border-white/10 flex items-center justify-center"
              >
                <span class="text-4xl">🤝</span>
              </div>
              <div
                class="aspect-[3/4] rounded-2xl image-placeholder bg-gradient-to-br from-[#1a1a2e] to-[#0a0a0a] border border-white/10 flex items-center justify-center"
              >
                <span class="text-4xl">✨</span>
              </div>
            </div>
          </div>

          <!-- Content -->
          <div
            v-motion
            :initial="{ opacity: 0, x: 30 }"
            :visible="{ opacity: 1, x: 0, transition: { duration: 600, delay: 200 } }"
          >
            <span
              class="text-[#d4a574] font-medium uppercase tracking-widest text-sm"
              >About LTHS</span
            >
            <h2 class="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
              A Legacy of
              <span class="gradient-text">Excellence</span>
            </h2>
            <p class="text-gray-400 text-lg leading-relaxed mb-6">
              Lifetime Hospitality Services (LTHS), established in 2016 with our
              registered office in Talegaon, Pune, has been at the forefront of
              delivering exceptional hospitality services.
            </p>
            <p class="text-gray-400 leading-relaxed mb-8">
              We operate with our own resources and infrastructure, bringing
              complete expertise across all hospitality domains. Our
              distinguished list of clients across industries speaks about our
              credentials and capabilities.
            </p>

            <div class="flex flex-wrap gap-6 mb-8">
              <div class="flex items-center gap-3">
                <div
                  class="w-12 h-12 rounded-xl bg-[#d4a574]/10 flex items-center justify-center"
                >
                  <svg
                    class="w-6 h-6 text-[#d4a574]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p class="font-semibold text-white">Certified Team</p>
                  <p class="text-sm text-gray-500">Trained professionals</p>
                </div>
              </div>
              <div class="flex items-center gap-3">
                <div
                  class="w-12 h-12 rounded-xl bg-[#d4a574]/10 flex items-center justify-center"
                >
                  <svg
                    class="w-6 h-6 text-[#d4a574]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div>
                  <p class="font-semibold text-white">Quick Response</p>
                  <p class="text-sm text-gray-500">24/7 support</p>
                </div>
              </div>
            </div>

            <NuxtLink
              to="/about"
              class="inline-flex items-center gap-2 text-[#d4a574] font-semibold hover:gap-4 transition-all duration-300"
              data-testid="about-learn-more"
            >
              Discover Our Story
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="relative py-24 bg-[#050505]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <span
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visible="{ opacity: 1, y: 0 }"
            class="text-[#d4a574] font-medium uppercase tracking-widest text-sm"
            >Our Services</span
          >
          <h2
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visible="{ opacity: 1, y: 0, transition: { delay: 100 } }"
            class="font-display text-4xl md:text-5xl font-bold mt-4 mb-6"
          >
            Comprehensive
            <span class="gradient-text">Hospitality</span> Solutions
          </h2>
          <p
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visible="{ opacity: 1, y: 0, transition: { delay: 200 } }"
            class="text-gray-400 text-lg"
          >
            We offer a complete range of hospitality services tailored to meet
            your unique requirements with excellence and professionalism.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <NuxtLink
            v-for="(service, index) in services"
            :key="service.title"
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :visible="{ opacity: 1, y: 0, transition: { delay: index * 100, duration: 500 } }"
            :to="service.href"
            class="group p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/5 hover:border-[#d4a574]/30 hover-lift"
            :data-testid="`service-card-${service.title.toLowerCase().replace(/\s+/g, '-')}`"
          >
            <div
              class="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#d4a574]/20 to-[#d4a574]/5 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300"
            >
              {{ service.icon }}
            </div>
            <h3
              class="font-display text-xl font-semibold text-white mb-3 group-hover:text-[#d4a574] transition-colors"
            >
              {{ service.title }}
            </h3>
            <p class="text-gray-400 text-sm leading-relaxed mb-4">
              {{ service.description }}
            </p>
            <span
              class="inline-flex items-center gap-2 text-[#d4a574] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity"
            >
              Learn more
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </NuxtLink>
        </div>

        <div class="text-center mt-12">
          <NuxtLink
            to="/services"
            class="inline-flex items-center gap-3 px-8 py-4 border border-[#d4a574]/30 text-[#d4a574] font-semibold rounded-full hover:bg-[#d4a574]/10 transition-all duration-300"
            data-testid="view-all-services"
          >
            View All Services
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Industries Section -->
    <section class="relative py-24 overflow-hidden">
      <div
        class="absolute inset-0 bg-gradient-to-r from-[#d4a574]/5 via-transparent to-[#d4a574]/5"
      ></div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span class="text-[#d4a574] font-medium uppercase tracking-widest text-sm"
              >Industries We Serve</span
            >
            <h2 class="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
              Expertise Across
              <span class="gradient-text">Sectors</span>
            </h2>
            <p class="text-gray-400 text-lg leading-relaxed mb-8">
              Our versatile team brings industry-specific expertise to deliver
              customized solutions for diverse sectors.
            </p>

            <div class="space-y-4">
              <div
                v-for="industry in [
                  'Manufacturing & Industrial',
                  'Healthcare Facilities',
                  'Corporate Offices',
                  'Educational Institutions',
                  'Residential Complexes',
                ]"
                :key="industry"
                class="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-[#d4a574]/10 transition-colors cursor-pointer group"
              >
                <div
                  class="w-10 h-10 rounded-lg bg-[#d4a574]/20 flex items-center justify-center group-hover:bg-[#d4a574] transition-colors"
                >
                  <svg
                    class="w-5 h-5 text-[#d4a574] group-hover:text-[#0a0a0a] transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <span class="font-medium text-white">{{ industry }}</span>
              </div>
            </div>
          </div>

          <!-- Large Image Placeholder -->
          <div class="relative">
            <div
              class="aspect-square rounded-3xl image-placeholder bg-gradient-to-br from-[#1a1a2e] to-[#0a0a0a] border border-white/10 flex items-center justify-center"
            >
              <div class="text-center">
                <span class="text-6xl mb-4 block">🏭</span>
                <p class="text-gray-500">Industry Image Placeholder</p>
              </div>
            </div>

            <!-- Floating Badge -->
            <div
              class="absolute -bottom-6 -right-6 glass rounded-2xl p-4 shadow-2xl"
            >
              <p class="text-sm text-gray-400">Serving</p>
              <p class="text-2xl font-bold text-white">5+ Industries</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonial/CTA Section -->
    <section class="relative py-24 bg-[#050505]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          class="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#1a1a2e] to-[#0a0a0a] border border-white/10 p-12 md:p-16"
        >
          <!-- Background Pattern -->
          <div
            class="absolute inset-0 opacity-10"
            style="
              background-image: radial-gradient(circle at 2px 2px, #d4a574 1px, transparent 0);
              background-size: 40px 40px;
            "
          ></div>

          <div class="relative grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 class="font-display text-4xl md:text-5xl font-bold mb-6">
                Ready to Transform Your
                <span class="gradient-text">Workplace?</span>
              </h2>
              <p class="text-gray-400 text-lg leading-relaxed mb-8">
                Partner with LTHS for comprehensive hospitality solutions that
                elevate your environment and exceed expectations.
              </p>

              <div class="flex flex-wrap gap-4">
                <NuxtLink
                  to="/contact"
                  class="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#d4a574] to-[#b8956e] text-[#0a0a0a] font-semibold rounded-full hover:shadow-2xl hover:shadow-[#d4a574]/30 transition-all duration-500"
                  data-testid="cta-get-started"
                >
                  Get Started Today
                </NuxtLink>
                <a
                  href="tel:8956690990"
                  class="inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-white font-semibold rounded-full hover:bg-white/5 transition-all duration-300"
                >
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  Call Us Now
                </a>
              </div>
            </div>

            <!-- Contact Card -->
            <div class="glass rounded-2xl p-8">
              <h3 class="font-display text-2xl font-semibold text-white mb-6">
                Quick Contact
              </h3>
              <div class="space-y-4">
                <div class="flex items-center gap-4">
                  <div
                    class="w-12 h-12 rounded-xl bg-[#d4a574]/20 flex items-center justify-center"
                  >
                    <svg
                      class="w-6 h-6 text-[#d4a574]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p class="text-sm text-gray-500">Phone</p>
                    <p class="text-white font-medium">8956690990 / 8320140215</p>
                  </div>
                </div>
                <div class="flex items-center gap-4">
                  <div
                    class="w-12 h-12 rounded-xl bg-[#d4a574]/20 flex items-center justify-center"
                  >
                    <svg
                      class="w-6 h-6 text-[#d4a574]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p class="text-sm text-gray-500">Email</p>
                    <p class="text-white font-medium">aman.l@lths.in</p>
                  </div>
                </div>
                <div class="flex items-start gap-4">
                  <div
                    class="w-12 h-12 rounded-xl bg-[#d4a574]/20 flex items-center justify-center flex-shrink-0"
                  >
                    <svg
                      class="w-6 h-6 text-[#d4a574]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p class="text-sm text-gray-500">Address</p>
                    <p class="text-white font-medium text-sm">
                      B-609, Ayush Park, 2, Varale Phata, Talegaon Dabhade, Pune
                      – 410507
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

