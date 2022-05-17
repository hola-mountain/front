<template>
  <section class="mt-detail">
    <MountainIntro :mainInfo="mainInfo" />
    <div class="row justify-center" style="background-color: aliceblue">
      <KakaoMap :mapInfo="mapInfo" />
      <MountainChart :chartData="chartData" />
    </div>
    <MountainReview />
  </section>
</template>
<script setup lang="ts">
import { getMountainDetail } from "@/apis/mountainApis";
import { computed, onMounted, ref } from "vue";
import KakaoMap from "./partial/KakaoMap.vue";
import MountainChart from "./partial/MountainChart.vue";
import MountainIntro from "./partial/MountainIntro.vue";
import MountainReview from "./partial/MountainReview.vue";

const mock = {
  mountainId: 1,
  name: "관악산",
  latitude: 37.081235,
  longitude: 121.23567643,
  height: 890,
  hikingLevel: 75,
  viewLevel: 89,
  attractLevel: 78,
  description: "서울의 관악 아름답지 않은가 너무 아름다워",
  images: ["image1_1", "image1_2"],
};

const mainInfo = computed(() => {
  return {
    name: mock.name,
    height: mock.height,
    description: mock.description,
    images: mock.images,
  };
});
const mapInfo = computed(() => {
  return {
    latitude: mock.latitude,
    longitude: mock.longitude,
  };
});
const chartData = computed(() => [
  mock.hikingLevel,
  mock.viewLevel,
  mock.attractLevel,
]);

// const patchMountainDetail = async () => {
//   const result = await getMountainDetail(params.value);
//   if (result) {
//     mountainList.value = result;
//   }
// };

onMounted(() => {
  // patchMountainDetail();
});
</script>
