<template>
  <header class="row justify-around items-center">
    <img
      src="@/assets/images/logo.png"
      alt=""
      class="logo"
      @click="$router.push('/')"
    />
    <div>
      <q-btn glossy class="q-mx-md" @click="$router.push('/mountains/0')">
        <q-icon left size="35px" name="landscape" />
        <div class="text-bold">전국 산 정보</div>
      </q-btn>
      <q-btn glossy class="q-mx-md" @click="openLoginDialog" v-if="!userName">
        <q-icon left size="35px" name="person" />
        <div class="text-bold">로그인</div>
      </q-btn>
      <q-btn-dropdown glossy v-else>
        <template v-slot:label>
          <div class="row items-center no-wrap">
            <q-icon left size="35px" name="person" />
            <div class="text-center text-bold">
              {{ userName }}
            </div>
          </div>
        </template>
        <q-list>
          <q-item
            clickable
            v-close-popup
            @click="$router.push(`/mypage/profile`)"
          >
            <q-item-section>
              <q-item-label class="text-bold">마이페이지</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable v-close-popup @click="logout">
            <q-item-section>
              <q-item-label class="text-red-10 text-bold"
                >로그아웃</q-item-label
              >
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
    </div>
  </header>
  <LoginDialog ref="loginDialog" />
</template>
<script lang="ts">
import LoginDialog from "./login/LoginDialog.vue";
import { computed, defineComponent, ref } from "vue";
import { useUserStore } from "@/stores/user";
import { successAlert } from "@/utils/common";
import { useRoute, useRouter } from "vue-router";

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
    const route = useRoute();

    const openLoginDialog = () => {
      loginDialog.value.openDialog();
    };

    const logout = () => {
      userStore.logOutUser();
      successAlert(`정상적으로 로그아웃되었습니다.`);
      if (route.fullPath.includes("mypage")) {
        router.push("/");
      }
    };

    return {
      loginDialog,
      openLoginDialog,
      userName,
      logout,
    };
  },
});
</script>
