<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
const currentYear = new Date().getFullYear()

const services = computed(() => [
  { label: t('services.patientCare.name'), href: '/services/patient-care' },
  { label: t('services.housekeeping.name'), href: '/services/housekeeping' },
  { label: t('services.catering.name'), href: '/services/catering' },
  { label: t('services.security.name'), href: '/services/security' },
  { label: t('services.maintenance.name'), href: '/services/maintenance' },
])

const company = computed(() => [
  { label: t('nav.aboutUs'), href: '/about' },
  { label: t('nav.ourStory'), href: '/about/our-story' },
  { label: t('nav.leadership'), href: '/about/leadership' },
  { label: t('nav.careers'), href: '/careers' },
  { label: t('nav.blog'), href: '/blog' },
])

const support = computed(() => [
  { label: t('nav.contact'), href: '/contact' },
  { label: t('common.getQuote'), href: '/contact#quote' },
  { label: t('nav.industries'), href: '/industries' },
  { label: t('nav.clients'), href: '/clients' },
])

const socialLinks = [
  {
    name: 'LinkedIn',
    href: '#',
    icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z',
  },
  {
    name: 'Facebook',
    href: '#',
    icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
  },
  {
    name: 'Twitter',
    href: '#',
    icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z',
  },
]
</script>

<template>
  <footer class="section-dark border-t border-theme-light" data-testid="main-footer">
    <!-- Main Footer -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
        <!-- Brand Column -->
        <div class="lg:col-span-2">
          <NuxtLink :to="localePath('/')" class="flex items-center space-x-3 mb-6">
            <div
              class="w-12 h-12 gradient-secondary rounded-xl flex items-center justify-center"
            >
              <span class="text-white dark:text-black font-display font-bold text-xl">L</span>
            </div>
            <div>
              <span class="font-display text-xl font-semibold gradient-text">{{ t('common.companyName') }}</span>
              <p class="text-xs text-theme-muted">{{ t('common.companyFullName') }}</p>
            </div>
          </NuxtLink>

          <p class="text-theme-secondary text-sm leading-relaxed mb-6 max-w-sm">
            {{ t('footer.description') }}
          </p>

          <div class="space-y-3">
            <div class="flex items-start gap-3 text-sm text-theme-secondary">
              <svg
                class="w-5 h-5 text-brand mt-0.5 flex-shrink-0"
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
              <span>B-609, Ayush Park, 2, Varale Phata,<br />Talegaon Dabhade, Pune – 410507</span>
            </div>
            <a
              href="tel:8956690990"
              class="flex items-center gap-3 text-sm text-theme-secondary hover:text-brand transition-colors"
            >
              <svg
                class="w-5 h-5 text-brand"
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
              8956690990 / 8320140215
            </a>
            <a
              href="mailto:aman.l@lths.in"
              class="flex items-center gap-3 text-sm text-theme-secondary hover:text-brand transition-colors"
            >
              <svg
                class="w-5 h-5 text-brand"
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
              aman.l@lths.in
            </a>
          </div>
        </div>

        <!-- Services -->
        <div>
          <h4 class="font-display text-lg font-semibold text-theme-heading mb-6">
            {{ t('footer.ourServices') }}
          </h4>
          <ul class="space-y-3">
            <li v-for="link in services" :key="link.href">
              <NuxtLink
                :to="localePath(link.href)"
                class="text-sm text-theme-secondary hover:text-brand transition-colors"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Company -->
        <div>
          <h4 class="font-display text-lg font-semibold text-theme-heading mb-6">
            {{ t('footer.quickLinks') }}
          </h4>
          <ul class="space-y-3">
            <li v-for="link in company" :key="link.href">
              <NuxtLink
                :to="localePath(link.href)"
                class="text-sm text-theme-secondary hover:text-brand transition-colors"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Support -->
        <div>
          <h4 class="font-display text-lg font-semibold text-theme-heading mb-6">
            {{ t('footer.contactInfo') }}
          </h4>
          <ul class="space-y-3">
            <li v-for="link in support" :key="link.href">
              <NuxtLink
                :to="localePath(link.href)"
                class="text-sm text-theme-secondary hover:text-brand transition-colors"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>

          <!-- Social Links -->
          <div class="mt-8">
            <h4 class="font-display text-lg font-semibold text-theme-heading mb-4">
              {{ t('common.followUs') }}
            </h4>
            <div class="flex gap-4">
              <a
                v-for="social in socialLinks"
                :key="social.name"
                :href="social.href"
                :aria-label="social.name"
                class="w-10 h-10 rounded-full bg-brand-5 flex items-center justify-center hover:bg-brand-20 transition-colors group"
              >
                <svg
                  class="w-5 h-5 text-theme-muted group-hover:text-brand transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path :d="social.icon" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-theme-light">
      <div
        class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4"
      >
        <p class="text-sm text-theme-muted">
          {{ t('footer.copyright', { year: currentYear }) }}
        </p>
        <div class="flex gap-6 text-sm text-theme-muted">
          <NuxtLink :to="localePath('/privacy')" class="hover:text-brand transition-colors">{{ t('footer.privacyPolicy') }}</NuxtLink>
          <NuxtLink :to="localePath('/terms')" class="hover:text-brand transition-colors">{{ t('footer.termsOfService') }}</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>
