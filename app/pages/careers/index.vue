<script setup lang="ts">
useSeoMeta({
  title: 'Careers | LTHS - Lifetime Hospitality Services',
  description:
    'Join the LTHS family. Explore exciting career opportunities in hospitality services.',
})

const openings = [
  {
    title: 'Housekeeping Supervisor',
    location: 'Pune',
    type: 'Full-time',
    experience: '3-5 years',
  },
  {
    title: 'Security Guard',
    location: 'Chakan, Pune',
    type: 'Full-time',
    experience: '1-3 years',
  },
  {
    title: 'Patient Care Attendant',
    location: 'Pune',
    type: 'Full-time',
    experience: '2-4 years',
  },
  {
    title: 'Office Admin Executive',
    location: 'Talegaon, Pune',
    type: 'Full-time',
    experience: '1-2 years',
  },
]

const benefits = [
  {
    icon: '💰',
    title: 'Competitive Salary',
    description: 'Industry-standard compensation with regular increments.',
  },
  {
    icon: '📚',
    title: 'Training & Development',
    description: 'Continuous learning opportunities to grow your skills.',
  },
  {
    icon: '🏥',
    title: 'Health Benefits',
    description: 'Medical coverage for you and your family.',
  },
  {
    icon: '📈',
    title: 'Career Growth',
    description: 'Clear paths for advancement within the organization.',
  },
  {
    icon: '👥',
    title: 'Great Team',
    description: 'Work with supportive colleagues in a positive environment.',
  },
  {
    icon: '⚖️',
    title: 'Work-Life Balance',
    description: 'We value your time and personal commitments.',
  },
]
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="relative pt-32 pb-20 overflow-hidden">
      <div class="absolute inset-0 animated-gradient"></div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl">
          <span
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0 }"
            class="inline-block text-[#d4a574] font-medium uppercase tracking-widest text-sm mb-4"
            >Careers</span
          >
          <h1
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 100 } }"
            class="font-display text-5xl md:text-6xl font-bold mb-6"
          >
            Build Your Career
            <span class="gradient-text">With Us</span>
          </h1>
          <p
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 200 } }"
            class="text-xl text-gray-400 leading-relaxed"
          >
            Join a team that values growth, excellence, and making a difference
            every day.
          </p>
        </div>
      </div>
    </section>

    <!-- Navigation -->
    <section class="relative py-8 bg-[#050505]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-wrap gap-4">
          <NuxtLink
            to="/careers/openings"
            class="px-6 py-3 rounded-full bg-[#d4a574]/10 text-[#d4a574] font-medium hover:bg-[#d4a574]/20 transition-colors"
            data-testid="careers-nav-openings"
          >
            Current Openings
          </NuxtLink>
          <NuxtLink
            to="/careers/life-at-lths"
            class="px-6 py-3 rounded-full bg-white/5 text-gray-400 font-medium hover:bg-white/10 transition-colors"
            data-testid="careers-nav-life"
          >
            Life at LTHS
          </NuxtLink>
          <NuxtLink
            to="/careers/apply"
            class="px-6 py-3 rounded-full bg-white/5 text-gray-400 font-medium hover:bg-white/10 transition-colors"
            data-testid="careers-nav-apply"
          >
            Apply Now
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Why Join Us -->
    <section class="relative py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <!-- Image Placeholder -->
          <div class="relative">
            <div
              class="aspect-[4/3] rounded-3xl image-placeholder bg-gradient-to-br from-[#1a1a2e] to-[#0a0a0a] border border-white/10 flex items-center justify-center"
            >
              <div class="text-center">
                <span class="text-6xl block mb-4">👥</span>
                <p class="text-gray-500">Team Photo</p>
              </div>
            </div>
          </div>

          <div>
            <h2 class="font-display text-4xl font-bold mb-6">
              Why Join <span class="gradient-text">LTHS?</span>
            </h2>
            <p class="text-gray-400 text-lg leading-relaxed mb-8">
              At LTHS, we believe our people are our greatest asset. We foster a
              culture of growth, respect, and excellence where every team member
              can thrive.
            </p>

            <div class="grid sm:grid-cols-2 gap-6">
              <div
                v-for="(benefit, index) in benefits"
                :key="benefit.title"
                v-motion
                :initial="{ opacity: 0, y: 20 }"
                :visible="{ opacity: 1, y: 0, transition: { delay: index * 50 } }"
                class="flex gap-4"
              >
                <div
                  class="w-12 h-12 rounded-lg bg-[#d4a574]/10 flex items-center justify-center text-2xl flex-shrink-0"
                >
                  {{ benefit.icon }}
                </div>
                <div>
                  <h3 class="font-semibold text-white">{{ benefit.title }}</h3>
                  <p class="text-gray-500 text-sm">{{ benefit.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Current Openings -->
    <section id="openings" class="relative py-24 bg-[#050505]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="font-display text-4xl font-bold mb-6">
            Current <span class="gradient-text">Openings</span>
          </h2>
          <p class="text-gray-400 text-lg">
            Explore opportunities to join our growing team.
          </p>
        </div>

        <div class="space-y-4">
          <div
            v-for="(job, index) in openings"
            :key="job.title"
            v-motion
            :initial="{ opacity: 0, x: -20 }"
            :visible="{ opacity: 1, x: 0, transition: { delay: index * 100 } }"
            class="p-6 rounded-2xl bg-gradient-to-r from-white/5 to-transparent border border-white/10 hover:border-[#d4a574]/30 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-4"
          >
            <div>
              <h3 class="font-display text-xl font-semibold text-white">
                {{ job.title }}
              </h3>
              <div class="flex flex-wrap gap-4 mt-2">
                <span class="flex items-center gap-1 text-gray-400 text-sm">
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
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                  </svg>
                  {{ job.location }}
                </span>
                <span class="flex items-center gap-1 text-gray-400 text-sm">
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
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {{ job.type }}
                </span>
                <span class="flex items-center gap-1 text-gray-400 text-sm">
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
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  {{ job.experience }}
                </span>
              </div>
            </div>
            <NuxtLink
              to="/careers/apply"
              class="inline-flex items-center gap-2 px-6 py-3 bg-[#d4a574]/10 text-[#d4a574] font-medium rounded-full hover:bg-[#d4a574]/20 transition-colors"
            >
              Apply Now
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </NuxtLink>
          </div>
        </div>

        <div class="text-center mt-12">
          <NuxtLink
            to="/careers/openings"
            class="inline-flex items-center gap-2 text-[#d4a574] font-semibold hover:gap-4 transition-all"
          >
            View All Openings
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
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="relative py-24">
      <div
        class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center rounded-3xl bg-gradient-to-br from-[#d4a574]/10 to-transparent border border-[#d4a574]/20 p-12"
      >
        <h2 class="font-display text-4xl font-bold mb-6">
          Ready to Start Your
          <span class="gradient-text">Journey?</span>
        </h2>
        <p class="text-gray-400 text-lg mb-8">
          Apply today and become part of our growing family.
        </p>
        <NuxtLink
          to="/careers/apply"
          class="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#d4a574] to-[#b8956e] text-[#0a0a0a] font-semibold rounded-full hover:shadow-2xl hover:shadow-[#d4a574]/30 transition-all duration-500"
          data-testid="careers-apply-cta"
        >
          Apply Now
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

