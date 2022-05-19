<template>
  <section class="q-ma-xl mountains">
    <SearchBox @change-city="changeCity" @search-mountain="searchMountain" />
    <MountainListView :mountain-list="mountainList" />
    <div class="q-my-xl" v-if="!!totalSize">
      <q-pagination
        v-model="current"
        :max="maxPage"
        direction-links
        color="teal"
        class="justify-center"
        @update:model-value="changePage"
      />
    </div>
  </section>
</template>
<script setup lang="ts">
import { getMountains } from "@/apis/mountainApis";
import type { GetMountainListForm, MountainList } from "@/utils/typeInterface";
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import SearchBox from "./partial/SearchBox.vue";
import MountainListView from "./partial/MountainListView.vue";
import { useSearchStore } from "@/stores/search";

const route = useRoute();
const mountainList = ref<MountainList[]>([]);

const params = ref<GetMountainListForm>({
  pageNum: 0,
  pageSize: 12,
  district: (route.params?.cityId as string) || "0",
  isAsc: false,
  sortBy: "regdate",
  search: "",
});

const current = ref(1);
const totalSize = ref(0);

const maxPage = computed(() => Math.ceil(totalSize.value / 12));

const searchStore = useSearchStore();

const changeCity = (code: string) => {
  params.value.district = code;
  fetchMountainList();
};

const changePage = (pageNum: string) => {
  params.value.pageNum = parseInt(pageNum) - 1;
  fetchMountainList();
};

const searchMountain = (search: string) => {
  params.value.search = search;
  searchStore.setSearchText(search);

  fetchMountainList();
};

const fetchMountainList = async () => {
  const result = await getMountains(params.value);
  if (result) {
    mountainList.value = result.mountainResp;
    totalSize.value = result.totalPageSize;
  }
};

onMounted(() => {
  if (searchStore.getSearchText) {
    params.value.search = searchStore.getSearchText;
  }
  fetchMountainList();
});
</script>
