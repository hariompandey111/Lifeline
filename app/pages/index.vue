<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
const router = useRouter()


useSeoMeta({
  title: 'LTHS - Lifetime Hospitality Services | Premium Hospitality Since 2016',
  description:
    'LTHS provides premium hospitality services including patient care, housekeeping, catering, security, and more. Trusted by leading companies across Pune.',
})

const stats = computed(() => [
  { value: '10+', label: t('home.stats.years') },
  { value: '500+', label: t('home.stats.professionals') },
  { value: '10+', label: t('home.stats.clients') },
  { value: '9+', label: t('nav.services') },
])

const industries = [
  {
    name: 'Manufacturing & Industrial',
    icon: 'i-heroicons-cog-6-tooth',
    href: '/industries/manufacturing',
  },
  {
    name: 'Healthcare Facilities',
    icon: 'i-heroicons-heart',
    href: '/industries/healthcare',
  },
  {
    name: 'Corporate Offices',
    icon: 'i-heroicons-building-office',
    href: '/industries/corporate',
  },
  {
    name: 'Educational Institutions',
    icon: 'i-heroicons-academic-cap',
    href: '/industries/education',
  },
  {
    name: 'Residential Complexes',
    icon: 'i-heroicons-home',
    href: '/industries/residential',
  }
]

const services = computed(() => [
  {
    icon: 'i-heroicons-heart',
    title: t('services.patientCare.name'),
    description: t('services.patientCare.description'),
    href: '/services/patient-care',
  },
  {
    icon: 'i-heroicons-sparkles',
    title: t('services.housekeeping.name'),
    description: t('services.housekeeping.description'),
    href: '/services/housekeeping',
  },
  {
    icon: 'i-lucide-utensils',
    title: t('services.catering.name'),
    description: t('services.catering.description'),
    href: '/services/catering',
  },
  {
    icon: 'i-heroicons-briefcase',
    title: t('services.officeSupport.name'),
    description: t('services.officeSupport.description'),
    href: '/services/office-support',
  },
  {
    icon: 'i-heroicons-wrench-screwdriver',
    title: t('services.maintenance.name'),
    description: t('services.maintenance.description'),
    href: '/services/maintenance',
  },
  {
    icon: 'i-lucide-users',
    title: t('services.labourSupply.name'),
    description: t('services.labourSupply.description'),
    href: '/services/labour-supply',
  }
])


