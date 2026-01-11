<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
const route = useRoute()

const isMenuOpen = ref(false)
const isScrolled = ref(false)

const menuItems = computed(() => [
  {
    label: t('nav.aboutUs'),
    href: '/about',
    children: [
      // { label: t('nav.ourStory'), href: '/about/our-story' },
      { label: t('nav.leadership'), href: '/about/leadership' },
      { label: t('nav.missionVision'), href: '/about/mission-vision' },
      { label: t('nav.whyChooseUs'), href: '/about/why-choose-us' },
    ],
  },
  {
    label: t('nav.services'),
    href: '/services',
    children: [
      { label: t('services.patientCare.name'), href: '/services/patient-care' },
      { label: t('services.housekeeping.name'), href: '/services/housekeeping' },
      { label: t('services.horticulture.name'), href: '/services/horticulture' },
      { label: t('services.catering.name'), href: '/services/catering' },
      { label: t('services.officeSupport.name'), href: '/services/office-support' },
      { label: t('services.labourSupply.name'), href: '/services/labour-supply' },
      { label: t('services.maintenance.name'), href: '/services/maintenance' },
      { label: t('services.pantry.name'), href: '/services/pantry' },
      { label: t('services.security.name'), href: '/services/security' },
    ],
  },
  {
    label: t('nav.industries'),
    href: '/industries',
    children: [
      { label: t('industries.manufacturing.name'), href: '/industries/manufacturing' },
      { label: t('industries.healthcare.name'), href: '/industries/healthcare' },
      { label: t('industries.corporate.name'), href: '/industries/corporate' },
      { label: t('industries.education.name'), href: '/industries/education' },
      { label: t('industries.construction.name'), href: '/industries/construction' },
    ],
  },
  {
    label: t('nav.clients'),
    href: '/clients',
    children: [
      { label: t('nav.caseStudies'), href: '/clients/case-studies' },
      { label: t('nav.successStories'), href: '/clients/success-stories' },
    ],
  },
  // Maybe needed in future
  // {
  //   label: t('nav.careers'),
  //   href: '/careers',
  //   children: [
  //     { label: t('nav.openings'), href: '/careers/openings' },
  //     { label: t('nav.lifeAtLths'), href: '/careers/life-at-lths' },
  //     { label: t('nav.apply'), href: '/careers/apply' },
  //   ],
  // },
  // { label: t('nav.blog'), href: '/blog' },
  { label: t('nav.contact'), href: '/contact' },
])

const openDropdown = ref<string | null>(null)

function toggleDropdown(label: string) {
  openDropdown.value = openDropdown.value === label ? null : label
}

