<script setup lang="ts">
useSeoMeta({
  title: 'Mission & Vision | LTHS - Lifetime Hospitality Services',
  description:
    'Discover the mission and vision that drive LTHS to deliver exceptional hospitality services every day.',
})

const values = [
  {
    icon: '💎',
    title: 'Excellence',
    description: 'Striving for the highest standards in every service we deliver.',
  },
  {
    icon: '🤝',
    title: 'Integrity',
    description: 'Building trust through honest and transparent business practices.',
  },
  {
    icon: '💡',
    title: 'Innovation',
    description: 'Continuously improving and adapting to meet evolving needs.',
  },
  {
    icon: '❤️',
    title: 'Care',
    description: 'Genuine concern for our clients, employees, and communities.',
  },
  {
    icon: '⚡',
    title: 'Reliability',
    description: 'Consistent, dependable service you can count on every time.',
  },
  {
    icon: '🌱',
    title: 'Growth',
    description: 'Committed to the continuous development of our team and services.',
  },
]
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative pt-32 pb-20 overflow-hidden">
      <div class="absolute inset-0 animated-gradient"></div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <NuxtLink
          to="/about"
          class="inline-flex items-center gap-2 text-theme-secondary hover:text-brand transition-colors mb-8"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          Back to About
        </NuxtLink>

        <div class="max-w-3xl">
          <span class="text-brand font-medium uppercase tracking-widest text-sm">Mission & Vision</span>
          <h1 class="font-display text-5xl md:text-6xl font-bold mt-4 mb-6 text-theme-heading">
            Guided by
            <span class="gradient-text">Purpose</span>
          </h1>
          <p class="text-xl text-theme-secondary leading-relaxed">
            Our mission and vision define who we are and where we're headed.
          </p>
        </div>
      </div>
    </section>

    <!-- Mission & Vision Cards -->
    <section class="relative py-24 section-gradient">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-8">
          <!-- Mission -->
          <div
            v-motion
            :initial="{ opacity: 0, x: -30 }"
            :visible="{ opacity: 1, x: 0 }"
            class="relative p-10 rounded-3xl card-gradient border-brand-20"
          >
            <div class="w-20 h-20 rounded-2xl gradient-secondary flex items-center justify-center text-4xl mb-8">
              🎯
            </div>
            <h2 class="font-display text-3xl font-bold text-theme-heading mb-6">
              Our Mission
            </h2>
            <p class="text-theme-secondary text-lg leading-relaxed">
              To deliver exceptional hospitality services that transform environments, enhance well-being, and exceed client expectations through dedicated professionalism and innovative solutions.
            </p>
            <div class="mt-8 space-y-4">
              <div class="flex items-start gap-3">
                <svg class="w-6 h-6 text-brand mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <p class="text-theme-secondary">Provide comprehensive hospitality solutions</p>
              </div>
              <div class="flex items-start gap-3">
                <svg class="w-6 h-6 text-brand mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <p class="text-theme-secondary">Maintain highest quality standards</p>
              </div>
              <div class="flex items-start gap-3">
                <svg class="w-6 h-6 text-brand mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <p class="text-theme-secondary">Build lasting client relationships</p>
              </div>
            </div>
          </div>

          <!-- Vision -->
          <div
            v-motion
            :initial="{ opacity: 0, x: 30 }"
            :visible="{ opacity: 1, x: 0, transition: { delay: 100 } }"
            class="relative p-10 rounded-3xl card-gradient"
          >
            <div class="w-20 h-20 rounded-2xl image-placeholder flex items-center justify-center text-4xl mb-8">
              👁️
            </div>
            <h2 class="font-display text-3xl font-bold text-theme-heading mb-6">
              Our Vision
            </h2>
            <p class="text-theme-secondary text-lg leading-relaxed">
              To be the most trusted and preferred hospitality services brand globally, recognized for innovation, excellence, and our commitment to making every space we serve exceptional.
            </p>
            <div class="mt-8 space-y-4">
              <div class="flex items-start gap-3">
                <svg class="w-6 h-6 text-brand mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <p class="text-theme-secondary">Become a globally recognized brand</p>
              </div>
              <div class="flex items-start gap-3">
                <svg class="w-6 h-6 text-brand mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <p class="text-theme-secondary">Lead through innovation</p>
              </div>
              <div class="flex items-start gap-3">
                <svg class="w-6 h-6 text-brand mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <p class="text-theme-secondary">Set industry benchmarks</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="relative py-24 section-dark">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="font-display text-4xl font-bold mb-6 text-theme-heading">
            Our Core <span class="gradient-text">Values</span>
          </h2>
          <p class="text-theme-secondary text-lg">
            These values are the foundation of everything we do and how we serve our clients.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(value, index) in values"
            :key="value.title"
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :visible="{ opacity: 1, y: 0, transition: { delay: index * 100 } }"
            class="p-8 rounded-2xl card-gradient hover:border-brand-30 transition-all duration-300 hover-lift"
          >
            <span class="text-4xl mb-4 block">{{ value.icon }}</span>
            <h3 class="font-display text-xl font-semibold text-theme-heading mb-2">
              {{ value.title }}
            </h3>
            <p class="text-theme-secondary">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