const clients = [
{
    name: 'Shreeji Construction',
    logo: 'https://www.shreejiconstruction.com/images/company/company16174285011.jpg',
    logoOrientation: 'landscape',
    location: 'Bhuj, Gujarat',
    industry: 'Construction',
    services: ['Housekeeping', 'Labour Supply', 'Maintenance'],
  },
  {
    name: 'TE Connectivity',
    location: 'Wagholi, Pune',
    industry: 'Electronics Manufacturing',
    services: ['Housekeeping', 'Security', 'Catering'],
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/TE_Connectivity_logo.svg/1200px-TE_Connectivity_logo.svg.png',
    logoOrientation: 'landscape',
  },
  {
    name: 'Thyssenkrupp',
    location: 'Chakan, Pune',
    industry: 'Industrial Manufacturing',
    services: ['Housekeeping', 'Labour Supply', 'Maintenance'],
    logo: 'https://companieslogo.com/img/orig/TKA.F-9979cdec.png?t=1722308607',
    logoOrientation: 'square',
  },
  {
    name: 'Forbes Marshall',
    location: 'Chakan & Pimpri, Pune',
    industry: 'Steam Engineering',
    services: ['Housekeeping', 'Pantry', 'Security'],
    logo: 'https://nus.edu.sg/cfg/images/default-source/events-company-logo/forbes-marshall.png?sfvrsn=8c6d8c00_2',
    logoOrientation: 'landscape',
  },
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
        class="absolute top-20 right-10 w-48 h-48 sm:w-72 sm:h-72 decorative-blob rounded-full blur-3xl animate-float"
      ></div>
      <div
        class="absolute bottom-20 left-10 w-64 h-64 sm:w-96 sm:h-96 decorative-blob rounded-full blur-3xl animate-float"
        style="animation-delay: -3s"
      ></div>

      <!-- Grid Pattern Overlay -->
      <div
        class="absolute inset-0 opacity-[0.02] dark:opacity-[0.02]"
        style="
          background-image: url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23888888\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
        "
      ></div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-32 pb-12 sm:pb-20">
        <div class="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <!-- Left Content -->
          <div
            v-motion
            :initial="{ opacity: 0, x: -50 }"
            :enter="{ opacity: 1, x: 0, transition: { duration: 800 } }"
          >
            <div
              class="inline-flex items-center gap-2 px-4 py-2 bg-brand-10 rounded-full border border-brand-20 mb-8"
            >
              <span class="w-2 h-2 bg-brand rounded-full animate-pulse"></span>
              <span class="text-brand text-sm font-medium">{{ t('common.tagline') }}</span>
            </div>

            <h1
              class="font-display text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 sm:mb-6 text-theme-heading"
            >
              {{ t('home.hero.title1') }}
              <span class="gradient-text block">{{ t('home.hero.title2') }}</span>
            </h1>

            <p class="text-base sm:text-lg md:text-xl text-theme-secondary leading-relaxed mb-6 sm:mb-10 max-w-xl">
              {{ t('home.hero.description') }}
            </p>

            <div class="flex flex-col sm:flex-row flex-wrap gap-4">
              <NuxtLink
                :to="localePath('/contact')"
                class="group inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 btn-primary rounded-full w-full sm:w-auto text-sm sm:text-base"
                data-testid="hero-cta-quote"
              >
                {{ t('home.hero.cta2') }}
                <svg
                  class="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform"
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
                :to="localePath('/about')"
                class="inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 btn-ghost rounded-full w-full sm:w-auto text-sm sm:text-base"
                data-testid="hero-cta-learn"
              >
                {{ t('common.learnMore') }}
              </NuxtLink>
            </div>

            <!-- Client Logos Carousel -->
            <div class="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-theme-light">
              <p class="text-sm sm:text-base text-theme-muted mb-4">{{ t('home.trustedBy') }}</p>

              <!-- Mobile: Static card layout -->
              <div class="block sm:hidden" @click="router.push('/clients')">
                <div class="grid grid-cols-1 gap-4">
                  <div
                    v-for="client in clients.slice(0, 4)"
                    :key="`mobile-${client.name}`"
                    class="client-card text-center p-4 rounded-xl card-gradient hover:border-brand-30 transition-colors"
                  >
                    <img
                      v-if="client.logo"
                      :src="client.logo"
                      :alt="client.name"
                      class="h-8 w-8 mx-auto mb-2 object-contain rounded-lg"
                    >
                    <p class="font-semibold text-sm sm:text-base leading-tight">{{ client.name }}</p>
                    <p class="text-xs sm:text-sm text-theme-muted leading-tight">{{ client.location }}</p>
                  </div>
                </div>
              </div>

              <!-- Desktop: Animated carousel -->
              <div class="hidden sm:block client-carousel-container overflow-hidden -mx-4 px-4 sm:mx-0 sm:px-0" data-testid="client-carousel" @click="router.push('/clients')">
                <div class="client-carousel-track flex gap-4 sm:gap-6 lg:gap-8 items-center">
                  <!-- First set of logos -->
                  <div
                    v-for="client in clients"
                    :key="`first-${client.name}`"
                    class="client-card flex-shrink-0 text-theme-secondary hover:text-brand transition-colors cursor-pointer min-w-0"
                    data-testid="client-carousel-item"
                  >
                    <img
                      v-if="client.logo"
                      :src="client.logo"
                      :alt="client.name"
                      :class="client.logoOrientation === 'landscape' ? 'h-10 sm:h-12 w-20 sm:w-24 object-contain rounded-lg overflow-hidden' : 'h-10 sm:h-12 w-10 sm:w-12 object-contain'"
                    >
                    <p class="font-semibold text-sm sm:text-base leading-tight">{{ client.name }}</p>
                    <p class="text-xs sm:text-sm text-theme-muted leading-tight">{{ client.location }}</p>
                  </div>
                  <!-- Duplicate set for seamless loop -->
                  <div
                    v-for="client in clients"
                    :key="`second-${client.name}`"
                    class="client-card flex-shrink-0 text-theme-secondary hover:text-brand transition-colors cursor-pointer min-w-0"
                    aria-hidden="true"
                  >
                    <img
                      v-if="client.logo"
                      :src="client.logo"
                      :alt="client.name"
                      :class="client.logoOrientation === 'landscape' ? 'h-10 sm:h-12 w-20 sm:w-24 object-contain rounded-lg overflow-hidden' : 'h-10 sm:h-12 w-10 sm:w-12 object-contain'"
                    >
                    <p class="font-semibold text-sm sm:text-base leading-tight">{{ client.name }}</p>
                    <p class="text-xs sm:text-sm text-theme-muted leading-tight">{{ client.location }}</p>
                  </div>
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
              class="relative aspect-[3/4] sm:aspect-[4/5] rounded-3xl overflow-hidden glass pulse-glow"
            >
              <!-- Hero Video -->
              <video
                autoplay
                loop
                muted
                playsinline
                class="absolute inset-0 w-full h-full object-cover"
              >
                <source src="https://gayoqnznilzdyltepowm.supabase.co/storage/v1/object/sign/lifetime-assets/hero_video_new.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xOTQ0OTI5Yy1jYTE1LTQ0MDctOWJlYS1jMjgyODM5ZTcyNzUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsaWZldGltZS1hc3NldHMvaGVyb192aWRlb19uZXcubXA0IiwiaWF0IjoxNzY4MDQyNzkxLCJleHAiOjE5OTk2MDU4Njk5OTF9.oLvkmUY9ziBfy1RbbCvUcWM2BbtuWEWRK_32O4zj0IM" type="video/mp4" />
              </video>
              
              <!-- Video Overlay for better text contrast -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>

              <!-- Decorative Frame -->
              <div
                class="absolute inset-0 border-2 border-brand-20 rounded-3xl pointer-events-none"
              ></div>
            </div>

            <!-- Floating Stats Card -->
            <div
              v-motion
              :initial="{ opacity: 0, y: 20 }"
              :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 600 } }"
              class="absolute -bottom-4 sm:-bottom-8 -right-4 sm:-right-8 glass rounded-2xl p-4 sm:p-6 shadow-2xl sm:-bottom-4 sm:-right-4"
            >
              <div class="flex items-center gap-4">
                <div
                  class="w-14 h-14 rounded-xl icon-box-primary flex items-center justify-center"
                >
                  <UIcon name="i-heroicons-star" class="w-7 h-7 text-yellow-400" />
                </div>
                <div>
                  <p class="text-2xl font-bold text-theme-heading">{{ stats[0]?.value || '0' }}</p>
                  <p class="text-sm text-theme-secondary">{{ stats[0]?.label || 'Years of Experience' }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <!-- <div
        class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-theme-muted hidden sm:block"
      >
        <span class="text-xs uppercase tracking-widest">Scroll</span>
        <div class="w-px h-12 bg-gradient-to-b from-secondary-500 to-transparent"></div>
      </div> -->
    </section>

    <!-- Stats Section -->
    <section class="relative py-20 section-dark">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div
            v-for="(stat, index) in stats"
            :key="stat.label"
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :visible="{ opacity: 1, y: 0, transition: { delay: index * 100, duration: 500 } }"
            class="text-center p-8 rounded-2xl card-gradient hover:border-brand-30 transition-colors duration-500 group"
          >
            <p
              class="font-display text-4xl md:text-5xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300"
            >
              {{ stat.value }}
            </p>
            <p class="text-theme-secondary text-sm">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- About Preview Section -->
    <section class="relative py-24 overflow-hidden section-gradient">
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
                class="aspect-[3/4] rounded-2xl image-placeholder flex items-center justify-center"
              >
                <img src="https://gayoqnznilzdyltepowm.supabase.co/storage/v1/object/sign/lifetime-assets/user_abstract.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xOTQ0OTI5Yy1jYTE1LTQ0MDctOWJlYS1jMjgyODM5ZTcyNzUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsaWZldGltZS1hc3NldHMvdXNlcl9hYnN0cmFjdC5qcGciLCJpYXQiOjE3NjgyMDkxNTQsImV4cCI6MTA0OTA0MDkyNTk1NH0.vAuGkVrAgbxPnO12t6Kujez3FcMMFsaBk9kf9St1weg" alt="Home Grid 1" class="w-full h-full object-cover rounded-2xl">
              </div>
              <div
                class="aspect-square rounded-2xl image-placeholder flex items-center justify-center"
              >
                <img src="https://gayoqnznilzdyltepowm.supabase.co/storage/v1/object/sign/lifetime-assets/logo_golden.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xOTQ0OTI5Yy1jYTE1LTQ0MDctOWJlYS1jMjgyODM5ZTcyNzUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsaWZldGltZS1hc3NldHMvbG9nb19nb2xkZW4uanBnIiwiaWF0IjoxNzY4MjA5MTg3LCJleHAiOjEwNDc0NTUzNTU0OTk4N30.et9RrlcKAcDFKlvzdAIBFNfQF-zX8In5bBUYiShkmDY" alt="Home Grid 2" class="w-full h-full object-cover rounded-2xl">
              </div>
            </div>
            <div class="space-y-4 pt-8">
              <div
                class="aspect-square rounded-2xl image-placeholder flex items-center justify-center"
              >
                <img src="https://gayoqnznilzdyltepowm.supabase.co/storage/v1/object/sign/lifetime-assets/building_abstract.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xOTQ0OTI5Yy1jYTE1LTQ0MDctOWJlYS1jMjgyODM5ZTcyNzUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsaWZldGltZS1hc3NldHMvYnVpbGRpbmdfYWJzdHJhY3QuanBnIiwiaWF0IjoxNzY4MjA5MTE5LCJleHAiOjE5OTg3MTUxOTY1OTE5fQ.6JswAEsqq1XW0rGo3o1xGYX4IRfQ6A2uLRPk-6cmLik" alt="Home Grid 3" class="w-full h-full object-cover rounded-2xl">
              </div>
              <div
                class="aspect-[3/4] rounded-2xl image-placeholder flex items-center justify-center"
              >
                <img src="https://gayoqnznilzdyltepowm.supabase.co/storage/v1/object/sign/lifetime-assets/home_grid_4.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xOTQ0OTI5Yy1jYTE1LTQ0MDctOWJlYS1jMjgyODM5ZTcyNzUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsaWZldGltZS1hc3NldHMvaG9tZV9ncmlkXzQucG5nIiwiaWF0IjoxNzY4MTI5Mjg5LCJleHAiOjEwNDc0NTExODg2MDg5fQ.p7z7RaCmZbsxGtQvqES4n1NQNCCg2KZWFKF-yKU8ghA" alt="Home Grid 4" class="w-full h-full object-cover rounded-2xl">
              </div>
            </div>
          </div>

          <!-- Content -->
          <div
            v-motion
            :initial="{ opacity: 0, x: 30 }"
            :visible="{ opacity: 1, x: 0, transition: { duration: 600, delay: 200 } }"
          >
            <span class="text-brand font-medium uppercase tracking-widest text-sm">{{ t('nav.aboutUs') }}</span>
            <h2 class="font-display text-4xl md:text-5xl font-bold mt-4 mb-6 text-theme-heading">
              {{ t('about.hero.title1') }}
              <span class="gradient-text">{{ t('about.hero.title2') }}</span>
            </h2>
            <p class="text-theme-secondary text-lg leading-relaxed mb-6">
              {{ t('home.about.description1') }} {{ t('home.about.description2') }}
              {{ t('home.about.description3') }}
            </p>
            <p class="text-theme-secondary leading-relaxed mb-8">
              {{ t('home.about.description4') }} {{ t('home.about.description5') }}
              {{ t('home.about.description6') }} {{ t('home.about.description7') }}
            </p>

            <div class="flex flex-wrap gap-6 mb-8">
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 rounded-xl icon-box flex items-center justify-center">
                  <svg
                    class="w-6 h-6"
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
                  <p class="font-semibold text-theme-heading">{{ t('home.certifiedTeam') }}</p>
                  <p class="text-sm text-theme-muted">{{ t('home.trainedProfessionals') }}</p>
                </div>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 rounded-xl icon-box flex items-center justify-center">
                  <svg
                    class="w-6 h-6"
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
                  <p class="font-semibold text-theme-heading">{{ t('home.quickResponse') }}</p>
                  <p class="text-sm text-theme-muted">{{ t('home.support247') }}</p>
                </div>
              </div>
            </div>

            <NuxtLink
              :to="localePath('/about')"
              class="inline-flex items-center gap-2 text-brand font-semibold hover:gap-4 transition-all duration-300"
              data-testid="about-learn-more"
            >
              {{ t('common.learnMore') }}
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
    <section class="relative py-12 section-dark md:py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <span
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visible="{ opacity: 1, y: 0 }"
            class="text-brand font-medium uppercase tracking-widest text-sm"
          >{{ t('home.services.title') }} {{ t('home.services.titleHighlight') }}</span>
          <h2
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visible="{ opacity: 1, y: 0, transition: { delay: 100 } }"
            class="font-display text-4xl md:text-5xl font-bold mt-4 mb-6 text-theme-heading"
          >
            {{ t('home.services.title') }}
            <span class="gradient-text">{{ t('home.services.titleHighlight') }}</span>
          </h2>
          <p
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visible="{ opacity: 1, y: 0, transition: { delay: 200 } }"
            class="text-theme-secondary text-lg"
          >
            {{ t('home.services.subtitle') }}
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <NuxtLink
            v-for="(service, index) in services"
            :key="service.href"
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :visible="{ opacity: 1, y: 0, transition: { delay: index * 100, duration: 500 } }"
            :to="localePath(service.href)"
            class="group p-8 rounded-3xl card-gradient hover-lift"
            :data-testid="`service-card-${service.href.split('/').pop()}`"
          >
            <div
              class="w-16 h-16 rounded-2xl icon-box flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
            >
              <UIcon :name="service.icon" class="w-8 h-8" />
            </div>
            <h3
              class="font-display text-xl font-semibold text-theme-heading mb-3 group-hover:text-brand transition-colors"
            >
              {{ service.title }}
            </h3>
            <p class="text-theme-secondary text-sm leading-relaxed mb-4">
              {{ service.description }}
            </p>
            <span
              class="inline-flex items-center gap-2 text-brand text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity"
            >
              {{ t('common.learnMore') }}
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
            :to="localePath('/services')"
            class="inline-flex items-center gap-3 px-8 py-4 btn-outline rounded-full text-sm sm:text-base"
            data-testid="view-all-services"
          >
            {{ t('common.viewAll') }} {{ t('nav.services') }}
            <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    <section class="relative py-24 overflow-hidden section-gradient">
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span class="text-brand font-medium uppercase tracking-widest text-sm">{{ t('industries.hero.subtitle') }}</span>
            <h2 class="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-4 sm:mb-6 text-theme-heading">
              {{ t('industries.hero.title1') }}
              <span class="gradient-text">{{ t('industries.hero.title2') }}</span>
            </h2>
            <p class="text-theme-secondary text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
              {{ t('home.industries.description') }}
            </p>

            <div class="space-y-4">
              <div
                v-for="(industry, index) in industries"
                :key="index"
                class="flex items-center gap-4 p-4 rounded-xl card-gradient hover:bg-brand-10 transition-colors cursor-pointer group"
                @click="router.push(industry.href)"
              >
                <div class="w-10 h-10 rounded-lg icon-box flex items-center justify-center group-hover:bg-brand transition-colors">
                  <UIcon
                    :name="industry.icon"
                    class="w-5 h-5 group-hover:text-white transition-colors"
                  />
                </div>
                <span class="font-medium text-theme-heading">{{ industry.name }}</span>
              </div>
            </div>
          </div>

          <!-- Large Image Placeholder -->
          <div class="relative">
            <div
              class="aspect-square rounded-3xl image-placeholder flex items-center justify-center"
            >
              <div class="text-center">
                <img src="https://gayoqnznilzdyltepowm.supabase.co/storage/v1/object/sign/lifetime-assets/industry_image.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xOTQ0OTI5Yy1jYTE1LTQ0MDctOWJlYS1jMjgyODM5ZTcyNzUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsaWZldGltZS1hc3NldHMvaW5kdXN0cnlfaW1hZ2UucG5nIiwiaWF0IjoxNzY4MDQyODE5LCJleHAiOjEwNDc0NDk0NTE5NjE5fQ.osWhFlJgZDpaNoEKamvRL10KhWQmV9u6xsxr_qMwaTo" alt="Industry Image" class="w-full h-full object-cover rounded-3xl">
              </div>
            </div>

            <!-- Floating Badge -->
            <div class="absolute -bottom-6 -right-6 glass rounded-2xl p-4 shadow-2xl">
              <p class="text-xs sm:text-sm text-theme-secondary">{{ t('home.servingIndustries') }}</p>
              <p class="text-xl sm:text-2xl font-bold text-theme-heading">{{ t('home.industriesCount') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonial/CTA Section -->
    <section class="relative py-12 section-dark md:py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="relative rounded-3xl overflow-hidden card-gradient p-6 sm:p-8 md:p-12 lg:p-16">
          <!-- Background Pattern -->
          <div
            class="absolute inset-0 opacity-10"
            style="
              background-image: radial-gradient(circle at 2px 2px, var(--color-secondary) 1px, transparent 0);
              background-size: 40px 40px;
            "
          ></div>

          <div class="relative grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 class="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-theme-heading">
                {{ t('home.cta.title') }}
                <span class="gradient-text">{{ t('home.cta.titleHighlight') }}</span>
              </h2>
              
              <p class="text-theme-secondary text-sm sm:text-xl leading-relaxed mb-6 sm:mb-8 max-w-lg">
                {{ t('home.cta.subtitle') }}
              </p>

              <div class="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6">
                <NuxtLink
                  :to="localePath('/contact')"
                  class="inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 btn-primary rounded-full w-full sm:w-auto text-sm sm:text-base font-medium"
                  data-testid="cta-get-started"
                >
                  {{ t('home.cta.button') }}
                </NuxtLink>
                <a
                  href="tel:+918320140215"
                  class="inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 btn-ghost rounded-full w-full sm:w-auto text-sm sm:text-base font-medium"
                >
                  <svg
                    class="w-4 h-4 sm:w-5 sm:h-5"
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
                  {{ t('home.callUsNow') }}
                </a>
              </div>
            </div>

            <!-- Contact Card -->
            <div class="glass rounded-2xl p-6 sm:p-8">
              <h3 class="font-display text-xl md:text-2xl lg:text-3xl font-semibold text-theme-heading mb-6 sm:mb-8">
                {{ t('home.quickContact') }}
              </h3>

              <div class="space-y-4 sm:space-y-6">
                <div class="flex items-center gap-4">
                  <!-- Phone Icon -->
                  <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-xl icon-box flex items-center justify-center">
                    <svg
                      class="w-6 h-6 sm:w-7 sm:h-7"
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

                  <!-- Phone Number -->
                  <div>
                    <p class="text-xs sm:text-sm text-theme-muted">{{ t('common.phone') }}</p>
                    <a
                      href="tel:+918320140215"
                      class="flex items-center gap-2 text-sm sm:text-base text-theme-secondary hover:text-brand transition-colors"
                    >
                      +918320140215
                    </a>
                  </div>
                </div>
                <div class="flex items-center gap-4">
                  <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-xl icon-box flex items-center justify-center">
                    <!-- Email Icon -->
                    <svg
                      class="w-6 h-6 sm:w-7 sm:h-7"
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
                  <!-- Email -->
                  <div>
                    <p class="text-xs sm:text-sm text-theme-muted">{{ t('common.email') }}</p>
                    <p class="text-sm sm:text-base text-theme-heading font-medium break-all md:max-w-none max-w-[160px]">anup@lifetimehospitality.in</p>
                  </div>
                </div>
                <div class="flex items-start gap-4 sm:gap-6">
                  <div class="w-12 h-12 rounded-xl icon-box flex items-center justify-center flex-shrink-0">
                    <svg
                      class="w-6 h-6 sm:w-7 sm:h-7"
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
                    <p class="text-xs sm:text-sm text-theme-muted">{{ t('common.address') }}</p>
                    <p class="text-theme-heading font-medium text-sm sm:text-base leading-relaxed">
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

<style scoped>
.client-carousel-container {
  mask-image: linear-gradient(
    to right,
    transparent,
    black 10%,
    black 90%,
    transparent
  );
  -webkit-mask-image: linear-gradient(
    to right,
    transparent,
    black 10%,
    black 90%,
    transparent
  );
}

.client-carousel-track {
  animation: scroll 20s linear infinite;
  width: max-content;
}

.client-carousel-container:hover .client-carousel-track {
  animation-play-state: paused;
}

.client-card {
  min-width: 160px;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

/* Reduce motion for accessibility */
@media (prefers-reduced-motion: reduce) {
  .client-carousel-track {
    animation: none;
  }
}
</style>
