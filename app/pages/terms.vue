<script setup lang="ts">
useSeoMeta({
  title: 'Terms of Service | LTHS - Lifetime Hospitality Services',
  description:
    'Read our Terms of Service to understand the rules and guidelines for using LTHS services. Learn about our service agreements, liabilities, and user responsibilities.',
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
          >Terms of Service</span>
          <h1
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 100 } }"
            class="font-display text-5xl md:text-6xl font-bold mb-6 text-theme-heading"
          >
            Terms of
            <span class="gradient-text">Service</span>
          </h1>
          <p
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 200 } }"
            class="text-xl text-theme-secondary leading-relaxed"
          >
            Clear terms and conditions for our professional hospitality services.
          </p>
        </div>
      </div>
    </section>

    <!-- Terms of Service Content -->
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
              <h2 class="font-display text-3xl font-bold text-theme-heading mb-4">Acceptance of Terms</h2>
              <p>
                By accessing and using Lifetime Hospitality Services (LTHS), you accept and agree to be bound by
                the terms and provision of this agreement. If you do not agree to abide by the above,
                please do not use this service.
              </p>
            </div>

            <div>
              <h2 class="font-display text-3xl font-bold text-theme-heading mb-4">Service Description</h2>
              <p>
                LTHS provides comprehensive hospitality and facility management services including but not limited to:
              </p>
              <ul class="list-disc list-inside space-y-2 mt-4">
                <li>Patient Care Services</li>
                <li>Housekeeping and Maintenance</li>
                <li>Horticulture Services</li>
                <li>Catering Services</li>
                <li>Office Support Services</li>
                <li>Security Services</li>
                <li>Labor Supply</li>
                <li>Pantry Services</li>
              </ul>
            </div>

            <div>
              <h2 class="font-display text-3xl font-bold text-theme-heading mb-4">Service Agreement</h2>
              <p>
                All services are provided subject to a formal service agreement that outlines:
              </p>
              <ul class="list-disc list-inside space-y-2 mt-4">
                <li>Scope of services and deliverables</li>
                <li>Service levels and performance standards</li>
                <li>Pricing and payment terms</li>
                <li>Contract duration and termination conditions</li>
                <li>Quality assurance and monitoring procedures</li>
                <li>Confidentiality and data protection requirements</li>
              </ul>
            </div>

            <div>
              <h2 class="font-display text-3xl font-bold text-theme-heading mb-4">User Responsibilities</h2>
              <p>
                Clients agree to:
              </p>
              <ul class="list-disc list-inside space-y-2 mt-4">
                <li>Provide accurate and complete information</li>
                <li>Ensure access to facilities for service delivery</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Make timely payments as per agreed terms</li>
                <li>Cooperate with LTHS staff and management</li>
                <li>Report any concerns or issues promptly</li>
              </ul>
            </div>

            <div>
              <h2 class="font-display text-3xl font-bold text-theme-heading mb-4">Payment Terms</h2>
              <p>
                Payment terms are specified in individual service agreements. Generally:
              </p>
              <ul class="list-disc list-inside space-y-2 mt-4">
                <li>Invoices are issued monthly or as agreed</li>
                <li>Payment is due within 30 days of invoice date</li>
                <li>Late payments may incur interest charges</li>
                <li>Services may be suspended for non-payment</li>
              </ul>
            </div>

            <div>
              <h2 class="font-display text-3xl font-bold text-theme-heading mb-4">Quality Standards</h2>
              <p>
                LTHS is committed to maintaining high quality standards:
              </p>
              <ul class="list-disc list-inside space-y-2 mt-4">
                <li>Regular quality audits and assessments</li>
                <li>Staff training and certification programs</li>
                <li>Compliance with industry standards and regulations</li>
                <li>Continuous improvement initiatives</li>
                <li>Client feedback and satisfaction monitoring</li>
              </ul>
            </div>

            <div>
              <h2 class="font-display text-3xl font-bold text-theme-heading mb-4">Limitation of Liability</h2>
              <p>
                LTHS's liability is limited to the extent permitted by applicable law. We shall not be liable for:
              </p>
              <ul class="list-disc list-inside space-y-2 mt-4">
                <li>Indirect or consequential losses</li>
                <li>Loss of profits or business opportunities</li>
                <li>Damage to reputation or goodwill</li>
                <li>Losses arising from third-party actions</li>
              </ul>
            </div>

            <div>
              <h2 class="font-display text-3xl font-bold text-theme-heading mb-4">Termination</h2>
              <p>
                Either party may terminate services with appropriate notice as specified in the service agreement.
                LTHS reserves the right to terminate services immediately for breach of terms or non-payment.
              </p>
            </div>

            <div>
              <h2 class="font-display text-3xl font-bold text-theme-heading mb-4">Governing Law</h2>
              <p>
                These terms are governed by the laws of India. Any disputes shall be subject to the exclusive
                jurisdiction of the courts in Pune, Maharashtra.
              </p>
            </div>

            <div>
              <h2 class="font-display text-3xl font-bold text-theme-heading mb-4">Contact Information</h2>
              <p>
                For questions about these Terms of Service, please contact us:
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
              <h2 class="font-display text-3xl font-bold text-theme-heading mb-4">Updates to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. Changes will be effective immediately
                upon posting on our website. Continued use of our services constitutes acceptance of updated terms.
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