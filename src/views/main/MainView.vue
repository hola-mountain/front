<template>
  <header class="row justify-around items-center" style="height: 100px">
    <img src="@/assets/images/logo.png" alt="" style="width: 120px" />
    <q-btn round icon="person" @click="openLoginDialog" />
  </header>
  <main>
    <section class="q-my-xl">
      <div class="row justify-center">
        <div class="column flex-center">
          <p class="text-weight-bolder text-subtitle2 text-center">
            대한민국 등산 정보의 모든것!
          </p>
          <h1 class="text-weight-bolder">Holam</h1>
        </div>
        <KoreaMap />
      </div>
    </section>
    <IntroduceService />
    <BadgesService />
    <ReviewService />
  </main>
  <footer
    class="row justify-around items-center"
    style="height: 200px; background-color: #684932"
  >
    <img src="@/assets/images/logo.png" alt="" style="width: 200px" />
    <p class="text-h5 text-weight-bold">Contact Us.</p>
  </footer>
  <LoginDialog ref="loginDialog" />
</template>
<script lang="ts">
import KoreaMap from "./partial/KoreaMap.vue";
import IntroduceService from "./partial/IntroduceService.vue";
import BadgesService from "./partial/BadgesService.vue";
import ReviewService from "./partial/ReviewService.vue";
import LoginDialog from "@/components/login/LoginDialog.vue";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainView",
  components: {
    KoreaMap,
    IntroduceService,
    BadgesService,
    ReviewService,
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
