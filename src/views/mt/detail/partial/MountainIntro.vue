<template>
  <div class="flex justify-center basic">
    <div class="q-pa-md mt-img">
      <q-carousel
        animated
        v-model="slide"
        arrows
        navigation
        infinite
        class="rounded-borders"
      >
        <q-carousel-slide
          v-for="(img, idx) in mainInfo.images"
          :key="idx"
          :name="idx + 1"
          :img-src="img"
        />
      </q-carousel>
    </div>
    <div class="q-pa-xl mt-info">
      <h5 class="text-bold q-mb-sm">산 이름</h5>
      <h6 class="q-mb-md">
        {{ mainInfo.name
        }}<q-checkbox
          keep-color
          v-model="selected"
          checked-icon="favorite"
          unchecked-icon="favorite_border"
          color="red"
          @update:model-value="changeFavoriteStatus"
        />
      </h6>
      <h5 class="text-bold q-mb-sm">산 높이</h5>
      <h6 class="q-mb-md">해발 {{ mainInfo.height }}m</h6>
      <h5 class="text-bold q-mb-sm">산 정보</h5>
      <h6 class="q-mb-md">
        {{ mainInfo.description }}
      </h6>
    </div>
  </div>
</template>
<script setup lang="ts">
import {
  addFavoriteMountain,
  getIsFavoriteMountain,
  removeFavoriteMountain,
} from "@/apis/mountainApis";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { useUserStore } from "@/stores/user";
import { successAlert, warningAlert } from "@/utils/common";

const props = defineProps({
  mainInfo: {
    type: Object,
    default: () => {
      return {
        name: "",
        height: 0,
        description: "",
        images: [],
        favorite: 0,
      };
    },
  },
});
const route = useRoute();
const userStore = useUserStore();
const addFavorite = async () => {
  const result = await addFavoriteMountain(
    route.params.mtId as string,
    userStore.getUserId
  );
  if (result) {
    successAlert("즐겨찾는 산 목록에 추가되었습니다.");
  } else {
    selected.value = false;
  }
};
const deleteFavorite = async () => {
  const result = await removeFavoriteMountain(
    route.params.mtId as string,
    userStore.getUserId
  );
  if (!result) {
    checkIsFavorite();
  }
};
const checkIsFavorite = async () => {
  const result = await getIsFavoriteMountain(
    route.params.mtId as string,
    userStore.getUserId
  );
  if (result) {
    selected.value = !!result.favorite;
  }
};

const changeFavoriteStatus = () => {
  if (userStore.getUserId) {
    if (selected.value) {
      addFavorite();
    } else {
      deleteFavorite();
    }
  } else {
    warningAlert("로그인 후 이용가능합니다!");
    selected.value = !selected.value;
  }
};

const slide = ref(1);
const selected = ref(!!props.mainInfo.favorite);

onMounted(() => {
  if (userStore.getUserId) {
    checkIsFavorite();
  }
});
</script>
