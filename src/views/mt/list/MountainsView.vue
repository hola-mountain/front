<template>
  <section class="q-ma-xl mountains">
    <SearchBox @change-city="changeCity" />
    <MountainListView :mountain-list="mountainList" />
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
  </section>
</template>
<script setup lang="ts">
import { getMountains } from "@/apis/mountainApis";
import type { GetMountainListForm, MountainList } from "@/utils/typeInterface";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import SearchBox from "./partial/SearchBox.vue";
import MountainListView from "./partial/MountainListView.vue";

const route = useRoute();
const mountainList = ref<MountainList[]>([]);

const params = ref<GetMountainListForm>({
  pageNum: 1,
  pageSize: 12,
  district: (route.params?.cityId as string) || "00",
  isAsc: false,
  sortBy: "regdate",
});

const changeCity = (code: string) => {
  params.value.district = code;
  fetchMountainList();
};

const fetchMountainList = async () => {
  const result = await getMountains(params.value);
  if (result) {
    mountainList.value = result;
  }
};

onMounted(() => {
  fetchMountainList();
});
</script>
