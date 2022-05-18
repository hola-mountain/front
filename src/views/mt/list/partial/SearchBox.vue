<template>
  <section class="q-mx-xl mountains">
    <div class="row justify-end items-center q-pa-md search-box">
      <q-select
        standout="bg-teal text-white"
        v-model="selectedCity"
        :options="options"
        label="지역"
        class="q-ma-md item"
        @update:model-value="changeCity"
      >
        <template v-slot:prepend>
          <q-icon name="place" />
        </template>
      </q-select>
      <q-input
        v-model="searchText"
        standout="bg-teal text-white"
        class="q-ma-md item"
        @keyup.enter="searchMountain"
      >
        <template v-slot:after>
          <q-btn round icon="search" color="teal" @click="searchMountain" />
        </template>
      </q-input>
    </div>
  </section>
</template>
<script setup lang="ts">
import { CITY_CODE } from "@/utils/constants";
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useSearchStore } from "@/stores/search";

const emits = defineEmits(["change-city", "search-mountain"]);

const searchStore = useSearchStore();

const route = useRoute();
const router = useRouter();
const selectedCity = ref<{ label: string; value: string }>({
  label: "전국",
  value: "0",
});
const searchText = ref("");
const options = CITY_CODE;

const changeCity = (city: { label: string; value: string }) => {
  router.push(`/mountains/${city.value}`);
  emits("change-city", city.value);
};

const searchMountain = () => {
  emits("search-mountain", searchText.value);
};

onMounted(() => {
  const city = CITY_CODE.find((n) => n.value === route.params?.cityId);
  if (city) {
    selectedCity.value = city;
  }
  if (searchStore.getSearchText) {
    searchText.value = searchStore.getSearchText;
  }
});
</script>
