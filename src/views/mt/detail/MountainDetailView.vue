<template>
  <section class="mt-detail">
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
        <h5>산 이름</h5>
        <p>한라산</p>
        <h5>산 높이</h5>
        <p>해발 666m</p>
        <h5>산 정보</h5>
        <p>
          이산은 무슨무슨 산이다이산은 무슨무슨 산이다이산은 무슨무슨
          산이다이산은 무슨무슨 산이다이산은 무슨무슨 산이다이산은 무슨무슨
          산이다이산은 무슨무슨 산이다
        </p>
      </div>
    </div>
    <div class="row justify-center" style="background-color: aliceblue">
      <KakaoMap />
      <MountainChart />
    </div>
    <div class="row justify-center q-pa-xl">
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
  </section>
  <q-dialog v-model="basic" transition-show="rotate" transition-hide="rotate">
    <q-card>
      <q-card-section>
        <div class="text-h6">Terms of Agreement</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <p v-for="n in 15" :key="n">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis
          perferendis totam, ea at omnis vel numquam exercitationem aut, natus
          minima, porro labore.
        </p>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Decline" color="primary" v-close-popup />
        <q-btn flat label="Accept" color="primary" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
<script setup lang="ts">
import { ref } from "vue";
import KakaoMap from "./partial/KakaoMap.vue";
import MountainChart from "./partial/MountainChart.vue";

const slide = ref(1);
const stars = ref(4);
const basic = ref(false);
</script>
