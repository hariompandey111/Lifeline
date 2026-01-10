// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/hints',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxt/ui',
    '@nuxtjs/color-mode',
    '@nuxtjs/i18n',
    '@vueuse/motion/nuxt',
  ],

  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',

  // Runtime config - automatically reads from .env file
  // Variables prefixed with NUXT_ are auto-mapped
  runtimeConfig: {
    // Server-only keys (not exposed to client)
    supabaseUrl: '',
    supabaseServiceRoleKey: '',
    resendApiKey: '',
    emailFrom: 'LTHS Contact <onboarding@resend.dev>',
    emailTo: 'aman.l@lths.in',

    // Public keys (exposed to client)
    public: {
      // Add public runtime config here if needed
    },
  },

  colorMode: {
    preference: 'dark', // default theme
    fallback: 'dark',
    classSuffix: '',
    storageKey: 'lths-color-mode',
  },

  i18n: {
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'hi', name: 'हिंदी', file: 'hi.json' },
      { code: 'mr', name: 'मराठी', file: 'mr.json' },
    ],
    defaultLocale: 'en',
    langDir: 'locales',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'lths-i18n',
      fallbackLocale: 'en',
    },
  },

  app: {
    head: {
      title: 'LTHS - Lifetime Hospitality Services',
      meta: [
        { name: 'description', content: 'Premium hospitality services since 2016 - Patient Care, Housekeeping, Catering, Security & more' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        // ============================================
        // 🔤 FONT OPTIONS - All fonts loaded for easy switching
        // Change 'activeFont' in tailwind.config.ts to switch
        // 
        // ⚠️ PRODUCTION TIP: Comment out unused fonts before deploying
        // to reduce page load time. Only keep the one you're using!
        // ============================================
        // Font 1: Classic Elegance
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=DM+Sans:wght@400;500;600;700&display=swap' },
        // Font 2: Modern Professional
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap' },
        // Font 3: Warm & Welcoming
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Source+Sans+3:wght@400;500;600;700&display=swap' },
        // Font 4: Bold & Confident
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Open+Sans:wght@400;500;600;700&display=swap' },
        // Font 5: Luxury Hospitality
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Lato:wght@400;700&display=swap' },
        // Font 6: Clean & Friendly
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Nunito:wght@400;500;600;700&display=swap' },
        // Font 7: Corporate Trust
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700;900&family=Roboto:wght@400;500;700&display=swap' },
        // Font 8: Contemporary Elegance
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Fraunces:wght@400;500;600;700&family=Work+Sans:wght@400;500;600;700&display=swap' },
        // Font 9: Geometric Modern
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=IBM+Plex+Sans:wght@400;500;600;700&display=swap' },
        // Font 10: Timeless Sophistication
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;500;600;700&family=Karla:wght@400;500;600;700&display=swap' },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  css: ['~/assets/css/main.css'],
})
