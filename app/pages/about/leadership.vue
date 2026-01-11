<script setup lang="ts">
useSeoMeta({
  title: 'Leadership Team | LTHS - Lifetime Hospitality Services',
  description:
    'Meet the visionary leaders driving LTHS forward. Our experienced team brings decades of hospitality expertise.',
})

const leaders = [
  {
    name: 'Mr. Vishal Londhe',
    role: 'Owner',
    // qualification: '3-Year Diploma in Hotel Management (Pune University)',
    experience: '20+ years in facility & hospitality management',
    bio: 'An experienced Operations Manager with a proven track record of optimizing processes, reducing costs, and driving operational excellence. With over 20 years in the hospitality and facility management industry, Mr. Londhe has led teams of 550+ professionals and managed multi-site operations across healthcare, corporate, and hospitality sectors. His expertise spans strategic planning, staff development, client relationship management, and ensuring compliance with labor laws, safety norms, and environmental regulations. Previously holding leadership positions at Unify Facility Management, SMS Integrated Facility Services, and other renowned hospitality companies, he brings invaluable experience in business development, budgeting, and service delivery optimization.',
    image: 'https://gayoqnznilzdyltepowm.supabase.co/storage/v1/object/sign/lifetime-assets/vishal_londhe_pic.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xOTQ0OTI5Yy1jYTE1LTQ0MDctOWJlYS1jMjgyODM5ZTcyNzUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsaWZldGltZS1hc3NldHMvdmlzaGFsX2xvbmRoZV9waWMucG5nIiwiaWF0IjoxNzY4MDQyOTI0LCJleHAiOjEwNDc0Mzk2MDU4NzAxMjR9.Qj_OMYS1dcBm7en4gzFHJNRk5ckXxr6Vb5kIBk4KQGo',
    contact: {
      phone: '+918320140215',
      email: 'londhe.vishal20@gmail.com',
    },
    highlights: [
      'Leadership & Strategic Planning',
      'Team Management (550+ staff)',
      'Process Improvement & Cost Optimization',
      'Client Relationship Management',
      'Compliance & Safety Standards',
    ],
    linkedIn: 'https://www.linkedin.com/in/vishal-londhe-2b471a130/'
  },
  {
    name: 'Mr. Anoop Mishra',
    role: 'Co-Founder',
    // qualification: 'Bachelor of Arts (Shri Vishwanath PG College, Jaunpur UP)',
    experience: '10+ years in hospitality & facility management',
    bio: 'An accomplished Operations Manager with expertise in optimizing processes, reducing costs, and improving operational efficiency. With over a decade of experience across hospitality and healthcare sectors, Mr. Mishra has successfully led teams of 400+ professionals and managed end-to-end operations including billing, vendor coordination, and staff development. His career spans leadership roles at Unify Facility Management, Express Hospitality, and Zydus Hospital, where he excelled in client relationship management, business development, and ensuring compliance with labor laws and safety standards. His strong communication skills and decision-making abilities have consistently driven operational excellence.',
    image: 'https://gayoqnznilzdyltepowm.supabase.co/storage/v1/object/sign/lifetime-assets/anoop%20picture.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xOTQ0OTI5Yy1jYTE1LTQ0MDctOWJlYS1jMjgyODM5ZTcyNzUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsaWZldGltZS1hc3NldHMvYW5vb3AgcGljdHVyZS5wbmciLCJpYXQiOjE3NjgwNDI3MTgsImV4cCI6NDYyNzM2MzMxMTh9.XibE6OPcEcgU2teRIB5mtaJ_F95yo6OErsMP9PkqqvY',
    contact: {
      phone: '+918320140215',
      email: 'anuphsd@gmail.com',
    },
    highlights: [
      'Leadership & Staff Development',
      'Team Management (400+ staff)',
      'Business Development',
      'Financial & Store Management',
      'Process Improvement',
    ],
    linkedIn: 'https://www.linkedin.com/in/anoop-mishra-lths/'
  },
]

