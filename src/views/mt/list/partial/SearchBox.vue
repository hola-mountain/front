<template>
  <section class="q-mx-xl mountains">
    <div class="row justify-end items-center q-pa-md search-box">
      <q-select
        standout="bg-teal text-white"
        v-model="model"
        :options="options"
        label="지역"
        class="q-ma-md item"
      >
        <template v-slot:prepend>
          <q-icon name="place" />
        </template>
      </q-select>
      <q-input
        v-model="model"
        standout="bg-teal text-white"
        class="q-ma-md item"
      >
        <template v-slot:after>
          <q-btn round icon="search" color="teal" />
        </template>
      </q-input>
    </div>
  </section>
</template>
<script setup lang="ts">
import { ref } from "vue";

const model = ref("");
const options = ["전국", "서울특별시"];
</script>
