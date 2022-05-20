<template>
  <AppHeaderVue />
  <RouterView />
  <AppFooterVue />
  <Transition>
    <q-btn
      round
      color="brown-6"
      icon="keyboard_arrow_up"
      class="top-btn"
      v-if="showScroll"
      @click="scrollUp"
    />
  </Transition>
</template>
<script setup lang="ts">
import AppHeaderVue from "./components/AppHeader.vue";
import AppFooterVue from "./components/AppFooter.vue";
import { onBeforeUnmount, onMounted, ref } from "vue";

const scrollUp = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

const showScroll = ref(false);
const timer = ref();

const topBtnScrollEvt = () => {
  // 쓰로틀링 적용
  if (!timer.value) {
    timer.value = setTimeout(function () {
      timer.value = null;
      if (window.scrollY > 300) {
        showScroll.value = true;
      } else {
        showScroll.value = false;
      }
    }, 200);
  }
};

onMounted(() => {
  document.addEventListener("scroll", topBtnScrollEvt);
});
onBeforeUnmount(() => {
  document.removeEventListener("scroll", topBtnScrollEvt);
});
</script>
