<template>
  <section class="q-pa-xl review">
    <h4 class="text-center q-my-lg text-bold text-blue-grey-10">
      이미 많은 사람이 Holam을 통해 산을 오르고 있습니다.
    </h4>
    <div class="q-pa-xl">
      <swiper
        :slidesPerView="5"
        :spaceBetween="30"
        :modules="modules"
        :navigation="true"
        class="mySwiper"
        :breakpoints="{
          '300': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '640': {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          '950': {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          '1250': {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }"
      >
        <swiper-slide v-for="(item, idx) in mainReview" :key="idx">
          <q-card class="my-card">
            <img
              :src="getImgUrl(item.image)"
              style="height: 200px; object-fit: cover"
            />

            <q-card-section>
              <div class="text-h6">{{ item.name }}</div>
              <div class="text-h6">{{ item.title }}</div>
              <div class="text-subtitle2">{{ item.id }}</div>
              <div>
                <q-icon
                  name="star"
                  color="yellow"
                  v-for="star in item.star"
                  :key="star"
                />
              </div>
            </q-card-section>
            <q-card-section class="q-pt-none">
              {{ item.description }}
            </q-card-section>
          </q-card>
        </swiper-slide>
      </swiper>
    </div>
    <div class="text-center q-ma-xl">
      <q-btn push color="brown-6" @click="$router.push('/mountains/0')">
        <q-icon left size="3em" name="landscape" />
        <div class="text-bold">전국 산 정보 보러가기</div>
      </q-btn>
    </div>
  </section>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { mainReview } from "@/utils/sample_review";

const modules = [Navigation];
const getImgUrl = (img: string) => {
  const imgUrl = new URL(`../../../assets/images/main/${img}`, import.meta.url);
  return imgUrl;
};
</script>
<style lang="sass" scoped></style>
