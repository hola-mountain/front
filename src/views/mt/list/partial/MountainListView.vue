<template>
  <div class="row justify-center list-box q-pb-sm">
    <div
      class="q-ma-md item"
      v-for="item in mountainList"
      :key="item.mountainId"
    >
      <q-card
        class="my-card cursor-pointer"
        @click="$router.push(`/mountains/detail/${item.mountainId}`)"
      >
        <q-img :src="item.image[0]">
          <div class="absolute-bottom text-h6">{{ item.name }}</div>
        </q-img>

        <q-card-section>
          {{ item.shortDescription.substring(0, 68) }}
          {{ item.shortDescription.length > 70 ? "..." : "" }}
        </q-card-section>
      </q-card>
    </div>
  </div>
  <div class="text-center q-ma-md" v-if="!mountainList.length">
    <h2 class="q-py-xl">등록된 산 정보가 없습니다.</h2>
    <div class="q-py-xl text-center">
      <img src="@/assets/images/no_mountain.png" alt="" />
    </div>
  </div>
</template>
<script setup lang="ts">
import type { MountainList } from "@/utils/typeInterface";
import type { PropType } from "vue";

const props = defineProps({
  mountainList: {
    type: Array as PropType<MountainList[]>,
    default: () => [],
  },
});
</script>
<style scoped>
.q-img.q-img--menu {
  height: 200px;
}
</style>
