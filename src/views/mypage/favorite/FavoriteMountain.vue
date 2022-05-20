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
    <div
      class="row justify-center text-center q-pa-xl"
      v-if="!favoriteList.length"
    >
      <div class="q-mb-xl q-pb-xl">
        <h5 class="text-bold">
          즐겨찾기 설정한 산이 없습니다.<br /><br />자주가는 산을 즐겨찾기
          설정해보세요!
        </h5>
        <br /><br />
        <img src="@/assets/images/empty_favorite.png" alt="" />
        <div class="text-center q-ma-xl">
          <q-btn push color="brown-6" @click="$router.push('/mountains/0')">
            <q-icon left size="3em" name="landscape" />
            <div class="text-bold">전국 산 정보 보러가기</div>
          </q-btn>
        </div>
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
