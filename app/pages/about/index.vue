<script setup lang="ts">
useSeoMeta({
  title: 'About Us | LTHS - Lifetime Hospitality Services',
  description:
    'Learn about LTHS - Your trusted hospitality partner since 2016. Discover our story, leadership, and commitment to excellence.',
})

const highlights = [
  {
    icon: 'i-heroicons-cursor-arrow-rays',
    title: 'Our Mission',
    description:
      'To deliver exceptional hospitality services that transform environments and exceed expectations.',
  },
  {
    icon: 'i-heroicons-eye',
    title: 'Our Vision',
    description:
      'To be the most trusted hospitality brand globally, known for innovation and excellence.',
  },
  {
    icon: 'i-heroicons-sparkles',
    title: 'Our Values',
    description:
      'Integrity, excellence, innovation, and a commitment to our clients and communities.',
  },
]

const timeline = [
  {
    year: '2016',
    title: 'LTHS Founded',
    description:
      'Established in Talegaon, Pune with a vision to revolutionize hospitality services.',
  },
  {
    year: '2018',
    title: 'Expanding Services',
    description:
      'Added catering, security, and maintenance services to our portfolio.',
  },
  {
    year: '2020',
    title: 'Major Partnerships',
    description: 'Partnered with TE Connectivity and other leading companies.',
  },
  {
    year: '2023',
    title: 'Growing Strong',
    description:
      'Expanded team to 500+ professionals serving 50+ corporate clients.',
  },
]
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="relative pt-32 pb-20 overflow-hidden">
      <div class="absolute inset-0 animated-gradient"></div>
      <div class="absolute top-40 right-20 w-96 h-96 decorative-blob rounded-full blur-3xl"></div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl">
          <span
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0 }"
            class="inline-block text-brand font-medium uppercase tracking-widest text-sm mb-4"
          >About LTHS</span>
          <h1
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 100 } }"
            class="font-display text-5xl md:text-6xl font-bold mb-6 text-theme-heading"
          >
            Building Trust Through
            <span class="gradient-text">Excellence</span>
          </h1>
          <p
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 200 } }"
            class="text-xl text-theme-secondary leading-relaxed"
          >
            Since 2016, Lifetime Hospitality Services has been transforming
            spaces and delivering exceptional service across Pune and beyond.
          </p>
        </div>
      </div>
    </section>

    <!-- About Navigation Cards -->
    <section class="relative py-12 section-dark">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <NuxtLink
            v-for="(item, index) in [
              {
                title: 'Our Story',
                desc: 'The journey that shaped us',
                href: '/about/our-story',
                icon: 'i-heroicons-book-open',
              },
              {
                title: 'Leadership',
                desc: 'Meet our team',
                href: '/about/leadership',
                icon: 'i-heroicons-user-group',
              },
              {
                title: 'Mission & Vision',
                desc: 'What drives us',
                href: '/about/mission-vision',
                icon: 'i-heroicons-cursor-arrow-rays',
              },
              {
                title: 'Why Choose Us',
                desc: 'Our differentiators',
                href: '/about/why-choose-us',
                icon: 'i-heroicons-star',
              },
            ]"
            :key="item.title"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: index * 100 } }"
            :to="item.href"
            class="group p-6 rounded-2xl card-gradient hover:border-brand-30 transition-all duration-300 hover-lift"
            :data-testid="`about-nav-${item.title.toLowerCase().replace(/\s+/g, '-')}`"
          >
            <UIcon :name="item.icon" class="w-10 h-10 mb-4 text-brand" />
            <h3 class="font-display text-xl font-semibold text-theme-heading group-hover:text-brand transition-colors">
              {{ item.title }}
            </h3>
            <p class="text-theme-muted text-sm mt-2">{{ item.desc }}</p>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <section class="relative py-24 section-gradient">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <!-- Image Placeholder -->
          <div class="relative">
            <div class="aspect-[4/3] rounded-3xl image-placeholder flex items-center justify-center">
              <div class="text-center">
                <img src="/success_story_image.png" alt="About Image" class="w-full h-full object-cover rounded-3xl">
              </div>
            </div>
            <div class="absolute -bottom-8 -right-8 glass rounded-2xl p-6 shadow-2xl">
              <p class="text-3xl font-bold gradient-text">8+</p>
              <p class="text-theme-secondary text-sm">Years of Excellence</p>
            </div>
          </div>

          <!-- Content -->
          <div>
            <h2 class="font-display text-4xl font-bold mb-6 text-theme-heading">
              Who We <span class="gradient-text">Are</span>
            </h2>
            <div class="space-y-4 text-theme-secondary leading-relaxed">
              <p>
                Lifetime Hospitality Services (LTHS) established in the year
                2016 having its registered office at Talegaon, Pune are working
                in the field of hospitality services and have been successful to
                cope ourselves in the current market situation.
              </p>
              <p>
                We are glad to inform that we have been able to introduce
                various services in the hospitality sector in such short span of
                time and will look forward to introduce more products in near
                future to our clients.
              </p>
              <p>
                We, LTHS are truly a service provider, which operates with its
                own resources and infrastructure in our states with complete
                expertise in the hospitality services. Our distinguished list of
                clients across industries speaks about our credentials and
                capabilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Highlights Section -->
    <section class="relative py-24 section-dark">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-3 gap-8">
          <div
            v-for="(item, index) in highlights"
            :key="item.title"
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :visible="{ opacity: 1, y: 0, transition: { delay: index * 100 } }"
            class="text-center p-8 rounded-3xl card-gradient"
          >
            <div class="w-20 h-20 mx-auto rounded-2xl icon-box flex items-center justify-center mb-6">
              <UIcon :name="item.icon" class="w-10 h-10" />
            </div>
            <h3 class="font-display text-2xl font-semibold text-theme-heading mb-4">
              {{ item.title }}
            </h3>
            <p class="text-theme-secondary">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Timeline -->
    <section class="relative py-24 section-gradient">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="font-display text-4xl font-bold text-theme-heading">
            Our <span class="gradient-text">Journey</span>
          </h2>
        </div>

        <div class="relative">
          <!-- Timeline Line -->
          <div class="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-secondary-500 via-secondary-500/50 to-transparent"></div>

          <div class="flex flex-col gap-12">
            <div
              v-for="(item, index) in timeline"
              :key="item.year"
              v-motion
              :initial="{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }"
              :visible="{ opacity: 1, x: 0, transition: { delay: index * 150 } }"
              class="relative flex items-center"
              :class="index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'"
            >
              <div class="flex-1 hidden md:block"></div>

              <!-- Dot -->
              <div class="absolute left-8 md:left-1/2 w-4 h-4 -translate-x-1/2 rounded-full bg-brand z-10"></div>

              <!-- Content -->
              <div
                class="flex-1 ml-16 md:ml-0 p-6 rounded-2xl card-gradient"
                :class="index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'"
              >
                <span class="text-brand font-bold text-lg">{{ item.year }}</span>
                <h3 class="font-display text-xl font-semibold text-theme-heading mt-2">
                  {{ item.title }}
                </h3>
                <p class="text-theme-secondary text-sm mt-2">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="relative py-24 section-dark">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="font-display text-4xl font-bold mb-6 text-theme-heading">
          Ready to Work <span class="gradient-text">Together?</span>
        </h2>
        <p class="text-theme-secondary text-lg mb-8">
          Let us bring our expertise to your organization. Contact us today for
          a free consultation.
        </p>
        <NuxtLink
          to="/contact"
          class="inline-flex items-center gap-3 px-8 py-4 btn-primary rounded-full"
          data-testid="about-cta"
        >
          Get in Touch
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
