<template>
  <div>
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
          <div class="q-pa-md text-h6 text-bold">{{ mountainName }}</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="q-px-md">
            <q-input
              outlined
              v-model="updateForm.title"
              label="제목"
              :rules="[inputRequiredValidation]"
              ref="titleRef"
            />
          </div>
          <div class="q-pa-md">
            <span class="q-mx-md">평점</span>
            <q-rating
              v-model="updateForm.star"
              size="2em"
              :max="10"
              color="star"
            />
          </div>
          <div class="q-pa-md">
            <q-input
              v-model="updateForm.comment"
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
            label="수정"
            class="text-bold text-h6"
            color="primary"
            @click="submitForm"
          />
          <q-btn
            flat
            label="삭제"
            class="text-bold text-h6"
            color="negative"
            @click="secondDialog = true"
          />
          <q-btn
            flat
            label="취소"
            class="text-bold text-h6"
            color="dark"
            v-close-popup
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <q-dialog
      v-model="secondDialog"
      persistent
      transition-show="scale"
      transition-hide="scale"
    >
      <q-card>
        <q-card-section class="q-pa-xl text-bold">
          해당 리뷰를 삭제하시겠습니까?
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn
            flat
            label="확인"
            color="primary"
            v-close-popup
            @click="deleteReview"
          />
          <q-btn flat label="취소" color="negative" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>
<script lang="ts">
import type { ReviewList, ReviewRegForm } from "@/utils/typeInterface";
import { ref, defineComponent } from "vue";
import {
  deleteMountainReview,
  thumbnailFileUpload,
  updateMountainReview,
} from "@/apis/mountainApis";
import { successAlert, inputRequiredValidation } from "@/utils/common";

export default defineComponent({
  name: "ReviewRegDialog",
  emits: ["success-work"],
  setup(props, { emit }) {
    const updateForm = ref<ReviewRegForm>({
      title: "",
      comment: "",
      userId: 0,
      star: 10,
      nickname: "",
    });
    const mountainName = ref("");
    const mtId = ref(0);
    const reviewId = ref(0);
    const thumbImg = ref<File | null>(null);

    const commentRef = ref();
    const titleRef = ref();

    const onDialog = ref(false);
    const secondDialog = ref(false);

    const openDialog = (info: ReviewList) => {
      updateForm.value.comment = info.comment;
      updateForm.value.title = info.title;
      updateForm.value.userId = info.userId;
      updateForm.value.star = info.star;
      updateForm.value.nickname = info.nickname;
      mountainName.value = info.name;
      mtId.value = info.mountainId;
      reviewId.value = info.ratingId;
      onDialog.value = true;
    };

    const uploadImg = (info: File[]) => {
      thumbImg.value = info[0];
    };
    const removeImg = () => {
      thumbImg.value = null;
    };
    const reset = () => {
      updateForm.value.title = "";
      updateForm.value.comment = "";
      updateForm.value.star = 10;
      thumbImg.value = null;
    };

    const submitForm = () => {
      commentRef.value.validate();
      titleRef.value.validate();

      if (!commentRef.value.hasError && !titleRef.value.hasError) {
        updateReview();
      }
    };

    const updateReview = async () => {
      const result = await updateMountainReview(
        mtId.value,
        reviewId.value,
        updateForm.value
      );
      if (result) {
        if (thumbImg.value) {
          imgUpload(result.id);
        } else {
          successWork("리뷰가 수정되었습니다!");
        }
      }
    };

    const imgUpload = async (id: number) => {
      const result = await thumbnailFileUpload(id, thumbImg.value as File);
      if (result) {
        successWork("리뷰가 수정되었습니다!");
      }
    };

    const successWork = (msg: string) => {
      successAlert(msg);
      emit("success-work");
      onDialog.value = false;
    };

    const deleteReview = async () => {
      const result = await deleteMountainReview(mtId.value, reviewId.value);
      if (result) {
        successWork("리뷰가 삭제되었습니다.");
      }
    };

    return {
      onDialog,
      openDialog,
      updateForm,
      uploadImg,
      removeImg,
      reset,
      updateReview,
      inputRequiredValidation,
      commentRef,
      titleRef,
      submitForm,
      secondDialog,
      mountainName,
      deleteReview,
    };
  },
});
</script>
