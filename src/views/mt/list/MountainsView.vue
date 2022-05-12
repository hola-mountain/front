<template>
  <section class="q-ma-xl mountains">
    <SearchBox />
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
import SearchBox from "./partial/SearchBox.vue";

const current = ref(1);
const model = ref("");
const options = ["전국", "서울특별시"];
</script>
