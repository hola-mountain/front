<template>
  <div class="flex justify-center basic">
    <div class="q-pa-md mt-img">
      <q-carousel
        animated
        v-model="slide"
        arrows
        navigation
        infinite
        class="rounded-borders"
      >
        <q-carousel-slide
          :name="1"
          img-src="https://cdn.quasar.dev/img/mountains.jpg"
        />
        <q-carousel-slide
          :name="2"
          img-src="https://cdn.quasar.dev/img/parallax1.jpg"
        />
        <q-carousel-slide
          :name="3"
          img-src="https://cdn.quasar.dev/img/parallax2.jpg"
        />
        <q-carousel-slide
          :name="4"
          img-src="https://cdn.quasar.dev/img/quasar.jpg"
        />
      </q-carousel>
    </div>
    <div class="q-pa-md .mt-info">
      <h5 class="text-bold q-mb-sm">산 이름</h5>
      <p>한라산</p>
      <h5 class="text-bold q-mb-sm">산 높이</h5>
      <p>해발 666m</p>
      <h5 class="text-bold q-mb-sm">산 정보</h5>
      <p>
        이산은 무슨무슨 산이다이산은 무슨무슨 산이다이산은 무슨무슨 산이다이산은
        무슨무슨 산이다이산은 무슨무슨 산이다이산은 무슨무슨 산이다이산은
        무슨무슨 산이다
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

const slide = ref(1);
</script>
