<script setup lang="ts">
useSeoMeta({
  title: 'Privacy Policy | LTHS - Lifetime Hospitality Services',
  description:
    'Learn about how LTHS collects, uses, and protects your personal information. Our privacy policy outlines our commitment to data protection and user privacy.',
})
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
          >Privacy Policy</span>
          <h1
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 100 } }"
            class="font-display text-2xl md:text-6xl font-bold mb-6 text-theme-heading"
          >
            Your Privacy
            <span class="gradient-text">Matters</span>
          </h1>
          <p
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 200 } }"
            class="text-xl text-theme-secondary leading-relaxed"
          >
            We are committed to protecting your personal information and being transparent about our data practices.
          </p>
        </div>
      </div>
    </section>

    <!-- Privacy Policy Content -->
    <section class="relative py-24 section-dark">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible="{ opacity: 1, y: 0 }"
          class="prose prose-lg prose-invert max-w-none"
        >
          <div class="text-theme-secondary space-y-8">

            <div>
              <h2 class="font-display text-3xl font-bold text-theme-heading mb-4">Information We Collect</h2>
              <p>
                We collect information you provide directly to us, such as when you contact us through our website,
                request a quote, or communicate with us. This may include your name, email address, phone number,
                company information, and details about your service requirements.
              </p>
            </div>

            <div>
              <h2 class="font-display text-3xl font-bold text-theme-heading mb-4">How We Use Your Information</h2>
              <p>
                We use the information we collect to:
              </p>
              <ul class="list-disc list-inside space-y-2 mt-4">
                <li>Provide and improve our services</li>
                <li>Respond to your inquiries and requests</li>
                <li>Send you relevant information about our services</li>
                <li>Comply with legal obligations</li>
                <li>Protect our rights and prevent fraud</li>
              </ul>
            </div>

            <div>
              <h2 class="font-display text-3xl font-bold text-theme-heading mb-4">Information Sharing</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may share your
                information only in the following circumstances:
              </p>
              <ul class="list-disc list-inside space-y-2 mt-4">
                <li>With your explicit consent</li>
                <li>To comply with legal requirements</li>
                <li>To protect our rights and safety</li>
                <li>With trusted service providers who assist our operations (under strict confidentiality agreements)</li>
              </ul>
            </div>

            <div>
              <h2 class="font-display text-3xl font-bold text-theme-heading mb-4">Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information
                against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission
                over the internet is 100% secure.
              </p>
            </div>

            <div>
              <h2 class="font-display text-3xl font-bold text-theme-heading mb-4">Your Rights</h2>
              <p>
                You have the right to:
              </p>
              <ul class="list-disc list-inside space-y-2 mt-4">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Object to or restrict processing of your information</li>
                <li>Data portability</li>
              </ul>
            </div>

            <div>
              <h2 class="font-display text-3xl font-bold text-theme-heading mb-4">Cookies</h2>
              <p>
                Our website may use cookies and similar technologies to enhance your browsing experience,
                analyze site traffic, and personalize content. You can control cookie settings through your browser.
              </p>
            </div>

            <div>
              <h2 class="font-display text-3xl font-bold text-theme-heading mb-4">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <div class="mt-4 p-6 rounded-xl bg-theme-surface border border-theme-border">
                <p class="font-semibold text-theme-heading">Lifetime Hospitality Services</p>
                <p class="text-theme-secondary">B-609, Ayush Park, 2, Varale Phata</p>
                <p class="text-theme-secondary">Talegaon Dabhade, Pune – 410507</p>
                <p class="text-theme-secondary">Email: <a href="mailto:anup@lifetimehospitality.in" class="text-brand hover:underline">anup@lifetimehospitality.in</a></p>
                <p class="text-theme-secondary">Phone: <a href="tel:+918320140215" class="text-brand hover:underline">+918320140215</a></p>
              </div>
            </div>

            <div>
              <h2 class="font-display text-3xl font-bold text-theme-heading mb-4">Updates to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any significant changes
                by posting the new policy on this page and updating the effective date.
              </p>
              <p class="mt-4 text-sm text-theme-muted">
                Last updated: January 10, 2026
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  </div>
</template>