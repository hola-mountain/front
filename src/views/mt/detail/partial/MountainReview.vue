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
        <q-card class="my-card q-ma-md" @click="basic = true">
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
    <ReviewRegDialog ref="regRef" />
    <ReviewDetailDialog ref="detailRef" />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import ReviewRegDialog from "./ReviewRegDialog.vue";
import ReviewDetailDialog from "./ReviewDetailDialog.vue";

export default defineComponent({
  name: "MountainReview",
  components: { ReviewRegDialog, ReviewDetailDialog },
  setup() {
    const basic = ref(false);
    const stars = ref(4);
    const regRef = ref();
    const detailRef = ref();

    const openRegDialog = () => {
      regRef.value.openDialog();
    };
    const openDetailDialog = () => {
      detailRef.value.openDialog();
    };

    return {
      basic,
      stars,
      regRef,
      detailRef,
      openRegDialog,
      openDetailDialog,
    };
  },
});
</script>
