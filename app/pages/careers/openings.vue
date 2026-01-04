<script setup lang="ts">
useSeoMeta({
  title: 'Current Openings | Careers | LTHS',
  description: 'Explore all current job openings at LTHS.',
})

const openings = [
  {
    title: 'Housekeeping Supervisor',
    location: 'Pune',
    type: 'Full-time',
    experience: '3-5 years',
    description:
      'Lead a team of housekeeping staff to maintain cleanliness standards across client facilities.',
    responsibilities: [
      'Supervise daily housekeeping operations',
      'Train and mentor team members',
      'Ensure quality standards are met',
      'Coordinate with client representatives',
    ],
  },
  {
    title: 'Security Guard',
    location: 'Chakan, Pune',
    type: 'Full-time',
    experience: '1-3 years',
    description:
      'Provide security services for corporate and industrial clients.',
    responsibilities: [
      'Monitor premises and access control',
      'Conduct regular patrols',
      'Handle visitor management',
      'Report security incidents',
    ],
  },
  {
    title: 'Patient Care Attendant',
    location: 'Pune',
    type: 'Full-time',
    experience: '2-4 years',
    description:
      'Provide compassionate care and assistance to patients in healthcare settings.',
    responsibilities: [
      'Assist patients with daily activities',
      'Monitor patient condition',
      'Maintain hygiene and cleanliness',
      'Communicate with medical staff',
    ],
  },
  {
    title: 'Office Admin Executive',
    location: 'Talegaon, Pune',
    type: 'Full-time',
    experience: '1-2 years',
    description:
      'Handle administrative duties and front desk management for corporate offices.',
    responsibilities: [
      'Manage reception and visitor handling',
      'Handle documentation and filing',
      'Coordinate meetings and appointments',
      'General administrative support',
    ],
  },
  {
    title: 'Catering Staff',
    location: 'Multiple Locations',
    type: 'Full-time',
    experience: '1-3 years',
    description:
      'Prepare and serve food in corporate canteens and events.',
    responsibilities: [
      'Food preparation assistance',
      'Serving and counter management',
      'Maintain kitchen hygiene',
      'Inventory management',
    ],
  },
  {
    title: 'Maintenance Technician',
    location: 'Pune Region',
    type: 'Full-time',
    experience: '2-5 years',
    description:
      'Handle electrical, plumbing, and general maintenance tasks.',
    responsibilities: [
      'Preventive and corrective maintenance',
      'Equipment troubleshooting',
      'Emergency repairs',
      'Maintenance records keeping',
    ],
  },
]

const expandedJob = ref<string | null>(null)

function toggleJob(title: string) {
  expandedJob.value = expandedJob.value === title ? null : title
}
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative pt-32 pb-12 overflow-hidden">
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
          <h1 class="font-display text-5xl font-bold mb-6">
            Current <span class="gradient-text">Openings</span>
          </h1>
          <p class="text-xl text-gray-400">
            Find your next opportunity at LTHS. We're always looking for talented individuals to join our team.
          </p>
        </div>
      </div>
    </section>

    <!-- Job Listings -->
    <section class="relative py-24 bg-[#050505]">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="space-y-4">
          <div
            v-for="(job, index) in openings"
            :key="job.title"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visible="{ opacity: 1, y: 0, transition: { delay: index * 50 } }"
            class="rounded-2xl bg-gradient-to-r from-white/5 to-transparent border border-white/10 hover:border-[#d4a574]/30 transition-all duration-300 overflow-hidden"
          >
            <!-- Header -->
            <button
              class="w-full p-6 text-left flex items-center justify-between"
              @click="toggleJob(job.title)"
            >
              <div>
                <h3 class="font-display text-xl font-semibold text-white">
                  {{ job.title }}
                </h3>
                <div class="flex flex-wrap gap-4 mt-2">
                  <span class="flex items-center gap-1 text-gray-400 text-sm">
                    📍 {{ job.location }}
                  </span>
                  <span class="flex items-center gap-1 text-gray-400 text-sm">
                    ⏰ {{ job.type }}
                  </span>
                  <span class="flex items-center gap-1 text-gray-400 text-sm">
                    💼 {{ job.experience }}
                  </span>
                </div>
              </div>
              <svg
                class="w-6 h-6 text-[#d4a574] transition-transform"
                :class="{ 'rotate-180': expandedJob === job.title }"
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

            <!-- Expanded Content -->
            <Transition
              enter-active-class="transition duration-200 ease-out"
              enter-from-class="opacity-0 max-h-0"
              enter-to-class="opacity-100 max-h-96"
              leave-active-class="transition duration-150 ease-in"
              leave-from-class="opacity-100 max-h-96"
              leave-to-class="opacity-0 max-h-0"
            >
              <div
                v-if="expandedJob === job.title"
                class="px-6 pb-6 border-t border-white/5"
              >
                <p class="text-gray-400 mt-4">{{ job.description }}</p>

                <h4 class="text-white font-semibold mt-4 mb-2">
                  Responsibilities:
                </h4>
                <ul class="space-y-2">
                  <li
                    v-for="resp in job.responsibilities"
                    :key="resp"
                    class="flex items-start gap-2 text-gray-400 text-sm"
                  >
                    <span class="text-[#d4a574]">•</span>
                    {{ resp }}
                  </li>
                </ul>

                <NuxtLink
                  to="/careers/apply"
                  class="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-gradient-to-r from-[#d4a574] to-[#b8956e] text-[#0a0a0a] font-semibold rounded-full hover:shadow-lg hover:shadow-[#d4a574]/30 transition-all"
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
            </Transition>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="relative py-24">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="font-display text-3xl font-bold mb-6">
          Don't See a Matching Role?
        </h2>
        <p class="text-gray-400 mb-8">
          We're always interested in meeting talented people. Send us your resume and we'll keep you in mind for future opportunities.
        </p>
        <NuxtLink
          to="/careers/apply"
          class="inline-flex items-center gap-2 px-8 py-4 border border-[#d4a574]/30 text-[#d4a574] font-semibold rounded-full hover:bg-[#d4a574]/10 transition-colors"
        >
          Submit General Application
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

