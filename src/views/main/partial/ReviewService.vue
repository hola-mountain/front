<template>
  <section class="q-my-xl">
    <div class="row justify-center q-gutter-md">
      <q-card class="my-card q-ma-md" v-for="item in 4" :key="item">
        <img src="https://cdn.quasar.dev/img/mountains.jpg" />

        <q-card-section>
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>
        <q-card-actions>
          <q-rating v-model="stars" :max="5" size="30px" />
        </q-card-actions>
        <q-card-section class="q-pt-none"> safasfsafsaf </q-card-section>
      </q-card>
    </div>
  </section>
</template>
<script setup lang="ts">
import { ref } from "vue";

const stars = ref(4);
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>
