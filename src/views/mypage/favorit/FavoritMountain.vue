<template>
  <section class="text-center q-ma-xl">
    <div class="row justify-center list-box">
      <div class="q-ma-md item" v-for="item in 9" :key="item">
        <q-card
          class="my-card cursor-pointer"
          @click="$router.push(`/mountains/detail/${item}`)"
        >
          <q-img src="https://cdn.quasar.dev/img/mountains.jpg">
            <div class="absolute-bottom text-h6">Title</div>
          </q-img>

          <q-card-section> 무슨무슨 산입니다. </q-card-section>
        </q-card>
      </div>
    </div>
    <div class="q-mt-xl">
      <q-pagination
        v-model="current"
        :max="5"
        direction-links
        size="18px"
        color="teal"
        class="justify-center"
      />
    </div>
    <!-- <div class="text-center q-ma-xl q-pa-xl">
      <h4 class="q-py-xl">즐겨찾는 산 정보가 없습니다.</h4>
      <div class="q-py-xl text-center">
        <img src="@/assets/images/no_mountain.png" alt="" s />
      </div>
    </div> -->
  </section>
</template>
<script setup lang="ts">
import { ref } from "vue";
const current = ref(3);
</script>
