<script setup lang="ts">
const route = useRoute()
const slug = computed(() => route.params.slug as string)

interface ServiceData {
  icon: string
  title: string
  description: string
  longDescription: string
  features: string[]
  benefits: { title: string; description: string }[]
  process: { step: number; title: string; description: string }[]
}

const servicesData: Record<string, ServiceData> = {
  'patient-care': {
    icon: '🏥',
    title: 'Patient Care Services',
    description:
      'Compassionate and professional patient care with trained attendants ensuring comfort and well-being.',
    longDescription:
      'Our Patient Care Services provide comprehensive support for individuals requiring medical or personal assistance. Our trained attendants offer compassionate care while maintaining the highest standards of professionalism and dignity.',
    features: [
      '24/7 Patient Attendants',
      'Trained Nursing Assistants',
      'Medication Reminders',
      'Mobility Assistance',
      'Personal Hygiene Support',
      'Meal Assistance',
      'Companionship Services',
      'Emergency Response',
    ],
    benefits: [
      {
        title: 'Trained Professionals',
        description:
          'All our patient care staff are certified and undergo regular training.',
      },
      {
        title: 'Personalized Care Plans',
        description:
          'We create customized care plans based on individual patient needs.',
      },
      {
        title: 'Family Support',
        description:
          'Regular updates and coordination with family members and medical teams.',
      },
      {
        title: 'Reliable & Compassionate',
        description:
          'Our attendants are selected for their empathy and dedication.',
      },
    ],
    process: [
      {
        step: 1,
        title: 'Assessment',
        description: 'We evaluate patient needs and requirements.',
      },
      {
        step: 2,
        title: 'Care Plan',
        description: 'Develop a customized care plan.',
      },
      {
        step: 3,
        title: 'Staff Assignment',
        description: 'Match the right caregiver to the patient.',
      },
      {
        step: 4,
        title: 'Ongoing Support',
        description: 'Regular monitoring and quality checks.',
      },
    ],
  },
  housekeeping: {
    icon: '✨',
    title: 'Housekeeping Services',
    description:
      'Comprehensive cleaning and maintenance for pristine, hygienic environments.',
    longDescription:
      'Our Housekeeping Services deliver thorough cleaning and maintenance solutions that ensure your facilities remain spotless, hygienic, and professionally maintained at all times.',
    features: [
      'Daily Cleaning & Maintenance',
      'Deep Cleaning Services',
      'Floor Care & Polishing',
      'Washroom Sanitization',
      'Window Cleaning',
      'Waste Management',
      'Specialized Equipment Cleaning',
      'Eco-friendly Products',
    ],
    benefits: [
      {
        title: 'Hygienic Environment',
        description:
          'Maintain health standards with thorough sanitization protocols.',
      },
      {
        title: 'Professional Appearance',
        description:
          'A clean facility reflects your organization\'s professionalism.',
      },
      {
        title: 'Trained Staff',
        description: 'Our team is trained in modern cleaning techniques.',
      },
      {
        title: 'Flexible Scheduling',
        description:
          'Services scheduled around your operations for minimal disruption.',
      },
    ],
    process: [
      {
        step: 1,
        title: 'Site Survey',
        description: 'Assess your facility and requirements.',
      },
      {
        step: 2,
        title: 'Custom Plan',
        description: 'Create a tailored cleaning schedule.',
      },
      {
        step: 3,
        title: 'Team Deployment',
        description: 'Deploy trained housekeeping staff.',
      },
      {
        step: 4,
        title: 'Quality Audits',
        description: 'Regular inspections ensure standards.',
      },
    ],
  },
  horticulture: {
    icon: '🌿',
    title: 'Horticulture Services',
    description:
      'Expert landscaping and garden maintenance for beautiful green spaces.',
    longDescription:
      'Transform your outdoor and indoor spaces with our professional Horticulture Services. From landscaping design to ongoing maintenance, we create and maintain beautiful green environments.',
    features: [
      'Landscape Design',
      'Garden Development',
      'Lawn Maintenance',
      'Plant Care & Pruning',
      'Irrigation Systems',
      'Indoor Plant Services',
      'Seasonal Planting',
      'Pest Management',
    ],
    benefits: [
      {
        title: 'Enhanced Aesthetics',
        description: 'Beautiful landscapes improve your property\'s appeal.',
      },
      {
        title: 'Expert Care',
        description:
          'Our horticulturists bring years of experience and knowledge.',
      },
      {
        title: 'Sustainable Practices',
        description: 'We use eco-friendly methods and native plants.',
      },
      {
        title: 'Complete Solutions',
        description: 'From design to maintenance, we handle everything.',
      },
    ],
    process: [
      {
        step: 1,
        title: 'Consultation',
        description: 'Understand your vision and requirements.',
      },
      {
        step: 2,
        title: 'Design',
        description: 'Create landscape design proposals.',
      },
      {
        step: 3,
        title: 'Implementation',
        description: 'Execute the approved design plan.',
      },
      {
        step: 4,
        title: 'Maintenance',
        description: 'Ongoing care to keep gardens thriving.',
      },
    ],
  },
  catering: {
    icon: '🍽️',
    title: 'Catering Services',
    description:
      'Delicious, nutritious meals with quality ingredients and professional service.',
    longDescription:
      'Our Catering Services provide exceptional food experiences for your organization. From daily canteen operations to special events, we deliver quality cuisine with impeccable service.',
    features: [
      'Corporate Canteen Management',
      'Event Catering',
      'Customized Menus',
      'Multi-cuisine Options',
      'Dietary Accommodations',
      'Hygienic Food Preparation',
      'Professional Service Staff',
      'Quality Ingredients',
    ],
    benefits: [
      {
        title: 'Quality Cuisine',
        description: 'Fresh ingredients and skilled chefs ensure great taste.',
      },
      {
        title: 'Hygiene Standards',
        description: 'FSSAI compliant kitchens and food handling practices.',
      },
      {
        title: 'Menu Variety',
        description: 'Diverse menus catering to all preferences.',
      },
      {
        title: 'Cost Effective',
        description: 'Competitive pricing without compromising quality.',
      },
    ],
    process: [
      {
        step: 1,
        title: 'Menu Planning',
        description: 'Collaborate on menu preferences and dietary needs.',
      },
      {
        step: 2,
        title: 'Setup',
        description: 'Establish kitchen operations and supply chains.',
      },
      {
        step: 3,
        title: 'Service',
        description: 'Daily food preparation and service.',
      },
      {
        step: 4,
        title: 'Feedback Loop',
        description: 'Continuous improvement based on feedback.',
      },
    ],
  },
  'office-support': {
    icon: '💼',
    title: 'Office Support Services',
    description:
      'Efficient administrative and office support to streamline operations.',
    longDescription:
      'Our Office Support Services provide the administrative backbone your organization needs. From reception to documentation, we handle the details so you can focus on core business.',
    features: [
      'Reception Services',
      'Front Desk Management',
      'Mail & Courier Handling',
      'Document Management',
      'Data Entry Services',
      'Telephone Operations',
      'Meeting Room Support',
      'Visitor Management',
    ],
    benefits: [
      {
        title: 'Professional Image',
        description: 'Trained staff present your company professionally.',
      },
      {
        title: 'Operational Efficiency',
        description: 'Streamlined processes for smooth operations.',
      },
      {
        title: 'Cost Savings',
        description: 'Outsourcing reduces overhead and training costs.',
      },
      {
        title: 'Flexibility',
        description: 'Scale services up or down as needed.',
      },
    ],
    process: [
      {
        step: 1,
        title: 'Requirements Analysis',
        description: 'Understand your office support needs.',
      },
      {
        step: 2,
        title: 'Staff Selection',
        description: 'Choose the right personnel for your culture.',
      },
      {
        step: 3,
        title: 'Training',
        description: 'Familiarize staff with your processes.',
      },
      {
        step: 4,
        title: 'Deployment',
        description: 'Seamless integration with your team.',
      },
    ],
  },
  'labour-supply': {
    icon: '👷',
    title: 'Labour Supply',
    description:
      'Reliable, skilled workforce supply for industrial and commercial needs.',
    longDescription:
      'Our Labour Supply services provide you with a flexible, reliable workforce for various industrial and commercial requirements. We handle recruitment, training, and management.',
    features: [
      'Skilled Workers',
      'Semi-skilled Labour',
      'Unskilled Workers',
      'Temporary Staffing',
      'Project-based Teams',
      'Compliance Management',
      'Payroll Services',
      'Performance Monitoring',
    ],
    benefits: [
      {
        title: 'Vetted Workers',
        description: 'All workers are verified and background-checked.',
      },
      {
        title: 'Quick Deployment',
        description: 'Rapid staffing to meet urgent requirements.',
      },
      {
        title: 'Compliance Assured',
        description: 'We handle all statutory and legal requirements.',
      },
      {
        title: 'Flexible Terms',
        description: 'Contract terms that suit your project needs.',
      },
    ],
    process: [
      {
        step: 1,
        title: 'Requirement',
        description: 'Define skills and quantity needed.',
      },
      {
        step: 2,
        title: 'Sourcing',
        description: 'Recruit and verify suitable candidates.',
      },
      {
        step: 3,
        title: 'Training',
        description: 'Basic orientation and safety training.',
      },
      {
        step: 4,
        title: 'Deployment',
        description: 'Place workers at your site with supervision.',
      },
    ],
  },
  maintenance: {
    icon: '🔧',
    title: 'Maintenance Services',
    description:
      'Reliable maintenance and repair services for smooth facility operations.',
    longDescription:
      'Our Maintenance Services ensure your facilities and equipment remain in optimal condition. From preventive maintenance to emergency repairs, we keep your operations running smoothly.',
    features: [
      'Preventive Maintenance',
      'Corrective Maintenance',
      'Electrical Services',
      'Plumbing Services',
      'HVAC Maintenance',
      'Carpentry Work',
      'Painting Services',
      'Emergency Repairs',
    ],
    benefits: [
      {
        title: 'Reduced Downtime',
        description:
          'Preventive maintenance minimizes unexpected breakdowns.',
      },
      {
        title: 'Cost Savings',
        description: 'Regular maintenance extends equipment life.',
      },
      {
        title: 'Expert Technicians',
        description: 'Skilled professionals for all types of repairs.',
      },
      {
        title: '24/7 Emergency',
        description: 'Round-the-clock support for urgent issues.',
      },
    ],
    process: [
      {
        step: 1,
        title: 'Audit',
        description: 'Comprehensive facility and equipment assessment.',
      },
      {
        step: 2,
        title: 'Schedule',
        description: 'Create preventive maintenance calendar.',
      },
      {
        step: 3,
        title: 'Execute',
        description: 'Regular maintenance and repairs.',
      },
      {
        step: 4,
        title: 'Report',
        description: 'Detailed reporting and recommendations.',
      },
    ],
  },
  pantry: {
    icon: '☕',
    title: 'Pantry Services',
    description:
      'Professional pantry management for refreshments and amenities.',
    longDescription:
      'Our Pantry Services ensure your employees and guests have access to quality refreshments and amenities. We manage everything from tea and coffee service to inventory management.',
    features: [
      'Tea & Coffee Service',
      'Refreshment Management',
      'Snack & Beverage Supply',
      'Pantry Inventory',
      'Equipment Maintenance',
      'Hygiene Management',
      'Meeting Support',
      'Guest Hospitality',
    ],
    benefits: [
      {
        title: 'Employee Satisfaction',
        description:
          'Quality refreshments boost morale and productivity.',
      },
      {
        title: 'Professional Service',
        description: 'Trained pantry staff provide excellent service.',
      },
      {
        title: 'Cost Control',
        description: 'Efficient inventory management reduces waste.',
      },
      {
        title: 'Hygiene Assured',
        description: 'Strict hygiene protocols for food safety.',
      },
    ],
    process: [
      {
        step: 1,
        title: 'Setup',
        description: 'Establish pantry operations and supplies.',
      },
      {
        step: 2,
        title: 'Staff Training',
        description: 'Train staff on service standards.',
      },
      {
        step: 3,
        title: 'Daily Operations',
        description: 'Manage refreshment services.',
      },
      {
        step: 4,
        title: 'Inventory',
        description: 'Regular stock management and replenishment.',
      },
    ],
  },
  security: {
    icon: '🛡️',
    title: 'Security Services',
    description:
      'Trained security personnel for comprehensive premises protection.',
    longDescription:
      'Our Security Services provide reliable protection for your premises, assets, and people. Our trained security personnel are equipped to handle various security requirements professionally.',
    features: [
      '24/7 Security Guard',
      'Access Control',
      'CCTV Monitoring',
      'Visitor Management',
      'Patrol Services',
      'Emergency Response',
      'Event Security',
      'Fire Safety',
    ],
    benefits: [
      {
        title: 'Trained Guards',
        description:
          'All security personnel undergo rigorous training.',
      },
      {
        title: 'Round-the-Clock',
        description: '24/7 security coverage for complete protection.',
      },
      {
        title: 'Technology Enabled',
        description:
          'Modern security systems complement physical security.',
      },
      {
        title: 'Quick Response',
        description: 'Rapid response protocols for incidents.',
      },
    ],
    process: [
      {
        step: 1,
        title: 'Security Audit',
        description: 'Assess vulnerabilities and requirements.',
      },
      {
        step: 2,
        title: 'Planning',
        description: 'Develop comprehensive security plan.',
      },
      {
        step: 3,
        title: 'Deployment',
        description: 'Deploy trained security personnel.',
      },
      {
        step: 4,
        title: 'Monitoring',
        description: 'Continuous oversight and improvement.',
      },
    ],
  },
}

