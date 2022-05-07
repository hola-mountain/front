<template>
  <main>
    <section class="q-my-xl">
      <div class="row justify-center">
        <div class="column flex-center">
          <p class="text-weight-bolder text-subtitle2 text-center">
            대한민국 등산 정보의 모든것!
          </p>
          <h1 class="text-weight-bolder">Holam</h1>
        </div>
        <KoreaMap />
      </div>
      <div class="q-mt-xl text-center">
        <p>Holam 더 알아보기</p>
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
