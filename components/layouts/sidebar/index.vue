<script setup lang="ts">
import { SIDEBAR_CONTENT } from '@/constants'
</script>
<template>
  <div class="flex flex-col gap-2 px-3 w-1/6">
    <div v-for="content in SIDEBAR_CONTENT" :key="content.router">
      <nuxt-link class="text-xs text-gray-300" :to="content.router">{{
        content.title
      }}</nuxt-link>
    </div>
  </div>
</template>
