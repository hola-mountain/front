<template>
  <header class="row justify-around items-center">
    <img
      src="@/assets/images/logo.png"
      alt=""
      class="logo"
      @click="$router.push('/')"
    />
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
