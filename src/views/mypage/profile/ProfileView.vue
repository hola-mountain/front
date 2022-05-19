<template>
  <section class="text-center">
    <div>
      <h4 class="q-pa-md text-bold">내 정보</h4>
      <table class="q-mx-auto">
        <tr>
          <td class="q-pa-md text-bold"><p>이메일</p></td>
          <td class="q-pa-md text-weight-medium">
            <p>{{ myInfo.email }}</p>
          </td>
        </tr>
        <tr>
          <td class="q-pa-md text-bold"><p>아이디</p></td>
          <td class="q-pa-md text-weight-medium">
            <p>{{ myInfo.nickName }}</p>
          </td>
        </tr>
        <tr>
          <td class="q-pa-md text-bold"><p>비밀번호</p></td>
          <td class="q-pa-md text-weight-medium"><p>**********</p></td>
        </tr>
      </table>
    </div>
    <div class="q-ma-xl">
      <h4 class="q-pb-lg text-bold">흭득 뱃지</h4>
      <div class="row justify-center">
        <div class="q-ma-md" v-for="item in badges" :key="item.achievementId">
          <img src="@/assets/images/hiker.jpg" alt="" style="width: 150px" />
        </div>
      </div>
      <div v-if="!badges.length">
        <img
          src="@/assets/images/empty_badge.png"
          alt=""
          class="q-pa-lg"
          style="width: 200px"
        />
        <h6 class="text-bold">현재 흭득 뱃지가 없습니다.</h6>
        <h6 class="text-bold">다양한 활동을 통해 뱃지를 흭득해보세요.</h6>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useUserStore } from "@/stores/user";
import { getMyProfile, getMyBadges } from "@/apis/userApis";
import type { BadgeList } from "@/utils/typeInterface";

const userStore = useUserStore();

const myInfo = ref({
  email: "",
  nickName: "",
});
const badges = ref<BadgeList[]>([]);
const getProfile = async () => {
  const result = await getMyProfile(userStore.getUserId);
  if (result) {
    myInfo.value = result;
  }
};
const getBadges = async () => {
  const result = await getMyBadges(userStore.getUserId);
  if (result) {
    badges.value = result;
  }
};
onMounted(() => {
  getProfile();
  getBadges();
});
</script>
