<template>
  <AppHeaderVue />
  <RouterView />
  <AppFooterVue />
</template>
<script setup lang="ts">
import AppHeaderVue from "./components/AppHeader.vue";
import AppFooterVue from "./components/AppFooter.vue";
</script>
