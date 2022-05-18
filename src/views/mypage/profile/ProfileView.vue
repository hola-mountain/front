<template>
  <section class="text-center">
    <h4 class="q-pa-md text-bold">내 정보</h4>
    <div>
      <table class="q-mx-auto">
        <tr>
          <td class="q-pa-md text-bold"><p>이메일</p></td>
          <td class="q-pa-md text-weight-medium"><p>woals214@gmail.com</p></td>
        </tr>
        <tr>
          <td class="q-pa-md text-bold"><p>닉네임</p></td>
          <td class="q-pa-md text-weight-medium"><p>내 이름은 등산왕</p></td>
        </tr>
        <tr>
          <td class="q-pa-md text-bold"><p>비밀번호</p></td>
          <td class="q-pa-md text-weight-medium"><p>********</p></td>
        </tr>
      </table>
    </div>
    <div class="q-ma-xl">
      <h4 class="q-pa-md text-bold">흭득 뱃지</h4>
      <img
        src="@/assets/images/empty_badge.png"
        alt=""
        class="q-pa-lg"
        style="width: 200px"
      />
      <h6 class="text-bold">현재 흭득 뱃지가 없습니다.</h6>
      <h6 class="text-bold">다양한 활동을 통해 뱃지를 흭득해보세요.</h6>
    </div>
  </section>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useUserStore } from "@/stores/user";
import { getMyProfile, getMyBadges } from "@/apis/userApis";

const userStore = useUserStore();
const getProfile = async () => {
  const result = await getMyProfile(userStore.getUserId);
  if (result) {
    console.log(result);
  }
};
const getBadges = async () => {
  const result = await getMyBadges(userStore.getUserId);
  if (result) {
    console.log(result);
  }
};
onMounted(() => {
  getProfile();
  getBadges();
});
</script>
