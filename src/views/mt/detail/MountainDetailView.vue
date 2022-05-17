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
import type { MountainDetail } from "@/utils/typeInterface";
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import KakaoMap from "./partial/KakaoMap.vue";
import MountainChart from "./partial/MountainChart.vue";
import MountainIntro from "./partial/MountainIntro.vue";
import MountainReview from "./partial/MountainReview.vue";

const route = useRoute();

const mountainDetail = ref<MountainDetail>({
  mountainId: 0,
  name: "",
  latitude: 0,
  longitude: 0,
  height: 0,
  hikingLevel: 0,
  viewLevel: 0,
  attractLevel: 0,
  description: "",
  images: [],
});

const mainInfo = computed(() => {
  return {
    name: mountainDetail.value.name,
    height: mountainDetail.value.height,
    description: mountainDetail.value.description,
    images: mountainDetail.value.images,
  };
});
const mapInfo = computed(() => {
  return {
    latitude: mountainDetail.value.latitude,
    longitude: mountainDetail.value.longitude,
  };
});
const chartData = computed(() => [
  mountainDetail.value.hikingLevel,
  mountainDetail.value.viewLevel,
  mountainDetail.value.attractLevel,
]);

const fetchMountainDetail = async (id: string) => {
  const result = await getMountainDetail(id);
  if (result) {
    mountainDetail.value = result;
  }
};

onMounted(() => {
  if (route.params?.mtId) {
    fetchMountainDetail(route.params.mtId as string);
  }
});
</script>