const currentService = computed(() => servicesData[slug.value])

useSeoMeta({
  title: () =>
    currentService.value
      ? `${currentService.value.title} | LTHS`
      : 'Service | LTHS',
  description: () => currentService.value?.description || '',
})
</script>

<template>
  <div v-if="currentService">
    <!-- Hero Section -->
    <section class="relative pt-32 pb-20 overflow-hidden">
      <div class="absolute inset-0 animated-gradient"></div>
      <div
        class="absolute top-40 right-20 w-96 h-96 bg-[#d4a574]/10 rounded-full blur-3xl"
      ></div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <NuxtLink
          to="/services"
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
          All Services
        </NuxtLink>

        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div
              v-motion
              :initial="{ opacity: 0, scale: 0.8 }"
              :enter="{ opacity: 1, scale: 1 }"
              class="w-24 h-24 rounded-3xl bg-gradient-to-br from-[#d4a574]/20 to-[#d4a574]/5 flex items-center justify-center text-5xl mb-8"
            >
              {{ currentService.icon }}
            </div>
            <h1
              v-motion
              :initial="{ opacity: 0, y: 30 }"
              :enter="{ opacity: 1, y: 0, transition: { delay: 100 } }"
              class="font-display text-5xl md:text-6xl font-bold mb-6"
            >
              {{ currentService.title }}
            </h1>
            <p
              v-motion
              :initial="{ opacity: 0, y: 30 }"
              :enter="{ opacity: 1, y: 0, transition: { delay: 200 } }"
              class="text-xl text-gray-400 leading-relaxed"
            >
              {{ currentService.longDescription }}
            </p>

            <div
              v-motion
              :initial="{ opacity: 0, y: 30 }"
              :enter="{ opacity: 1, y: 0, transition: { delay: 300 } }"
              class="mt-8 flex flex-wrap gap-4"
            >
              <NuxtLink
                to="/contact"
                class="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#d4a574] to-[#b8956e] text-[#0a0a0a] font-semibold rounded-full hover:shadow-2xl hover:shadow-[#d4a574]/30 transition-all duration-500"
                data-testid="service-cta-quote"
              >
                Get a Quote
              </NuxtLink>
              <a
                href="tel:8956690990"
                class="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white rounded-full hover:bg-white/5 transition-colors"
              >
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
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Call Now
              </a>
            </div>
          </div>

          <!-- Image Placeholder -->
          <div class="relative hidden lg:block">
            <div
              class="aspect-square rounded-3xl image-placeholder bg-gradient-to-br from-[#1a1a2e] to-[#0a0a0a] border border-white/10 flex items-center justify-center"
            >
              <div class="text-center">
                <span class="text-8xl block mb-4">{{ currentService.icon }}</span>
                <p class="text-gray-500">Service Image</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="relative py-24 bg-[#050505]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="font-display text-4xl font-bold mb-6">
            What's <span class="gradient-text">Included</span>
          </h2>
          <p class="text-gray-400 text-lg">
            Comprehensive features designed to meet all your requirements.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="(feature, index) in currentService.features"
            :key="feature"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visible="{ opacity: 1, y: 0, transition: { delay: index * 50 } }"
            class="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-[#d4a574]/30 transition-colors"
          >
            <div
              class="w-10 h-10 rounded-lg bg-[#d4a574]/20 flex items-center justify-center text-[#d4a574] mb-4"
            >
              ✓
            </div>
            <p class="font-medium text-white">{{ feature }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="relative py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <!-- Image Placeholder -->
          <div class="relative">
            <div
              class="aspect-[4/3] rounded-3xl image-placeholder bg-gradient-to-br from-[#1a1a2e] to-[#0a0a0a] border border-white/10 flex items-center justify-center"
            >
              <div class="text-center">
                <span class="text-6xl block mb-4">🎯</span>
                <p class="text-gray-500">Benefits Image</p>
              </div>
            </div>
          </div>

          <div>
            <h2 class="font-display text-4xl font-bold mb-8">
              Why Choose Our
              <span class="gradient-text">{{ currentService.title }}</span>
            </h2>
            <div class="space-y-6">
              <div
                v-for="(benefit, index) in currentService.benefits"
                :key="benefit.title"
                v-motion
                :initial="{ opacity: 0, x: 20 }"
                :visible="{ opacity: 1, x: 0, transition: { delay: index * 100 } }"
                class="flex gap-4"
              >
                <div
                  class="w-12 h-12 rounded-xl bg-gradient-to-br from-[#d4a574]/20 to-[#d4a574]/5 flex items-center justify-center flex-shrink-0"
                >
                  <span class="text-[#d4a574] font-bold">{{ index + 1 }}</span>
                </div>
                <div>
                  <h3 class="font-semibold text-white text-lg">
                    {{ benefit.title }}
                  </h3>
                  <p class="text-gray-400 text-sm mt-1">
                    {{ benefit.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="relative py-24 bg-[#050505]">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="font-display text-4xl font-bold mb-6">
            Our <span class="gradient-text">Process</span>
          </h2>
          <p class="text-gray-400 text-lg">
            A streamlined approach to delivering exceptional service.
          </p>
        </div>

        <div class="relative">
          <!-- Timeline Line -->
          <div
            class="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#d4a574] via-[#d4a574]/50 to-transparent hidden md:block"
          ></div>

          <div class="space-y-8">
            <div
              v-for="(step, index) in currentService.process"
              :key="step.step"
              v-motion
              :initial="{ opacity: 0, y: 20 }"
              :visible="{ opacity: 1, y: 0, transition: { delay: index * 100 } }"
              class="relative flex items-center"
              :class="index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'"
            >
              <div class="flex-1 hidden md:block"></div>

              <!-- Step Number -->
              <div
                class="absolute left-0 md:left-1/2 w-16 h-16 -translate-x-0 md:-translate-x-1/2 rounded-full bg-gradient-to-br from-[#d4a574] to-[#b8956e] flex items-center justify-center z-10"
              >
                <span class="text-[#0a0a0a] font-bold text-xl">{{
                  step.step
                }}</span>
              </div>

              <!-- Content -->
              <div
                class="flex-1 ml-24 md:ml-0 p-6 rounded-2xl bg-white/5 border border-white/10"
                :class="index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'"
              >
                <h3 class="font-display text-xl font-semibold text-white">
                  {{ step.title }}
                </h3>
                <p class="text-gray-400 text-sm mt-2">{{ step.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="relative py-24">
      <div
        class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center rounded-3xl bg-gradient-to-br from-[#d4a574]/10 to-transparent border border-[#d4a574]/20 p-12"
      >
        <h2 class="font-display text-4xl font-bold mb-6">
          Ready to Get <span class="gradient-text">Started?</span>
        </h2>
        <p class="text-gray-400 text-lg mb-8">
          Contact us today for a free consultation and customized quote for your
          {{ currentService.title.toLowerCase() }} needs.
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <NuxtLink
            to="/contact"
            class="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#d4a574] to-[#b8956e] text-[#0a0a0a] font-semibold rounded-full hover:shadow-2xl hover:shadow-[#d4a574]/30 transition-all duration-500"
            data-testid="service-page-cta"
          >
            Request a Quote
          </NuxtLink>
          <NuxtLink
            to="/services"
            class="inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-white font-semibold rounded-full hover:bg-white/5 transition-all duration-300"
          >
            View All Services
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>

  <!-- 404 for unknown services -->
  <div v-else class="min-h-screen flex items-center justify-center">
    <div class="text-center">
      <h1 class="font-display text-4xl font-bold mb-4">Service Not Found</h1>
      <p class="text-gray-400 mb-8">
        The service you're looking for doesn't exist.
      </p>
      <NuxtLink
        to="/services"
        class="inline-flex items-center gap-2 px-6 py-3 bg-[#d4a574] text-[#0a0a0a] font-semibold rounded-full"
      >
        View All Services
      </NuxtLink>
    </div>
  </div>
</template>

