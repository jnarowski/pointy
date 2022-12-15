<template>
  <div class="min-h-full">
    <the-header />
    <router-view />
  </div>
</template>

<script lang="ts" setup>
import TheHeader from './components/TheHeader.vue'
</script>