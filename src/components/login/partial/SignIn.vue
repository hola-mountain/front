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
          v-model="loginForm.nickName"
          label="닉네임"
          class="q-mb-md"
          color="green-10"
        />
        <q-input
          v-model="loginForm.password"
          outlined
          type="password"
          label="비밀번호"
          class="q-mb-md"
          color="green-10"
          @keypress.enter="doSignin"
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
          @click="doSignin"
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
<script lang="ts">
import { ref, defineComponent } from "vue";
import { signin } from "@/apis/userApis";
import { useUserStore } from "@/stores/user";
import { successAlert } from "@/utils/common";

export default defineComponent({
  name: "SignIn",
  emits: ["success-signin", "view-singup"],
  setup(props, { emit }) {
    const loginForm = ref({
      nickName: "",
      password: "",
    });
    const saveInfo = ref(false);

    const userStore = useUserStore();
    const doSignin = async () => {
      const result = await signin(loginForm.value);
      if (result) {
        userStore.setUser(result);
        userStore.setUserNickName(loginForm.value.nickName);
        successAlert(`환영합니다. ${loginForm.value.nickName}님!`);
        emit("success-signin");
      }
    };

    const setJoinId = (nickName: string) => {
      loginForm.value.nickName = nickName;
    };
    return {
      loginForm,
      saveInfo,
      setJoinId,
      doSignin,
    };
  },
});
</script>
