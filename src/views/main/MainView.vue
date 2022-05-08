<template>
  <main>
    <section class="q-mt-xl">
      <div class="row justify-center q-mb-xl">
        <div class="column flex-center q-pa-lg">
          <h4 class="text-weight-bolder text-center q-mb-sm">
            대한민국 등산 정보의 모든것!
          </h4>
          <h1 class="text-weight-bolder">Holam</h1>
        </div>
        <KoreaMap />
      </div>
      <div class="q-pt-md text-center">
        <p class="text-weight-bold">Holam 더 알아보기</p>
        <q-icon name="expand_more" size="30px" />
      </div>
    </section>
    <IntroduceService />
    <BadgesService />
    <ReviewService />
  </main>
</template>
<script setup lang="ts">
import KoreaMap from "./partial/KoreaMap.vue";
import IntroduceService from "./partial/IntroduceService.vue";
import BadgesService from "./partial/BadgesService.vue";
import ReviewService from "./partial/ReviewService.vue";
</script>
