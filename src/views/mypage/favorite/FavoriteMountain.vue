<template>
  <section class="text-center q-ma-xl" style="min-height: 500px">
    <div class="row justify-center q-pa-xl">
      <div
        class="q-ma-md item"
        v-for="item in favoriteList"
        :key="item.mountainId"
      >
        <q-card
          class="my-card cursor-pointer"
          style="width: 300px; height: auto"
          @click="$router.push(`/mountains/detail/${item.mountainId}`)"
        >
          <q-img :src="item.image[0]" style="height: 200px">
            <div class="absolute-bottom text-h6 text-left">{{ item.name }}</div>
          </q-img>
        </q-card>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useUserStore } from "@/stores/user";
import { getFavoriteMountainList } from "@/apis/userApis";
import type { FavoriteMountainList } from "@/utils/typeInterface";
const userStore = useUserStore();
const favoriteList = ref<FavoriteMountainList[]>([]);

const getList = async () => {
  const result = await getFavoriteMountainList(userStore.getUserId);
  if (result) {
    favoriteList.value = result;
  }
};

onMounted(() => {
  getList();
});
</script>
