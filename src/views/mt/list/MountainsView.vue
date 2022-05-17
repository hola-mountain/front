<template>
  <section class="q-ma-xl mountains">
    <SearchBox />
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
          <q-img :src="item.images[0]">
            <div class="absolute-bottom text-h6">{{ item.name }}</div>
          </q-img>

          <q-card-section> {{ item.shortDescription }} </q-card-section>
        </q-card>
      </div>
    </div>
    <!-- <div class="q-mt-xl">
      <q-pagination
        v-model="current"
        :max="5"
        direction-links
        size="18px"
        color="teal"
        class="justify-center"
      />
    </div> -->
    <div class="text-center q-ma-md" v-if="!mountainList.length">
      <h2 class="q-py-xl">등록된 산 정보가 없습니다.</h2>
      <div class="q-py-xl text-center">
        <img src="@/assets/images/no_mountain.png" alt="" />
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { getMountains } from "@/apis/mountainApis";
import type { GetMountainListForm, MountainList } from "@/utils/typeInterface";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import SearchBox from "./partial/SearchBox.vue";

const route = useRoute();
const mountainList = ref<MountainList[]>([]);

const params = ref<GetMountainListForm>({
  pageNum: 1,
  pageSize: 20,
  district: (route.params?.cityId as string) || "00",
  isAsc: false,
  sortBy: "regdate",
});

const patchMountainList = async () => {
  const result = await getMountains(params.value);
  if (result) {
    mountainList.value = result;
  }
};

onMounted(() => {
  patchMountainList();
});
</script>
