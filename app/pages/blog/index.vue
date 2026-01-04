<script setup lang="ts">
useSeoMeta({
  title: 'Blog & Resources | LTHS - Lifetime Hospitality Services',
  description:
    'Industry insights, tips, and resources from the hospitality experts at LTHS.',
})

const posts = [
  {
    slug: 'importance-of-professional-housekeeping',
    title: 'The Importance of Professional Housekeeping in Corporate Spaces',
    excerpt:
      'Discover how professional housekeeping services can transform your workplace environment and boost employee productivity.',
    category: 'Industry Insights',
    date: 'Jan 15, 2025',
    readTime: '5 min read',
    image: null,
  },
  {
    slug: 'patient-care-best-practices',
    title: 'Best Practices in Patient Care Services',
    excerpt:
      'Learn about the essential elements that make patient care services truly exceptional and compassionate.',
    category: 'Healthcare',
    date: 'Jan 10, 2025',
    readTime: '7 min read',
    image: null,
  },
  {
    slug: 'sustainable-facilities-management',
    title: 'Sustainable Practices in Facilities Management',
    excerpt:
      'How adopting eco-friendly practices in facility management benefits both business and environment.',
    category: 'Sustainability',
    date: 'Jan 5, 2025',
    readTime: '4 min read',
    image: null,
  },
  {
    slug: 'security-trends-2025',
    title: 'Security Trends to Watch in 2025',
    excerpt:
      'Stay ahead with the latest trends in corporate and facility security that are shaping the industry.',
    category: 'Security',
    date: 'Dec 28, 2024',
    readTime: '6 min read',
    image: null,
  },
  {
    slug: 'catering-workplace-wellness',
    title: 'How Catering Services Impact Workplace Wellness',
    excerpt:
      'The connection between quality food services and employee health, satisfaction, and productivity.',
    category: 'Catering',
    date: 'Dec 20, 2024',
    readTime: '5 min read',
    image: null,
  },
  {
    slug: 'choosing-right-facility-partner',
    title: 'How to Choose the Right Facility Management Partner',
    excerpt:
      'Key factors to consider when selecting a hospitality services provider for your organization.',
    category: 'Industry Insights',
    date: 'Dec 15, 2024',
    readTime: '8 min read',
    image: null,
  },
]

const categories = [
  'All',
  'Industry Insights',
  'Healthcare',
  'Sustainability',
  'Security',
  'Catering',
]

const activeCategory = ref('All')

const filteredPosts = computed(() =>
  activeCategory.value === 'All'
    ? posts
    : posts.filter((p) => p.category === activeCategory.value),
)
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
            class="inline-block text-brand font-medium uppercase tracking-widest text-sm mb-4"
          >Blog & Resources</span>
          <h1
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 100 } }"
            class="font-display text-5xl md:text-6xl font-bold mb-6 text-theme-heading"
          >
            Industry
            <span class="gradient-text">Insights</span>
          </h1>
          <p
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 200 } }"
            class="text-xl text-theme-secondary leading-relaxed"
          >
            Expert perspectives, tips, and resources from the hospitality industry.
          </p>
        </div>
      </div>
    </section>

    <!-- Category Filter -->
    <section class="relative py-8 section-dark">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-wrap gap-3">
          <button
            v-for="cat in categories"
            :key="cat"
            class="px-5 py-2 rounded-full text-sm font-medium transition-colors"
            :class="
              activeCategory === cat
                ? 'bg-brand text-white dark:text-black'
                : 'card-gradient text-theme-secondary hover:bg-brand-5'
            "
            :data-testid="`blog-cat-${cat.toLowerCase().replace(/\s+/g, '-')}`"
            @click="activeCategory = cat"
          >
            {{ cat }}
          </button>
        </div>
      </div>
    </section>

    <!-- Blog Posts Grid -->
    <section class="relative py-24 section-gradient">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article
            v-for="(post, index) in filteredPosts"
            :key="post.slug"
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :visible="{ opacity: 1, y: 0, transition: { delay: index * 80 } }"
            class="group rounded-3xl card-gradient hover:border-brand-30 transition-all duration-300 overflow-hidden hover-lift"
          >
            <!-- Image Placeholder -->
            <div class="aspect-video image-placeholder flex items-center justify-center">
              <span class="text-4xl">📰</span>
            </div>

            <!-- Content -->
            <div class="p-6">
              <div class="flex items-center gap-4 mb-4">
                <span class="px-3 py-1 text-xs font-medium text-brand bg-brand-10 rounded-full">
                  {{ post.category }}
                </span>
                <span class="text-theme-muted text-sm">{{ post.readTime }}</span>
              </div>

              <h2 class="font-display text-xl font-semibold text-theme-heading mb-3 group-hover:text-brand transition-colors line-clamp-2">
                {{ post.title }}
              </h2>
              <p class="text-theme-secondary text-sm leading-relaxed mb-4 line-clamp-3">
                {{ post.excerpt }}
              </p>

              <div class="flex items-center justify-between pt-4 border-t border-theme-light">
                <span class="text-theme-muted text-sm">{{ post.date }}</span>
                <span class="inline-flex items-center gap-1 text-brand text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Read More
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Newsletter CTA -->
    <section class="relative py-24 section-dark">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center rounded-3xl card-gradient border-brand-20 p-12">
        <h2 class="font-display text-4xl font-bold mb-6 text-theme-heading">
          Stay <span class="gradient-text">Updated</span>
        </h2>
        <p class="text-theme-secondary text-lg mb-8">
          Subscribe to our newsletter for the latest industry insights and updates.
        </p>
        <form class="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            class="flex-1 px-6 py-4 rounded-full input-field"
            data-testid="newsletter-email"
          />
          <button
            type="submit"
            class="px-8 py-4 btn-primary rounded-full"
            data-testid="newsletter-submit"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  </div>
</template>
