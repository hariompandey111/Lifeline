<script setup lang="ts">
useSeoMeta({
  title: 'Leadership Team | LTHS - Lifetime Hospitality Services',
  description:
    'Meet the visionary leaders driving LTHS forward. Our experienced team brings decades of hospitality expertise.',
})

const leaders = [
  {
    name: 'Mrs. Aman Londhe',
    role: 'Managing Director',
    qualification: 'Diploma in Hotel Management',
    experience: '10+ years in hotel management',
    bio: 'With rich experience of more than 10 years in hotel management, Mrs. Londhe brings deep knowledge of hospitality concepts, practices and procedures. Her vision has helped LTHS achieve new paths and working towards being one of the trusted brands globally.',
    image: null,
  },
]

const coreValues = [
  {
    icon: '🎯',
    title: 'Strategic Vision',
    description: 'Long-term planning and foresight in every decision.',
  },
  {
    icon: '🤝',
    title: 'Client Partnership',
    description: 'Building lasting relationships through trust and delivery.',
  },
  {
    icon: '💡',
    title: 'Innovation',
    description: 'Constantly evolving to meet changing industry needs.',
  },
  {
    icon: '👥',
    title: 'Team Empowerment',
    description: 'Investing in our people for collective success.',
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
          Back to About
        </NuxtLink>

        <div class="max-w-3xl">
          <span class="text-[#d4a574] font-medium uppercase tracking-widest text-sm"
            >Leadership</span
          >
          <h1 class="font-display text-5xl md:text-6xl font-bold mt-4 mb-6">
            Meet Our
            <span class="gradient-text">Leaders</span>
          </h1>
          <p class="text-xl text-gray-400 leading-relaxed">
            Visionary leadership driving excellence in every service we
            provide.
          </p>
        </div>
      </div>
    </section>

    <!-- Leadership Team -->
    <section class="relative py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          v-for="(leader, index) in leaders"
          :key="leader.name"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible="{ opacity: 1, y: 0, transition: { delay: index * 100 } }"
          class="grid lg:grid-cols-2 gap-16 items-center"
        >
          <!-- Image -->
          <div class="relative">
            <div
              class="aspect-[3/4] rounded-3xl image-placeholder bg-gradient-to-br from-[#1a1a2e] to-[#0a0a0a] border border-white/10 flex items-center justify-center"
            >
              <div class="text-center">
                <div
                  class="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-[#d4a574] to-[#b8956e] flex items-center justify-center text-5xl text-[#0a0a0a] font-display font-bold mb-4"
                >
                  AL
                </div>
                <p class="text-gray-500">Photo Placeholder</p>
              </div>
            </div>

            <!-- Decorative Elements -->
            <div
              class="absolute -top-4 -right-4 w-24 h-24 border-2 border-[#d4a574]/30 rounded-3xl"
            ></div>
            <div
              class="absolute -bottom-4 -left-4 w-24 h-24 bg-[#d4a574]/10 rounded-3xl"
            ></div>
          </div>

          <!-- Content -->
          <div>
            <span
              class="inline-block px-4 py-2 bg-[#d4a574]/10 text-[#d4a574] text-sm font-medium rounded-full mb-6"
              >{{ leader.role }}</span
            >
            <h2 class="font-display text-4xl font-bold text-white mb-4">
              {{ leader.name }}
            </h2>
            <p class="text-[#d4a574] mb-6">{{ leader.qualification }}</p>
            <p class="text-gray-400 leading-relaxed text-lg mb-8">
              {{ leader.bio }}
            </p>

            <div class="flex flex-wrap gap-4">
              <div
                class="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5"
              >
                <svg
                  class="w-5 h-5 text-[#d4a574]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span class="text-gray-400">{{ leader.experience }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Leadership Philosophy -->
    <section class="relative py-24 bg-[#050505]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="font-display text-4xl font-bold mb-6">
            Leadership <span class="gradient-text">Philosophy</span>
          </h2>
          <p class="text-gray-400 text-lg">
            Our leadership approach is built on four key pillars that guide
            every decision and action.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="(value, index) in coreValues"
            :key="value.title"
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :visible="{ opacity: 1, y: 0, transition: { delay: index * 100 } }"
            class="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/5 hover:border-[#d4a574]/30 transition-all duration-300"
          >
            <span class="text-4xl mb-4 block">{{ value.icon }}</span>
            <h3 class="font-display text-xl font-semibold text-white mb-2">
              {{ value.title }}
            </h3>
            <p class="text-gray-500 text-sm">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Join Team CTA -->
    <section class="relative py-24">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="font-display text-4xl font-bold mb-6">
          Join Our <span class="gradient-text">Team</span>
        </h2>
        <p class="text-gray-400 text-lg mb-8">
          Be part of a dynamic team that's shaping the future of hospitality
          services.
        </p>
        <NuxtLink
          to="/careers"
          class="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#d4a574] to-[#b8956e] text-[#0a0a0a] font-semibold rounded-full hover:shadow-2xl hover:shadow-[#d4a574]/30 transition-all duration-500"
          data-testid="join-team-cta"
        >
          View Careers
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