const coreValues = [
  {
    icon: 'i-heroicons-cursor-arrow-rays',
    title: 'Strategic Vision',
    description: 'Long-term planning and foresight in every decision.',
  },
  {
    icon: 'i-heroicons-hand-raised',
    title: 'Client Partnership',
    description: 'Building lasting relationships through trust and delivery.',
  },
  {
    icon: 'i-heroicons-light-bulb',
    title: 'Innovation',
    description: 'Constantly evolving to meet changing industry needs.',
  },
  {
    icon: 'i-heroicons-user-group',
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
          class="inline-flex items-center gap-2 text-theme-secondary hover:text-brand transition-colors mb-8"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          Back to About
        </NuxtLink>

        <div class="max-w-3xl">
          <span class="text-brand font-medium uppercase tracking-widest text-sm">Leadership</span>
          <h1 class="font-display text-5xl md:text-6xl font-bold mt-4 mb-6 text-theme-heading">
            Meet Our
            <span class="gradient-text">Leaders</span>
          </h1>
          <p class="text-xl text-theme-secondary leading-relaxed">
            Visionary leadership driving excellence in every service we provide.
          </p>
        </div>
      </div>
    </section>

    <!-- Leadership Team -->
    <section class="relative py-24 section-gradient">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          v-for="(leader, index) in leaders"
          :key="leader.name"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible="{ opacity: 1, y: 0, transition: { delay: index * 100 } }"
          class="grid lg:grid-cols-2 gap-24 items-center mt-6"
        >
          <!-- Image -->
          <div class="relative">
            <div class="aspect-[3/4] rounded-3xl overflow-hidden">
              <img 
                v-if="leader.image" 
                :src="leader.image" 
                :alt="leader.name"
                class="w-full h-full object-cover"
              >
              <div v-else class="w-full h-full image-placeholder flex items-center justify-center">
                <div class="text-center">
                  <div class="w-32 h-32 mx-auto rounded-full gradient-secondary flex items-center justify-center text-5xl font-display font-bold mb-4">
                    <span class="text-white dark:text-black">{{ leader.name.split(' ').map(n => n[0]).join('').slice(0, 2) }}</span>
                  </div>
                  <p class="text-theme-muted">Photo Placeholder</p>
                </div>
              </div>
            </div>

            <!-- Decorative Elements -->
            <div class="absolute -top-4 -right-4 w-24 h-24 border-2 border-brand-30 rounded-3xl"></div>
            <div class="absolute -bottom-4 -left-4 w-24 h-24 bg-brand-10 rounded-3xl"></div>
          </div>

          <!-- Content -->
          <div>
            <span class="inline-block px-4 py-2 bg-brand-10 text-brand text-sm font-medium rounded-full mb-6">{{ leader.role }}</span>
            <h2 class="font-display text-4xl font-bold text-theme-heading mb-4">
              {{ leader.name }}
            </h2>
            <p class="text-theme-secondary leading-relaxed text-lg mb-8">
              {{ leader.bio }}
            </p>

            <!-- Experience Badge -->
            <div class="flex flex-wrap gap-4 mb-8">
              <div class="flex items-center gap-3 px-4 py-3 rounded-xl card-gradient">
                <svg class="w-5 h-5 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span class="text-theme-secondary">{{ leader.experience }}</span>
              </div>
            </div>

            <!-- Highlights -->
            <div v-if="leader.highlights" class="mb-8">
              <h3 class="text-sm font-medium text-theme-muted uppercase tracking-widest mb-4">Key Strengths</h3>
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="highlight in leader.highlights" 
                  :key="highlight"
                  class="px-3 py-1.5 text-sm rounded-full bg-brand-10 text-brand border border-brand-20"
                >
                  {{ highlight }}
                </span>
              </div>
            </div>

            <!-- Contact Info -->
            <div v-if="leader.contact" class="flex flex-wrap gap-4">
              <a 
                v-if="leader.contact.phone"
                :href="`tel:${leader.contact.phone}`"
                class="flex items-center gap-2 text-theme-secondary hover:text-brand transition-colors"
                :data-testid="`leader-phone-${leader.name.toLowerCase().replace(/\s+/g, '-')}`"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {{ leader.contact.phone }}
              </a>
              <a 
                v-if="leader.contact.email"
                :href="`mailto:${leader.contact.email}`"
                class="flex items-center gap-2 text-theme-secondary hover:text-brand transition-colors"
                :data-testid="`leader-email-${leader.name.toLowerCase().replace(/\s+/g, '-')}`"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {{ leader.contact.email }}
              </a>
              <a 
                v-if="leader.linkedIn"
                :href="leader.linkedIn"
                class="flex items-center gap-2 text-theme-secondary hover:text-brand transition-colors"
                :data-testid="`leader-linkedin-${leader.name.toLowerCase().replace(/\s+/g, '-')}`"
              >
                <!-- LinkedIn Icon SVG -->
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.3c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 11.3h-3v-5.6c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96v5.7h-3v-10h2.89v1.36h.04c.4-.76 1.39-1.56 2.87-1.56 3.07 0 3.64 2.02 3.64 4.65v5.55z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Leadership Philosophy -->
    <section class="relative py-24 section-dark">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="font-display text-4xl font-bold mb-6 text-theme-heading">
            Leadership <span class="gradient-text">Philosophy</span>
          </h2>
          <p class="text-theme-secondary text-lg">
            Our leadership approach is built on four key pillars that guide every decision and action.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="(value, index) in coreValues"
            :key="value.title"
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :visible="{ opacity: 1, y: 0, transition: { delay: index * 100 } }"
            class="p-6 rounded-2xl card-gradient hover:border-brand-30 transition-all duration-300"
          >
            <UIcon :name="value.icon" class="w-10 h-10 mb-4 text-brand" />
            <h3 class="font-display text-xl font-semibold text-theme-heading mb-2">
              {{ value.title }}
            </h3>
            <p class="text-theme-muted text-sm">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Join Team CTA -->
    <!-- <section class="relative py-24 section-gradient">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="font-display text-4xl font-bold mb-6 text-theme-heading">
          Join Our <span class="gradient-text">Team</span>
        </h2>
        <p class="text-theme-secondary text-lg mb-8">
          Be part of a dynamic team that's shaping the future of hospitality services.
        </p>
        <NuxtLink
          to="/careers"
          class="inline-flex items-center gap-3 px-8 py-4 btn-primary rounded-full"
          data-testid="join-team-cta"
        >
          View Careers
        </NuxtLink>
      </div>
    </section> -->
  </div>
</template>
