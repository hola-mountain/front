<template>
  <header class="row justify-around items-center">
    <img
      src="@/assets/images/logo.png"
      alt=""
      class="logo"
      @click="$router.push('/')"
    />
    <div>
      <q-btn glossy class="q-mx-md" @click="$router.push('/mountains/00')">
        <q-icon left size="35px" name="landscape" />
        <div class="text-bold">전국 산 정보</div>
      </q-btn>
      <q-btn glossy class="q-mx-md" @click="$router.push(`/profile/1`)">
        <q-icon left size="35px" name="person" />
        <div class="text-bold">마이페이지(임시)</div>
      </q-btn>
      <q-btn glossy round icon="person" @click="openLoginDialog" />
    </div>
  </header>
  <LoginDialog ref="loginDialog" />
</template>
<script lang="ts">
import LoginDialog from "./login/LoginDialog.vue";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "AppHeader",
  components: {
    LoginDialog,
  },
  setup() {
    const loginDialog = ref();
    const openLoginDialog = () => {
      loginDialog.value.openDialog();
    };

    return {
      loginDialog,
      openLoginDialog,
    };
  },
});
</script>
