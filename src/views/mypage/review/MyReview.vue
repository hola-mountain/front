<template>
  <section class="q-ma-xl">
    <div class="q-pa-md" style="width: 90%; margin: 0 auto">
      <div class="row justify-start items-end">
        <div
          v-for="(rev, idx) in reviewList"
          :key="idx"
          style="min-width: 150px"
        >
          <q-card
            class="my-card q-ma-sm cursor-pointer"
            @click="openFixDialog(rev)"
          >
            <img v-if="rev.thumbImg" :src="rev.thumbImg" style="width: 200px" />

            <q-card-section>
              <div class="text-h6 text-bold">{{ rev.name }}</div>
              <div class="text-h6">{{ rev.title }}</div>
              <div class="text-subtitle2">{{ rev.nickname }}</div>
              <div>
                <q-icon
                  name="star"
                  color="yellow"
                  v-for="item in rev.star"
                  :key="item"
                />
              </div>
            </q-card-section>
            <q-card-section class="q-pt-none">
              {{ rev.comment }}
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
    <div
      class="row justify-center text-center q-pa-xl"
      v-if="!reviewList.length"
    >
      <div class="q-mb-xl q-pb-xl">
        <h5 class="text-bold">
          현재 등록한 리뷰가 없습니다.<br /><br />리뷰를 작성해 사람들에게
          다녀온 산에 대해 알려주세요!
        </h5>
        <br /><br />
        <img src="@/assets/images/empty_review.png" alt="" />
      </div>
    </div>
  </section>
  <ReviewFixDialog ref="fixDialog" @success-work="getList" />
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { useUserStore } from "@/stores/user";
import { getMyReviewList } from "@/apis/userApis";
import type { ReviewList } from "@/utils/typeInterface";
import ReviewFixDialog from "./ReviewFixDialog.vue";

export default defineComponent({
  name: "MyReview",
  components: { ReviewFixDialog },
  setup() {
    const userStore = useUserStore();
    const reviewList = ref<ReviewList[]>([]);
    const fixDialog = ref();

    const getList = async () => {
      const result = await getMyReviewList(userStore.getUserId);
      if (result) {
        reviewList.value = result;
      }
    };

    const openFixDialog = (rev: ReviewList) => {
      fixDialog.value.openDialog(rev);
    };

    onMounted(() => {
      getList();
    });
    return { userStore, reviewList, fixDialog, openFixDialog, getList };
  },
});
</script>
