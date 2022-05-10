<template>
  <header class="row justify-around items-center">
    <div class="row justify-start items-center">
      <img
        src="@/assets/images/logo.png"
        alt=""
        class="logo"
        @click="$router.push('/')"
      />
      <span
        class="text-subtitle1 text-weight-bold q-ml-md cursor-pointer"
        @click="$router.push(`/profile/1`)"
        >마이페이지 - 임시</span
      >
    </div>
    <q-btn round icon="person" @click="openLoginDialog" />
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
