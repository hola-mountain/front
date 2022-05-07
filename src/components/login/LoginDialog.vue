<template>
  <q-dialog
    v-model="isOpen"
    transition-show="rotate"
    transition-hide="rotate"
    @hide="reset"
  >
    <SignIn v-if="isSigninMode" @view-singup="isSigninMode = false" />
    <SignUp v-else @view-singin="isSigninMode = true" />
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
    const id = ref("");
    const password = ref("");
    const saveInfo = ref(false);

    const isSigninMode = ref(true);

    const openDialog = () => {
      isOpen.value = true;
    };

    const reset = () => {
      id.value = "";
      password.value = "";
      saveInfo.value = true;
      isSigninMode.value = true;
    };
    return {
      id,
      password,
      isOpen,
      openDialog,
      saveInfo,
      isSigninMode,
      reset,
    };
  },
});
</script>
