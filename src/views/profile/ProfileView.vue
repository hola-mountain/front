<template>
  <main class="q-pa-md">
    <section>
      <div class="text-center q-ma-xl">
        <q-btn-toggle
          v-model="model"
          push
          rounded
          glossy
          toggle-color="teal"
          :options="[
            { value: '내 정보', slot: 'one' },
            { value: '즐겨 찾는 산', slot: 'two' },
            { value: '내가 쓴 리뷰', slot: 'three' },
          ]"
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
      <div>
        <table class="q-mx-auto">
          <tr>
            <td class="q-pa-md"><p>이메일</p></td>
            <td class="q-pa-md"><p>woals214@gmail.com</p></td>
          </tr>
          <tr>
            <td class="q-pa-md"><p>닉네임</p></td>
            <td class="q-pa-md"><p>내 이름은 등산왕</p></td>
          </tr>
          <tr>
            <td class="q-pa-md"><p>비밀번호</p></td>
            <td class="q-pa-md"><p>********</p></td>
          </tr>
        </table>
      </div>
    </section>
  </main>
</template>
<script setup lang="ts">
import { ref } from "vue";

const model = ref("내 정보");
</script>