function closeDropdowns() {
  openDropdown.value = null
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

function handleScroll() {
  isScrolled.value = window.scrollY > 50
}
</script>

<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
    :class="[
      isScrolled
        ? 'bg-theme/95 backdrop-blur-xl shadow-2xl border-b border-theme'
        : 'bg-transparent',
    ]"
    data-testid="main-navbar"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <NuxtLink
          :to="localePath('/')"
          class="flex items-center space-x-3 group"
          data-testid="logo-link"
        >
          <img 
            src="https://gayoqnznilzdyltepowm.supabase.co/storage/v1/object/sign/lifetime-assets/lths_logo.svg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xOTQ0OTI5Yy1jYTE1LTQ0MDctOWJlYS1jMjgyODM5ZTcyNzUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsaWZldGltZS1hc3NldHMvbHRoc19sb2dvLnN2ZyIsImlhdCI6MTc2ODA0Mjg0NSwiZXhwIjoxMDQ3Mjc0NTU1MzYxNDA0NH0.e8nzvrMxHaFXMddvWt4eyBtLVENG_-ld1HJK2aSF3QA" 
            alt="LTHS Logo"
            style="width: 40px; height: auto;"
            class="h-16 w-auto object-contain transform group-hover:scale-105 transition-transform duration-300"
          >
          <div class="hidden sm:block">
            <span class="font-display text-xl font-semibold gradient-text">{{ t('common.companyName') }}</span>
            <p class="text-[13px]  -mt-1">{{ t('common.companyFullName') }}</p>
            <p class="text-[10px] text-theme-muted">{{ t('common.tagLine') }}</p>
          </div>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center space-x-1">
          <div
            v-for="item in menuItems"
            :key="item.label"
            class="relative"
            @mouseenter="item.children ? toggleDropdown(item.label) : null"
            @mouseleave="item.children ? closeDropdowns() : null"
          >
            <NuxtLink
              :to="localePath(item.href)"
              class="px-4 py-2 text-sm font-medium text-theme-secondary hover:text-brand transition-colors duration-300 flex items-center gap-1"
              :class="{ 'text-brand': route.path.includes(item.href) }"
              :data-testid="`nav-${item.href.replace(/\//g, '-').slice(1) || 'home'}`"
            >
              {{ item.label }}
              <svg
                v-if="item.children"
                class="w-4 h-4 transition-transform duration-300"
                :class="{ 'rotate-180': openDropdown === item.label }"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </NuxtLink>

            <!-- Dropdown -->
            <Transition
              enter-active-class="transition duration-200 ease-out"
              enter-from-class="opacity-0 scale-95 -translate-y-2"
              enter-to-class="opacity-100 scale-100 translate-y-0"
              leave-active-class="transition duration-150 ease-in"
              leave-from-class="opacity-100 scale-100 translate-y-0"
              leave-to-class="opacity-0 scale-95 -translate-y-2"
            >
              <div
                v-if="item.children && openDropdown === item.label"
                class="absolute top-full left-0 w-64 bg-theme-card/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-theme overflow-hidden"
              >
                <div class="py-2">
                  <NuxtLink
                    v-for="child in item.children"
                    :key="child.href"
                    :to="localePath(child.href)"
                    class="block px-4 py-3 text-sm text-theme-secondary hover:text-brand hover:bg-brand-5 transition-all duration-300"
                    :data-testid="`nav-${child.href.replace(/\//g, '-').slice(1)}`"
                    @click="closeDropdowns"
                  >
                    {{ child.label }}
                  </NuxtLink>
                </div>
              </div>
            </Transition>
          </div>
        </div>

        <!-- CTA Button, Language & Theme Toggle -->
        <div class="hidden lg:flex items-center space-x-4">
          <a
            href="tel:918320140215"
            class="text-sm text-theme-secondary hover:text-brand transition-colors"
            data-testid="phone-link"
          >
            <span class="flex items-center gap-2">
              <svg
                class="w-4 h-4"
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
              +918320140215
            </span>
          </a>
          
          <!-- Language Switcher -->
          <!-- <LanguageSwitcher /> -->
          
          <!-- Theme Toggle -->
          <ThemeToggle />
          
          <NuxtLink
            :to="localePath('/contact')"
            class="px-6 py-2.5 btn-primary text-sm rounded-full"
            data-testid="cta-get-quote"
          >
            {{ t('common.getQuote') }}
          </NuxtLink>
        </div>

        <!-- Mobile Menu Button -->
        <button
          class="lg:hidden p-2 text-theme-secondary hover:text-brand transition-colors"
          data-testid="mobile-menu-toggle"
          @click="isMenuOpen = !isMenuOpen"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              v-if="!isMenuOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div
        v-if="isMenuOpen"
        class="lg:hidden bg-theme/98 backdrop-blur-xl border-t border-theme"
        data-testid="mobile-menu"
      >
        <div class="max-h-[70vh] overflow-y-auto py-4 px-4">
          <div v-for="item in menuItems" :key="item.label" class="mb-2">
            <button
              v-if="item.children"
              class="w-full flex items-center justify-between px-4 py-3 text-theme-secondary hover:text-brand transition-colors"
              @click="toggleDropdown(item.label)"
            >
              <span>{{ item.label }}</span>
              <svg
                class="w-4 h-4 transition-transform duration-300"
                :class="{ 'rotate-180': openDropdown === item.label }"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <NuxtLink
              v-else
              :to="localePath(item.href)"
              class="block px-4 py-3 text-theme-secondary hover:text-brand transition-colors"
              @click="isMenuOpen = false"
            >
              {{ item.label }}
            </NuxtLink>

            <Transition
              enter-active-class="transition duration-200 ease-out"
              enter-from-class="opacity-0 max-h-0"
              enter-to-class="opacity-100 max-h-96"
              leave-active-class="transition duration-150 ease-in"
              leave-from-class="opacity-100 max-h-96"
              leave-to-class="opacity-0 max-h-0"
            >
              <div
                v-if="item.children && openDropdown === item.label"
                class="overflow-hidden bg-brand-5 rounded-xl mx-2"
              >
                <NuxtLink
                  v-for="child in item.children"
                  :key="child.href"
                  :to="localePath(child.href)"
                  class="block px-6 py-2.5 text-sm text-theme-muted hover:text-brand transition-colors"
                  @click="isMenuOpen = false"
                >
                  {{ child.label }}
                </NuxtLink>
              </div>
            </Transition>
          </div>

          <div class="mt-6 px-4 space-y-4">
            <div class="flex items-center justify-between">
              <a
                href="tel:918320140215"
                class="flex items-center gap-2 text-theme-secondary hover:text-brand transition-colors"
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
                918320140215
              </a>
              <div class="flex items-center gap-3">
                <LanguageSwitcher />
                <ThemeToggle />
              </div>
            </div>
            <NuxtLink
              :to="localePath('/contact')"
              class="block w-full text-center px-6 py-3 btn-primary rounded-full"
              @click="isMenuOpen = false"
            >
              {{ t('common.getQuote') }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </Transition>
  </nav>
</template>
