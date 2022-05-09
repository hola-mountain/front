<template>
  <section class="q-ma-xl mountains">
    <div
      class="row justify-end items-center q-pa-md"
      style="width: 70%; margin: 0 auto"
    >
      <q-input bottom-slots v-model="model" standout="bg-teal text-white">
        <template v-slot:after>
          <q-btn round icon="search" color="teal" />
        </template>
      </q-input>
    </div>
    <div class="row justify-center q-pa-md" style="width: 70%; margin: 0 auto">
      <div class="q-ma-md" style="width: 30%" v-for="item in 9" :key="item">
        <q-card
          class="my-card"
          @click="$router.push(`/mountains/detail/${item}`)"
          style="cursor: pointer"
        >
          <q-img src="https://cdn.quasar.dev/img/mountains.jpg">
            <div class="absolute-bottom text-h6">Title</div>
          </q-img>

          <q-card-section> 무슨무슨 산입니다. </q-card-section>
        </q-card>
      </div>
      <div class="q-pa-lg flex flex-center q-mt-xl">
        <q-pagination v-model="current" :max="5" direction-links size="18px" />
      </div>
    </div>
    <div class="text-center q-ma-md">
      <h2 class="q-py-xl">등록된 산 정보가 없습니다.</h2>
      <div class="q-py-xl text-center">
        <img src="@/assets/images/no_mountain.png" alt="" />
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { ref } from "vue";

const current = ref(1);
const model = ref("");
const options = ["인기순", "리뷰순"];
</script>
