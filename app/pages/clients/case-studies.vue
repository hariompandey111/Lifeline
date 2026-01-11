<script setup lang="ts">
useSeoMeta({
  title: 'Case Studies | LTHS - Lifetime Hospitality Services',
  description:
    'Real success stories from our clients. See how LTHS has transformed facilities across industries.',
})

const caseStudies = [
  {
    title: 'TE Connectivity - Complete Facility Management',
    client: 'TE Connectivity',
    location: 'Wagholi, Pune',
    industry: 'Electronics Manufacturing',
    challenge: 'Managing a large manufacturing facility with strict cleanliness and security requirements.',
    solution: 'Deployed a comprehensive team covering housekeeping, security, and catering services with 24/7 coverage.',
    results: [
      '99.5% uptime in facility cleanliness',
      'Zero security incidents in 2 years',
      'High employee satisfaction scores',
    ],
    services: ['Housekeeping', 'Security', 'Catering'],
    image: 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_940/https://tnetsglobal.com/wp-content/uploads/2024/08/9d711896-e6d9-42cf-b7ee-b27e1f9fd7f3_0-jpg-940x470.webp',
  },
  {
    title: 'Forbes Marshall - Multi-Site Management',
    client: 'Forbes Marshall',
    location: 'Chakan & Pimpri, Pune',
    industry: 'Steam Engineering',
    challenge: 'Coordinating consistent service quality across multiple locations.',
    solution: 'Implemented standardized processes and deployed dedicated supervisors at each site.',
    results: [
      'Consistent quality across all locations',
      '30% improvement in service efficiency',
      'Seamless coordination between sites',
    ],
    services: ['Housekeeping', 'Pantry', 'Security'],
    image: 'https://www.puneinsight.com/wp-content/uploads/2020/04/forbesmarshall-forbesmarshall.jpg',
  },
  {
    title: 'Thyssenkrupp - Industrial Facility Services',
    client: 'Thyssenkrupp',
    location: 'Chakan, Pune',
    industry: 'Industrial Manufacturing',
    challenge: 'Managing housekeeping in a heavy industrial environment with specialized cleaning needs.',
    solution: 'Trained staff on industrial cleaning protocols and deployed specialized equipment.',
    results: [
      'Met industrial hygiene standards',
      'Reduced cleaning time by 25%',
      'Improved workplace safety scores',
    ],
    services: ['Housekeeping', 'Labour Supply', 'Maintenance'],
    image: 'https://www.reuters.com/resizer/v2/JTJMDB5HNVO27HLQIXGALSTV4I.jpg?auth=6dd87ed7c721781a44000fbe82af04d71808efcc17f5ddaf19945411a3a6c0a2&width=640&quality=80',
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
          to="/clients"
          class="inline-flex items-center gap-2 text-theme-secondary hover:text-brand transition-colors mb-8"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Clients
        </NuxtLink>

        <div class="max-w-3xl">
          <h1 class="font-display text-5xl md:text-6xl font-bold mb-6 text-theme-heading">
            Case <span class="gradient-text">Studies</span>
          </h1>
          <p class="text-xl text-theme-secondary leading-relaxed">
            Real-world examples of how LTHS has helped organizations transform their facilities.
          </p>
        </div>
      </div>
    </section>

    <!-- Case Studies -->
    <section class="relative py-24 section-dark">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="space-y-16">
          <div
            v-for="(study, index) in caseStudies"
            :key="study.title"
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :visible="{ opacity: 1, y: 0, transition: { delay: index * 100 } }"
            class="p-8 rounded-3xl card-gradient"
          >
            <!-- Header -->
            <div class="flex flex-wrap gap-4 mb-6">
              <span class="px-4 py-2 text-sm font-medium text-brand bg-brand-10 rounded-full">
                {{ study.industry }}
              </span>
              <span class="px-4 py-2 text-sm text-theme-secondary card-gradient rounded-full">
                {{ study.location }}
              </span>
            </div>

            <h2 class="font-display text-2xl md:text-3xl font-bold text-theme-heading mb-4">
              {{ study.title }}
            </h2>

            <!-- Image Placeholder -->
            <div class="aspect-video rounded-2xl image-placeholder flex items-center justify-center mb-8">
              <div class="text-center">
                <img :src="study.image || ''" alt="Case Study Image" class="w-full h-full object-cover rounded-2xl">
              </div>
            </div>

            <!-- Details -->
            <div class="grid md:grid-cols-3 gap-8">
              <div>
                <h3 class="text-brand font-semibold mb-2">Challenge</h3>
                <p class="text-theme-secondary text-sm">{{ study.challenge }}</p>
              </div>
              <div>
                <h3 class="text-brand font-semibold mb-2">Solution</h3>
                <p class="text-theme-secondary text-sm">{{ study.solution }}</p>
              </div>
              <div>
                <h3 class="text-brand font-semibold mb-2">Results</h3>
                <ul class="space-y-1">
                  <li
                    v-for="result in study.results"
                    :key="result"
                    class="flex items-start gap-2 text-theme-secondary text-sm"
                  >
                    <span class="text-green-400">✓</span>
                    {{ result }}
                  </li>
                </ul>
              </div>
            </div>

            <!-- Services Used -->
            <div class="mt-6 pt-6 border-t border-theme">
              <span class="text-theme-muted text-sm mr-4">Services:</span>
              <span
                v-for="service in study.services"
                :key="service"
                class="inline-block px-3 py-1 mr-2 mt-2 text-xs text-theme-secondary bg-brand-5 rounded-full"
              >
                {{ service }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="relative py-24 section-gradient">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="font-display text-4xl font-bold mb-6 text-theme-heading">
          Ready to Be Our Next
          <span class="gradient-text">Success Story?</span>
        </h2>
        <p class="text-theme-secondary text-lg mb-8">
          Let's discuss how we can help transform your facility.
        </p>
        <NuxtLink
          to="/contact"
          class="inline-flex items-center gap-3 px-8 py-4 btn-primary rounded-full"
        >
          Get Started
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
