<template>
  <q-card class="q-pa-lg">
    <q-card-section class="text-center">
      <q-btn icon="close" flat round dense v-close-popup class="close-btn" />
      <q-avatar
        size="80px"
        font-size="50px"
        color="green-10"
        text-color="white"
        icon="person"
      />
      <div class="text-h6 q-my-md">로그인</div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      <div class="q-pa-md">
        <q-input
          outlined
          v-model="id"
          label="이메일"
          class="q-mb-md"
          color="green-10"
        />
        <q-input
          v-model="password"
          outlined
          type="password"
          label="비밀번호"
          class="q-mb-md"
          color="green-10"
        />
        <q-checkbox
          v-model="saveInfo"
          label="로그인 상태 유지"
          class="q-mb-md"
          color="green-8"
        />
        <q-btn
          color="green-10"
          label="로그인"
          style="width: 100%"
          class="q-mb-md"
        />
        <q-btn
          color="brown-7"
          label="회원가입"
          style="width: 100%"
          @click="$emit('view-singup')"
        />
      </div>
    </q-card-section>
  </q-card>
</template>
<script setup lang="ts">
import { ref } from "vue";

const id = ref("");
const password = ref("");
const saveInfo = ref(false);
</script>
