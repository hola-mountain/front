<template>
  <AppHeaderVue />
  <RouterView />
  <AppFooterVue />
  <q-btn
    round
    color="green-12"
    icon="keyboard_arrow_up"
    class="top-btn"
    @click="scrollUp"
  />
</template>
<script setup lang="ts">
import AppHeaderVue from "./components/AppHeader.vue";
import AppFooterVue from "./components/AppFooter.vue";

const scrollUp = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};
</script>
