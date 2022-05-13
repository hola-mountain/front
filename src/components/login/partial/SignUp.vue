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
      <div class="text-h6 q-my-md">회원가입</div>
      <div class="text-subtitle">아래 항목을 입력해주세요.</div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      <div class="q-pa-md">
        <q-input
          outlined
          v-model="registerForm.email"
          label="이메일"
          color="green-10"
          ref="emailRef"
          :rules="[inputRequiredValidation]"
        />
        <q-input
          outlined
          v-model="registerForm.nickName"
          label="별명"
          color="green-10"
          ref="nickNameRef"
          :rules="[inputRequiredValidation]"
        />
        <q-input
          v-model="registerForm.password"
          outlined
          type="password"
          label="비밀번호"
          color="green-10"
          ref="passwordRef"
          :rules="[inputRequiredValidation]"
        />
        <q-input
          v-model="passwordCheck"
          outlined
          type="password"
          label="비밀번호 확인"
          color="green-10"
          ref="passwordCheckRef"
          :rules="[
            (val) =>
              val === registerForm.password || '비밀번호가 일치하지않습니다.',
          ]"
          @keypress.enter="submitForm"
        />
        <!-- <q-checkbox
          v-model="saveInfo"
          label="서비스 이용 동의"
          class="q-mb-md"
          color="green-8"
        /> -->
        <q-btn
          color="green-10"
          label="회원가입"
          style="width: 100%"
          class="q-mb-md"
          @click="submitForm"
        />
        <q-btn
          color="negative"
          label="취소"
          style="width: 100%"
          @click="$emit('view-singin')"
        />
      </div>
    </q-card-section>
  </q-card>
</template>
<script setup lang="ts">
import type { SignupForm } from "@/utils/typeInterface";
import { ref } from "vue";
import { inputRequiredValidation, successAlert } from "@/utils/common";
import { signup } from "@/apis/userApis";

const emits = defineEmits(["success-signup", "view-singin"]);

const emailRef = ref();
const nickNameRef = ref();
const passwordRef = ref();
const passwordCheckRef = ref();

const registerForm = ref<SignupForm>({
  email: "",
  nickName: "",
  password: "",
});
const saveInfo = ref(false);
const passwordCheck = ref("");

const registerUser = async () => {
  const result = await signup(registerForm.value);
  if (result) {
    successAlert("회원가입이 완료되었습니다.");
    emits("success-signup", registerForm.value.email);
  }
};

const submitForm = () => {
  emailRef.value.validate();
  nickNameRef.value.validate();
  passwordRef.value.validate();
  passwordCheckRef.value.validate();

  if (
    !emailRef.value.hasError &&
    !nickNameRef.value.hasError &&
    !passwordRef.value.hasError &&
    !passwordCheckRef.value.hasError
  ) {
    registerUser();
  }
};
</script>
