<template>
  <q-dialog
    v-model="isOpen"
    transition-show="rotate"
    transition-hide="rotate"
    class="login-dialog"
    @hide="reset"
  >
    <div class="container" v-if="isOpen">
      <SignIn
        v-if="isSigninMode"
        @view-singup="isSigninMode = false"
        @success-signin="isOpen = false"
        ref="signinRef"
      />
      <SignUp
        v-else
        @view-singin="isSigninMode = true"
        @success-signup="successSignup"
      />
    </div>
  </q-dialog>
</template>
<script lang="ts">
import { ref, defineComponent } from "vue";
import SignIn from "./partial/SignIn.vue";
import SignUp from "./partial/SignUp.vue";
export default defineComponent({
  name: "SignInUpDialog",
  components: { SignIn, SignUp },
  setup() {
    const isOpen = ref(false);
    const isSigninMode = ref(true);

    const signinRef = ref();

    const openDialog = () => {
      isOpen.value = true;
    };

    const reset = () => {
      isSigninMode.value = true;
    };

    const successSignup = (joinNickName: string) => {
      isSigninMode.value = true;
    };

    return {
      signinRef,
      isOpen,
      openDialog,
      isSigninMode,
      successSignup,
      reset,
    };
  },
});
</script>
