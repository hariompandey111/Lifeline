<script setup lang="ts">
const { locale, locales, setLocale } = useI18n()

const availableLocales = computed(() => {
  return locales.value.filter((l) => typeof l !== 'string')
})

const isOpen = ref(false)

const currentLocale = computed(() => {
  const current = availableLocales.value.find((l) => l.code === locale.value)
  return current || { code: 'en', name: 'English' }
})

function selectLocale(code: 'en' | 'hi' | 'mr') {
  setLocale(code)
  isOpen.value = false
}

// Close dropdown when clicking outside
const dropdownRef = ref<HTMLElement>()

function handleClickOutside(event: MouseEvent) {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <div
    ref="dropdownRef"
    class="relative"
  >
    <button
      type="button"
      class="flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300 hover:scale-105"
      :class="[
        $colorMode.value === 'dark'
          ? 'bg-white/10 text-white hover:bg-white/20'
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200',
      ]"
      data-testid="language-switcher"
      aria-label="Select language"
      @click="isOpen = !isOpen"
    >
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
          d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
        />
      </svg>
      <span class="text-sm font-medium">{{ currentLocale.code.toUpperCase() }}</span>
      <svg
        class="w-3 h-3 transition-transform duration-200"
        :class="{ 'rotate-180': isOpen }"
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

    <!-- Dropdown -->
    <Transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-1"
    >
      <div
        v-if="isOpen"
        class="absolute right-0 mt-2 w-40 rounded-xl shadow-xl overflow-hidden z-50"
        :class="[
          $colorMode.value === 'dark'
            ? 'bg-gray-900 border border-white/10'
            : 'bg-white border border-gray-200',
        ]"
      >
        <button
          v-for="loc in availableLocales"
          :key="loc.code"
          type="button"
          class="w-full px-4 py-3 text-left text-sm font-medium transition-colors flex items-center justify-between"
          :class="[
            locale === loc.code
              ? 'bg-brand-10 text-brand'
              : $colorMode.value === 'dark'
                ? 'text-white hover:bg-white/10'
                : 'text-gray-700 hover:bg-gray-100',
          ]"
          :data-testid="`lang-${loc.code}`"
          @click="selectLocale(loc.code)"
        >
          <span>{{ loc.name }}</span>
          <svg
            v-if="locale === loc.code"
            class="w-4 h-4 text-brand"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </button>
      </div>
    </Transition>
  </div>
</template>

