<template>
  <section class="mt-detail" v-if="loading">
    <MountainIntro :mainInfo="mainInfo" />
    <div class="row justify-center" style="background-color: aliceblue">
      <KakaoMap :mapInfo="mapInfo" />
      <MountainChart :chartData="chartData" />
    </div>
    <MountainReview
      :reviewList="reviewList"
      @success-reg="refetchReview"
      :isMoreInfo="pagingInfo.moreInfo"
      @more-info="getMoreReviews"
    />
  </section>
</template>
<script setup lang="ts">
import { getMountainDetail, getMountainReviews } from "@/apis/mountainApis";
import type { MountainDetail, ReviewList } from "@/utils/typeInterface";
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import KakaoMap from "./partial/KakaoMap.vue";
import MountainChart from "./partial/MountainChart.vue";
import MountainIntro from "./partial/MountainIntro.vue";
import MountainReview from "./partial/MountainReview.vue";

const route = useRoute();
const loading = ref(false);

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
  image: [],
});

const reviewList = ref<ReviewList[]>([]);
const pagingInfo = ref({
  pageSize: 20,
  pageNum: 0,
  moreInfo: false,
});

const mainInfo = computed(() => {
  return {
    name: mountainDetail.value.name,
    height: mountainDetail.value.height,
    description: mountainDetail.value.description,
    images: mountainDetail.value.image,
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

const fetchReviews = async (id: string) => {
  const result = await getMountainReviews(id, {
    pageNum: pagingInfo.value.pageNum,
    pageSize: pagingInfo.value.pageSize,
  });
  if (result) {
    pagingInfo.value.moreInfo = result.length === 20;
    if (pagingInfo.value.pageNum === 0) {
      reviewList.value = result;
    } else {
      reviewList.value = reviewList.value.concat(result);
    }
  }
};

const refetchReview = () => {
  pagingInfo.value.pageNum = 0;
  fetchReviews(route.params.mtId as string);
};

const getMoreReviews = async (done: any) => {
  pagingInfo.value.pageNum += 1;
  await fetchReviews(route.params.mtId as string);
  done();
};

onMounted(async () => {
  if (route.params?.mtId) {
    const id = route.params.mtId as string;
    await Promise.all([fetchMountainDetail(id), fetchReviews(id)]);
    loading.value = true;
  }
});
</script>
