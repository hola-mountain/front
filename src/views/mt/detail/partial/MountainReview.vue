<template>
  <div>
    <h3 class="text-center q-pa-xl text-bold">Review</h3>
    <div class="row justify-center q-mb-lg">
      <q-btn class="q-px-xl" color="brown-6">
        <h6 class="text-overline" @click="openRegDialog">리뷰등록</h6>
      </q-btn>
    </div>
    <div class="row justify-center q-pb-xl">
      <div v-for="item in 20" :key="item" style="width: 300px">
        <q-card class="my-card q-ma-md">
          <img src="https://cdn.quasar.dev/img/mountains.jpg" />

          <q-card-section>
            <div class="text-h6">Our Changing Planet</div>
            <div class="text-subtitle2">by John Doe</div>
          </q-card-section>
          <q-card-actions>
            <q-rating v-model="stars" :max="5" size="30px" />
          </q-card-actions>
          <q-card-section class="q-pt-none"> safasfsafsaf </q-card-section>
        </q-card>
      </div>
    </div>
    <ReviewRegDialog ref="regRef" @success-reg="fetchReviews" />
    <ReviewDetailDialog ref="detailRef" />
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import ReviewRegDialog from "./ReviewRegDialog.vue";
import ReviewDetailDialog from "./ReviewDetailDialog.vue";
import { useUserStore } from "@/stores/user";
import { warningAlert } from "@/utils/common";
import { getMountainReviews } from "@/apis/mountainApis";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "MountainReview",
  components: { ReviewRegDialog, ReviewDetailDialog },
  setup() {
    const route = useRoute();
    const stars = ref(4);
    const regRef = ref();
    const detailRef = ref();
    const userStore = useUserStore();

    const openRegDialog = () => {
      if (userStore.getUserId) {
        regRef.value.openDialog();
      } else {
        warningAlert("로그인 후 이용가능합니다!");
      }
    };
    const openDetailDialog = () => {
      detailRef.value.openDialog();
    };

    const fetchReviews = async () => {
      const result = await getMountainReviews(route.params.mtId as string);
      if (result) {
        //
      }
    };

    onMounted(() => {
      if (route.params?.mtId) {
        fetchReviews();
      }
    });

    return {
      stars,
      regRef,
      detailRef,
      openRegDialog,
      openDetailDialog,
      fetchReviews,
    };
  },
});
</script>
