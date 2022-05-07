<template>
  <q-dialog v-model="isOpen" transition-show="rotate" transition-hide="rotate">
    <q-card class="q-pa-lg">
      <q-card-section class="text-center">
        <q-avatar
          size="80px"
          font-size="50px"
          color="green-10"
          text-color="white"
          icon="person"
        />
        <div class="text-h6 q-my-md">Sign In</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="q-pa-md" style="width: 350px">
          <q-input outlined v-model="id" label="EMAIL" class="q-mb-md" />
          <q-input
            v-model="password"
            outlined
            type="password"
            label="PASSWORD"
            class="q-mb-md"
          />
          <q-btn
            color="green-10"
            label="Sign In"
            style="width: 100%"
            class="q-mb-md"
          />
          <q-btn color="brown-7" label="Sign Up" style="width: 100%" />
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>
<script lang="ts">
import { ref, defineComponent } from "vue";

export default defineComponent({
  name: "SignInUpDialog",
  setup() {
    const isOpen = ref(false);
    const id = ref("");
    const password = ref("");
    const openDialog = () => {
      isOpen.value = true;
    };
    return {
      id,
      password,
      isOpen,
      openDialog,
    };
  },
});
</script>
