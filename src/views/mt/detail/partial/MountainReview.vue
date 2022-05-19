<template>
  <div>
    <h3 class="text-center q-pa-xl text-bold">Review</h3>
    <div class="row justify-center q-mb-lg">
      <q-btn class="q-px-xl" color="brown-6">
        <h6 class="text-overline" @click="openRegDialog">리뷰등록</h6>
      </q-btn>
    </div>
    <div class="q-pa-md" style="width: 90%; margin: 0 auto">
      <q-infinite-scroll @load="onLoad" :offset="300">
        <div class="row justify-start">
          <div
            v-for="(rev, idx) in reviewList"
            :key="idx"
            style="min-width: 150px"
          >
            <q-card class="my-card q-ma-sm">
              <img
                v-if="rev.thumbImg"
                :src="rev.thumbImg"
                style="width: 200px"
              />

              <q-card-section>
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
        <template v-slot:loading>
          <div class="row justify-center q-my-md">
            <q-spinner-dots color="primary" size="40px" />
          </div>
        </template>
      </q-infinite-scroll>
    </div>
    <div class="row justify-center q-pb-xl" v-if="!reviewList.length">
      <div class="q-mb-xl q-pb-xl">
        <h5 class="text-bold text-center">
          현재 등록된 리뷰가 없습니다.<br /><br />첫 번째 리뷰어가 되어보세요!
        </h5>
        <br /><br />
        <img src="@/assets/images/empty_review.png" alt="" />
      </div>
    </div>
    <ReviewRegDialog ref="regRef" @success-reg="$emit('success-reg')" />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, type PropType } from "vue";
import ReviewRegDialog from "./ReviewRegDialog.vue";
import { useUserStore } from "@/stores/user";
import { warningAlert } from "@/utils/common";
import type { ReviewList } from "@/utils/typeInterface";

export default defineComponent({
  name: "MountainReview",
  components: { ReviewRegDialog },
  props: {
    reviewList: {
      type: Array as PropType<ReviewList[]>,
      default: () => [],
    },
    isMoreInfo: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["success-reg", "more-info"],
  setup(props, { emit }) {
    const stars = ref(4);
    const regRef = ref();
    const userStore = useUserStore();

    const openRegDialog = () => {
      if (userStore.getUserId) {
        regRef.value.openDialog();
      } else {
        warningAlert("로그인 후 이용가능합니다!");
      }
    };

    const onLoad = (index: number, done: any) => {
      if (props.isMoreInfo) {
        emit("more-info", done);
      } else {
        done();
      }
    };

    return {
      stars,
      regRef,
      openRegDialog,
      onLoad,
    };
  },
});
</script>
