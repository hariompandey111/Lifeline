<script setup lang="ts">
useSeoMeta({
  title: 'Success Stories | LTHS - Lifetime Hospitality Services',
  description:
    'Read testimonials and success stories from our valued clients.',
})

const stories = [
  {
    quote: 'LTHS has been an invaluable partner for our facility management needs. Their professionalism and attention to detail have made a significant difference in our workplace environment.',
    author: 'Facility Director',
    company: 'TE Connectivity',
    location: 'Wagholi, Pune',
    rating: 5,
  },
  {
    quote: 'We\'ve worked with several hospitality service providers, but LTHS stands out for their reliability and quality. Their team truly understands our needs.',
    author: 'Operations Manager',
    company: 'Forbes Marshall',
    location: 'Pimpri, Pune',
    rating: 5,
  },
  {
    quote: 'The housekeeping team from LTHS maintains our facility to the highest standards. We\'ve seen a marked improvement in cleanliness since they took over.',
    author: 'Admin Head',
    company: 'Manufacturing Client',
    location: 'Chakan, Pune',
    rating: 5,
  },
  {
    quote: 'Professional, punctual, and proactive - these three words define the LTHS team. They\'ve exceeded our expectations consistently.',
    author: 'HR Manager',
    company: 'Corporate Client',
    location: 'Pune',
    rating: 5,
  },
  {
    quote: 'The patient care services provided by LTHS are compassionate and professional. Our healthcare facility has benefited greatly from their expertise.',
    author: 'Hospital Administrator',
    company: 'Healthcare Facility',
    location: 'Pune Region',
    rating: 5,
  },
  {
    quote: 'LTHS\'s security team is well-trained and vigilant. We feel confident knowing our premises are in safe hands.',
    author: 'Security Manager',
    company: 'Industrial Client',
    location: 'Talegaon, Pune',
    rating: 5,
  },
]

const highlights = [
  { value: '95%', label: 'Client Retention Rate' },
  { value: '4.8/5', label: 'Average Client Rating' },
  { value: '50+', label: 'Happy Clients' },
  { value: '100%', label: 'Commitment to Excellence' },
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
            Success <span class="gradient-text">Stories</span>
          </h1>
          <p class="text-xl text-theme-secondary leading-relaxed">
            Hear from our clients about their experience working with LTHS.
          </p>
        </div>
      </div>
    </section>

    <!-- Highlights -->
    <section class="relative py-12 section-dark">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div
            v-for="(stat, index) in highlights"
            :key="stat.label"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visible="{ opacity: 1, y: 0, transition: { delay: index * 100 } }"
            class="text-center"
          >
            <p class="font-display text-4xl font-bold gradient-text">
              {{ stat.value }}
            </p>
            <p class="text-theme-muted text-sm mt-2">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Grid -->
    <section class="relative py-24 section-gradient">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(story, index) in stories"
            :key="index"
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :visible="{ opacity: 1, y: 0, transition: { delay: index * 80 } }"
            class="p-8 rounded-3xl card-gradient hover:border-brand-30 transition-colors"
          >
            <!-- Rating -->
            <div class="flex gap-1 mb-4">
              <span
                v-for="i in story.rating"
                :key="i"
                class="text-brand"
              >
                ⭐
              </span>
            </div>

            <!-- Quote -->
            <svg class="w-8 h-8 text-brand-20 mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>

            <p class="text-theme-secondary leading-relaxed mb-6">
              "{{ story.quote }}"
            </p>

            <!-- Author -->
            <div class="pt-4 border-t border-theme">
              <p class="font-semibold text-theme-heading">{{ story.author }}</p>
              <p class="text-brand text-sm">{{ story.company }}</p>
              <p class="text-theme-muted text-xs mt-1">{{ story.location }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Video Testimonial Placeholder -->
    <!-- <section class="relative py-24 section-dark">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="font-display text-4xl font-bold text-theme-heading">
            Video <span class="gradient-text">Testimonials</span>
          </h2>
        </div>

        <div class="aspect-video rounded-3xl image-placeholder flex items-center justify-center">
          <div class="text-center">
            <div class="w-20 h-20 mx-auto mb-4 rounded-full icon-box flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
              <svg class="w-10 h-10 text-brand" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <p class="text-theme-muted">Client Testimonial Video</p>
          </div>
        </div>
      </div>
    </section> -->

    <!-- CTA -->
    <section class="relative py-24 section-gradient">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="font-display text-4xl font-bold mb-6 text-theme-heading">
          Experience the <span class="gradient-text">LTHS Difference</span>
        </h2>
        <p class="text-theme-secondary text-lg mb-8">
          Join our growing family of satisfied clients.
        </p>
        <NuxtLink
          to="/contact"
          class="inline-flex items-center gap-3 px-8 py-4 btn-primary rounded-full"
        >
          Get in Touch
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
