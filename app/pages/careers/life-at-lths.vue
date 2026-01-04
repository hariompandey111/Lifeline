<script setup lang="ts">
useSeoMeta({
  title: 'Life at LTHS | Careers',
  description: 'Discover what it\'s like to work at LTHS. Our culture, values, and team.',
})

const gallery = [
  { type: 'Team Training', icon: '📚' },
  { type: 'Team Celebration', icon: '🎉' },
  { type: 'Work Environment', icon: '💼' },
  { type: 'Client Site', icon: '🏢' },
  { type: 'Team Outing', icon: '🌴' },
  { type: 'Awards & Recognition', icon: '🏆' },
]

const values = [
  {
    icon: '🤝',
    title: 'Teamwork',
    description: 'We believe in the power of collaboration and supporting each other.',
  },
  {
    icon: '📈',
    title: 'Growth',
    description: 'Continuous learning and development opportunities for all.',
  },
  {
    icon: '💯',
    title: 'Excellence',
    description: 'We strive for the highest standards in everything we do.',
  },
  {
    icon: '❤️',
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
          class="inline-flex items-center gap-2 text-gray-400 hover:text-[#d4a574] transition-colors mb-8"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Careers
        </NuxtLink>

        <div class="max-w-3xl">
          <h1 class="font-display text-5xl md:text-6xl font-bold mb-6">
            Life at <span class="gradient-text">LTHS</span>
          </h1>
          <p class="text-xl text-gray-400 leading-relaxed">
            More than just a workplace - we're a family that grows together, celebrates together, and succeeds together.
          </p>
        </div>
      </div>
    </section>

    <!-- Culture Section -->
    <section class="relative py-24 bg-[#050505]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <!-- Video Placeholder -->
          <div class="relative">
            <div
              class="aspect-video rounded-3xl image-placeholder bg-gradient-to-br from-[#1a1a2e] to-[#0a0a0a] border border-white/10 flex items-center justify-center"
            >
              <div class="text-center">
                <div
                  class="w-20 h-20 mx-auto mb-4 rounded-full bg-[#d4a574]/20 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
                >
                  <svg
                    class="w-10 h-10 text-[#d4a574]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p class="text-gray-500">Culture Video</p>
              </div>
            </div>
          </div>

          <!-- Content -->
          <div>
            <h2 class="font-display text-4xl font-bold mb-6">
              Our <span class="gradient-text">Culture</span>
            </h2>
            <p class="text-gray-400 text-lg leading-relaxed mb-6">
              At LTHS, we believe that happy employees create happy clients. We foster an environment where everyone feels valued, respected, and empowered to do their best work.
            </p>
            <p class="text-gray-400 leading-relaxed">
              From regular training programs to team celebrations, we invest in our people because they're our greatest asset. Join us and experience a workplace that truly cares.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Values -->
    <section class="relative py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="font-display text-4xl font-bold">
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
            class="text-center p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/5"
          >
            <span class="text-5xl mb-4 block">{{ value.icon }}</span>
            <h3 class="font-display text-xl font-semibold text-white mb-2">
              {{ value.title }}
            </h3>
            <p class="text-gray-500 text-sm">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Photo Gallery -->
    <section class="relative py-24 bg-[#050505]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="font-display text-4xl font-bold">
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
            class="aspect-square rounded-2xl image-placeholder bg-gradient-to-br from-[#1a1a2e] to-[#0a0a0a] border border-white/10 flex items-center justify-center hover:border-[#d4a574]/30 transition-colors cursor-pointer group"
          >
            <div class="text-center">
              <span class="text-5xl block mb-2 group-hover:scale-110 transition-transform">{{ item.icon }}</span>
              <p class="text-gray-500 text-sm">{{ item.type }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="relative py-24">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="font-display text-4xl font-bold mb-6">
          Ready to Join the <span class="gradient-text">Family?</span>
        </h2>
        <p class="text-gray-400 text-lg mb-8">
          Explore our current openings and take the first step towards an exciting career.
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <NuxtLink
            to="/careers/openings"
            class="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#d4a574] to-[#b8956e] text-[#0a0a0a] font-semibold rounded-full hover:shadow-2xl hover:shadow-[#d4a574]/30 transition-all duration-500"
          >
            View Openings
          </NuxtLink>
          <NuxtLink
            to="/careers/apply"
            class="inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-white font-semibold rounded-full hover:bg-white/5 transition-all duration-300"
          >
            Apply Now
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

