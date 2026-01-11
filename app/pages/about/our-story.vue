<script setup lang="ts">
useSeoMeta({
  title: 'Our Story | LTHS - Lifetime Hospitality Services',
  description:
    'Discover the journey of LTHS from a startup in 2016 to a leading hospitality services provider in Pune.',
})
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
          <span class="text-brand font-medium uppercase tracking-widest text-sm">Our Story</span>
          <h1 class="font-display text-2xl md:text-6xl font-bold mt-4 mb-6 text-theme-heading">
            From Vision to
            <span class="gradient-text">Reality</span>
          </h1>
          <p class="text-xl text-theme-secondary leading-relaxed">
            The inspiring journey of Lifetime Hospitality Services - built on passion, dedication, and an unwavering commitment to excellence.
          </p>
        </div>
      </div>
    </section>

    <!-- Story Content -->
    <section class="relative py-24 section-gradient">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Video Placeholder -->
        <div class="aspect-video rounded-3xl image-placeholder flex items-center justify-center mb-16">
          <div class="text-center">
            <div class="w-20 h-20 mx-auto mb-4 rounded-full icon-box flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
              <svg class="w-10 h-10 text-brand" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <p class="text-theme-muted">Our Story Video</p>
          </div>
        </div>

        <!-- Story Sections -->
        <div class="prose prose-lg max-w-none">
          <div class="space-y-12">
            <div
              v-motion
              :initial="{ opacity: 0, y: 30 }"
              :visible="{ opacity: 1, y: 0 }"
            >
              <h2 class="font-display text-3xl font-bold text-theme-heading mb-4">
                The Beginning
              </h2>
              <p class="text-theme-secondary leading-relaxed">
                In 2016, with a clear vision and determination, Lifetime Hospitality Services was born in Talegaon, Pune. What started as a small venture with a handful of dedicated professionals has now grown into a comprehensive hospitality services provider serving major corporations across Maharashtra.
              </p>
            </div>

            <div
              v-motion
              :initial="{ opacity: 0, y: 30 }"
              :visible="{ opacity: 1, y: 0, transition: { delay: 100 } }"
            >
              <h2 class="font-display text-3xl font-bold text-theme-heading mb-4">
                Growing Through Challenges
              </h2>
              <p class="text-theme-secondary leading-relaxed">
                The hospitality industry is competitive, but we've always believed in letting our work speak for itself. By focusing on quality, reliability, and building lasting relationships with our clients, we've managed to carve our niche in the market. Each challenge became an opportunity to learn and grow stronger.
              </p>
            </div>

            <div class="grid md:grid-cols-2 gap-8 my-12">
              <div class="aspect-square rounded-2xl image-placeholder flex items-center justify-center">
                <span class="text-4xl">🏗️</span>
              </div>
              <div class="aspect-square rounded-2xl image-placeholder flex items-center justify-center">
                <UIcon name="i-heroicons-hand-raised" class="w-12 h-12 text-brand" />
              </div>
            </div>

            <div
              v-motion
              :initial="{ opacity: 0, y: 30 }"
              :visible="{ opacity: 1, y: 0, transition: { delay: 200 } }"
            >
              <h2 class="font-display text-3xl font-bold text-theme-heading mb-4">
                Today and Beyond
              </h2>
              <p class="text-theme-secondary leading-relaxed">
                Today, LTHS proudly serves leading companies like TE Connectivity, Thyssenkrupp, and Forbes Marshall. With a team of over 500 trained professionals, we continue to expand our services and reach. But no matter how much we grow, our core values remain the same: excellence, integrity, and a genuine care for our clients and their needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Quote Section -->
    <section class="relative py-24 section-dark">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="relative">
          <svg class="absolute -top-8 left-0 w-16 h-16 text-brand-20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <p class="font-display text-2xl md:text-3xl text-theme-heading italic leading-relaxed">
            "Our journey is proof that with dedication, expertise, and a client-first approach, any vision can become reality."
          </p>
          <div class="mt-8">
            <p class="text-brand font-semibold">Mrs. Aman Londhe</p>
            <p class="text-theme-muted text-sm">Managing Director, LTHS</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
