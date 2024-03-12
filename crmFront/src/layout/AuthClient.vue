<script setup lang="ts">
import PMenu from "@/components/nav/PMenu.vue";

</script>

<template>
  <div class="flex">
    <div class="basis-1/5">
      <p-menu />
    </div>
    <div class="w-full">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>

</style>