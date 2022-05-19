<template>
  <div>
    <div class="text-center q-ma-xl">
      <q-btn-toggle
        v-model="model"
        push
        rounded
        glossy
        toggle-color="teal"
        :options="[
          { value: 'profile', slot: 'one' },
          { value: 'favorite', slot: 'two' },
          { value: 'review', slot: 'three' },
        ]"
        @update:model-value="movePage"
      >
        <template v-slot:one>
          <div class="row items-center no-wrap">
            <div class="text-center">내 정보</div>
            <q-icon right name="person" />
          </div>
        </template>

        <template v-slot:two>
          <div class="row items-center no-wrap">
            <div class="text-center">즐겨 찾는 산</div>
            <q-icon right name="star" />
          </div>
        </template>

        <template v-slot:three>
          <div class="row items-center no-wrap">
            <div class="text-center">내가 쓴 리뷰</div>
            <q-icon right name="rate_review" />
          </div>
        </template>
      </q-btn-toggle>
    </div>
  </div>
  <RouterView />
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const model = ref("profile");

const route = useRoute();
const router = useRouter();
const movePage = (page: string) => {
  router.push(`/mypage/${page}`);
};

onMounted(() => {
  model.value = route.path.split("/")[2];
});
</script>
