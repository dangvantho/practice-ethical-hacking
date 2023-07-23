<script setup lang="ts">
import ProfileHeader from './profile.vue'

const isShowProfile = ref(false)

function onToggleProfile() {
  isShowProfile.value = !isShowProfile.value
}
</script>
<template>
  <div class="flex justify-between w-100 px-3 py-3">
    <div class="text-base">Practice ethical hacking</div>
    <div class="text-base" @click="onToggleProfile">Profile</div>
    <ProfileHeader v-show="isShowProfile" @ontoggle:profile="onToggleProfile" />
  </div>
</template>
