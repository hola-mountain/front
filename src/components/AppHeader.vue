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
      <q-btn glossy class="q-mx-md" @click="loginOrMypage">
        <q-icon left size="35px" name="person" />
        <div class="text-bold">{{ userName || "로그인" }}</div>
      </q-btn>
    </div>
  </header>
  <LoginDialog ref="loginDialog" />
</template>
<script lang="ts">
import LoginDialog from "./login/LoginDialog.vue";
import { computed, defineComponent, ref } from "vue";
import { useUserStore } from "@/stores/user";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "AppHeader",
  components: {
    LoginDialog,
  },
  setup() {
    const loginDialog = ref();
    const userStore = useUserStore();
    const userName = computed(() => userStore.getNickName);
    const router = useRouter();

    const loginOrMypage = () => {
      if (userName.value) {
        router.push(`/mypage/profile/${userStore.getNickName}`);
      } else {
        loginDialog.value.openDialog();
      }
    };

    return {
      loginDialog,
      loginOrMypage,
      userName,
    };
  },
});
</script>
