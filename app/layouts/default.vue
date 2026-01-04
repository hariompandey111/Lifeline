<script setup lang="ts">
const colorMode = useColorMode()
</script>

<template>
  <div
    class="min-h-screen bg-theme text-theme font-body transition-colors duration-300"
    :class="colorMode.value"
  >
    <TheNavbar />
    <main>
      <slot />
    </main>
    <TheFooter />
  </div>
</template>
