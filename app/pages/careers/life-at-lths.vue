<script setup lang="ts">
useSeoMeta({
  title: 'Life at LTHS | Careers',
  description: 'Discover what it\'s like to work at LTHS. Our culture, values, and team.',
})

const gallery = [
  { type: 'Team Training', icon: 'i-heroicons-book-open' },
  { type: 'Team Celebration', icon: 'i-heroicons-sparkles' },
  { type: 'Work Environment', icon: 'i-heroicons-briefcase' },
  { type: 'Client Site', icon: 'i-heroicons-building-office-2' },
  { type: 'Team Outing', icon: 'i-heroicons-sun' },
  { type: 'Awards & Recognition', icon: 'i-heroicons-trophy' },
]

const values = [
  {
    icon: 'i-heroicons-hand-raised',
    title: 'Teamwork',
    description: 'We believe in the power of collaboration and supporting each other.',
  },
  {
    icon: 'i-heroicons-chart-bar',
    title: 'Growth',
    description: 'Continuous learning and development opportunities for all.',
  },
  {
    icon: 'i-heroicons-star',
    title: 'Excellence',
    description: 'We strive for the highest standards in everything we do.',
  },
  {
    icon: 'i-heroicons-heart',
    title: 'Care',
    description: 'Genuine concern for our team members, clients, and communities.',
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
          to="/careers"
          class="inline-flex items-center gap-2 text-theme-secondary hover:text-brand transition-colors mb-8"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Careers
        </NuxtLink>

        <div class="max-w-3xl">
          <h1 class="font-display text-5xl md:text-6xl font-bold mb-6 text-theme-heading">
            Life at <span class="gradient-text">LTHS</span>
          </h1>
          <p class="text-xl text-theme-secondary leading-relaxed">
            More than just a workplace - we're a family that grows together, celebrates together, and succeeds together.
          </p>
        </div>
      </div>
    </section>

    <!-- Culture Section -->
    <section class="relative py-24 section-dark">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <!-- Video Placeholder -->
          <div class="relative">
            <div class="aspect-video rounded-3xl image-placeholder flex items-center justify-center">
              <div class="text-center">
                <div class="w-20 h-20 mx-auto mb-4 rounded-full icon-box flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                  <svg class="w-10 h-10 text-brand" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p class="text-theme-muted">Culture Video</p>
              </div>
            </div>
          </div>

          <!-- Content -->
          <div>
            <h2 class="font-display text-4xl font-bold mb-6 text-theme-heading">
              Our <span class="gradient-text">Culture</span>
            </h2>
            <p class="text-theme-secondary text-lg leading-relaxed mb-6">
              At LTHS, we believe that happy employees create happy clients. We foster an environment where everyone feels valued, respected, and empowered to do their best work.
            </p>
            <p class="text-theme-secondary leading-relaxed">
              From regular training programs to team celebrations, we invest in our people because they're our greatest asset. Join us and experience a workplace that truly cares.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Values -->
    <section class="relative py-24 section-gradient">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="font-display text-4xl font-bold text-theme-heading">
            Our <span class="gradient-text">Values</span>
          </h2>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="(value, index) in values"
            :key="value.title"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visible="{ opacity: 1, y: 0, transition: { delay: index * 100 } }"
            class="text-center p-8 rounded-2xl card-gradient"
          >
            <UIcon :name="value.icon" class="w-12 h-12 mb-4 text-brand" />
            <h3 class="font-display text-xl font-semibold text-theme-heading mb-2">
              {{ value.title }}
            </h3>
            <p class="text-theme-muted text-sm">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Photo Gallery -->
    <section class="relative py-24 section-dark">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="font-display text-4xl font-bold text-theme-heading">
            <span class="gradient-text">Gallery</span>
          </h2>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(item, index) in gallery"
            :key="item.type"
            v-motion
            :initial="{ opacity: 0, scale: 0.9 }"
            :visible="{ opacity: 1, scale: 1, transition: { delay: index * 80 } }"
            class="aspect-square rounded-2xl image-placeholder flex items-center justify-center hover:border-brand-30 transition-colors cursor-pointer group"
          >
            <div class="text-center">
              <UIcon :name="item.icon" class="w-12 h-12 mb-2 group-hover:scale-110 transition-transform text-brand" />
              <p class="text-theme-muted text-sm">{{ item.type }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="relative py-24 section-gradient">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="font-display text-4xl font-bold mb-6 text-theme-heading">
          Ready to Join the <span class="gradient-text">Family?</span>
        </h2>
        <p class="text-theme-secondary text-lg mb-8">
          Explore our current openings and take the first step towards an exciting career.
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <NuxtLink
            to="/careers/openings"
            class="inline-flex items-center gap-3 px-8 py-4 btn-primary rounded-full"
          >
            View Openings
          </NuxtLink>
          <NuxtLink
            to="/careers/apply"
            class="inline-flex items-center gap-3 px-8 py-4 btn-ghost rounded-full"
          >
            Apply Now
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
