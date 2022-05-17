<template>
  <q-dialog
    v-model="onDialog"
    transition-show="rotate"
    transition-hide="rotate"
    class="dialog"
    persistent
    @hide="reset"
  >
    <q-card class="container">
      <q-card-section>
        <div class="q-pa-md text-h6 text-bold">리뷰등록</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="q-px-md">
          <q-input
            outlined
            v-model="registerForm.title"
            label="제목"
            :rules="[inputRequiredValidation]"
            ref="titleRef"
          />
        </div>
        <div class="q-pa-md">
          <span class="q-mx-md">평점</span>
          <q-rating
            v-model="registerForm.star"
            size="2em"
            :max="10"
            color="star"
          />
        </div>
        <div class="q-pa-md">
          <q-input
            v-model="registerForm.comment"
            outlined
            ref="commentRef"
            type="textarea"
            label="내용"
            :rules="[inputRequiredValidation]"
          />
        </div>
        <div class="q-pa-md">
          <q-uploader
            label="이미지 업로드"
            style="width: 100%"
            @added="uploadImg"
            @removed="removeImg"
            color="teal"
          >
            <template v-slot:header="scope">
              <div class="row no-wrap items-center q-pa-sm q-gutter-xs">
                <div class="col">
                  <div class="q-uploader__title q-mx-md">
                    썸네일 이미지 업로드
                  </div>
                </div>
                <q-btn
                  v-if="scope.canAddFiles"
                  type="a"
                  icon="add_box"
                  @click="scope.pickFiles"
                  round
                  dense
                  flat
                >
                  <q-uploader-add-trigger />
                  <q-tooltip>Pick Files</q-tooltip>
                </q-btn>
              </div>
            </template>
            <template v-slot:list="scope">
              <q-list separator>
                <q-item v-for="file in scope.files" :key="file.__key">
                  <q-item-section>
                    <q-item-label class="full-width ellipsis">
                      {{ file.name }}
                    </q-item-label>

                    <q-item-label caption>
                      Status: {{ file.__status }}
                    </q-item-label>

                    <q-item-label caption>
                      {{ file.__sizeLabel }} / {{ file.__progressLabel }}
                    </q-item-label>
                  </q-item-section>

                  <q-item-section v-if="file.__img" thumbnail class="gt-xs">
                    <img :src="file.__img.src" />
                  </q-item-section>

                  <q-item-section top side>
                    <q-btn
                      class="gt-xs"
                      size="12px"
                      flat
                      dense
                      round
                      icon="delete"
                      @click="scope.removeFile(file)"
                    />
                  </q-item-section>
                </q-item>
              </q-list>
            </template>
          </q-uploader>
        </div>
      </q-card-section>

      <q-card-actions align="right" class="q-px-md">
        <q-btn
          flat
          label="등록"
          class="text-bold text-h6"
          color="primary"
          @click="submitForm"
        />
        <q-btn
          flat
          label="취소"
          class="text-bold text-h6"
          color="negative"
          v-close-popup
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
<script lang="ts">
import type { ReviewRegForm } from "@/utils/typeInterface";
import { ref, defineComponent, onMounted } from "vue";
import { useUserStore } from "@/stores/user";
import { useRoute } from "vue-router";
import {
  registerMountainReview,
  thumbnailFileUpload,
} from "@/apis/mountainApis";
import {
  successAlert,
  inputRequiredValidation,
  errorAlert,
} from "@/utils/common";

export default defineComponent({
  name: "ReviewRegDialog",
  emits: ["success-reg"],
  setup(props, { emit }) {
    const route = useRoute();
    const userStore = useUserStore();
    const registerForm = ref<ReviewRegForm>({
      title: "",
      comment: "",
      userId: 0,
      star: 10,
      nickname: "",
    });
    const thumbImg = ref<File | null>(null);

    const commentRef = ref();
    const titleRef = ref();

    const onDialog = ref(false);
    const openDialog = () => {
      onDialog.value = true;
    };
    const uploadImg = (info: File[]) => {
      thumbImg.value = info[0];
    };
    const removeImg = () => {
      thumbImg.value = null;
    };
    const reset = () => {
      registerForm.value.title = "";
      registerForm.value.comment = "";
      registerForm.value.star = 0;
      thumbImg.value = null;
    };

    const submitForm = () => {
      commentRef.value.validate();
      titleRef.value.validate();

      if (!commentRef.value.hasError && !titleRef.value.hasError) {
        registerReview();
      }
    };

    const registerReview = async () => {
      const result = await registerMountainReview(
        route.params.mtId as string,
        registerForm.value
      );
      if (result) {
        if (thumbImg.value) {
          imgUpload(result.id);
        } else {
          successWork();
        }
      }
    };

    const imgUpload = async (id: number) => {
      const result = await thumbnailFileUpload(id, thumbImg.value as File);
      if (result) {
        successWork();
      }
    };

    const successWork = () => {
      successAlert("리뷰가 등록되었습니다!");
      emit("success-reg");
      onDialog.value = false;
    };

    onMounted(() => {
      registerForm.value.nickname = userStore.getNickName;
      registerForm.value.userId = userStore.getUserId;
    });

    return {
      onDialog,
      openDialog,
      registerForm,
      uploadImg,
      removeImg,
      reset,
      registerReview,
      inputRequiredValidation,
      commentRef,
      titleRef,
      submitForm,
    };
  },
});
</script>
