<script setup lang="ts">
const ONTOGGLE_PROFILE = 'ontoggle:profile'
const emits = defineEmits<{
  (e: typeof ONTOGGLE_PROFILE): void
}>()
</script>
<template>
  <div class="fixed z-50 top-0 right-0 botton-0 left-0">
    <div
      class="mask absolute z-1 top-0 left-0 w-screen h-screen bg-sky-100 opacity-25"
      @click="emits(ONTOGGLE_PROFILE)"
    >
      h
    </div>
    <div
      class="content absolute z-10 top-5 right-5 flex flex-col gap-2 bg-white px-5 py-2 rounded"
    >
      <p class="text-base capitalize">DANG VAN HOI</p>
      <a
        target="_blank"
        href="https://github.com/dangvantho"
        class="text-base text-blue-600"
        >Github</a
      >
    </div>
  </div>
</template>
