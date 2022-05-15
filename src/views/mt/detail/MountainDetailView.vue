<template>
  <section class="mt-detail">
    <MountainIntro />
    <div class="row justify-center" style="background-color: aliceblue">
      <KakaoMap />
      <MountainChart />
    </div>
    <MountainReview />
  </section>
</template>
<script setup lang="ts">
import { ref } from "vue";
import KakaoMap from "./partial/KakaoMap.vue";
import MountainChart from "./partial/MountainChart.vue";
import MountainIntro from "./partial/MountainIntro.vue";
import MountainReview from "./partial/MountainReview.vue";

const slide = ref(1);
const stars = ref(4);
const basic = ref(false);
</script>
