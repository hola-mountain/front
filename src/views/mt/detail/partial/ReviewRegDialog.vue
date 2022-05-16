<template>
  <q-dialog
    v-model="onDialog"
    transition-show="rotate"
    transition-hide="rotate"
    class="dialog"
  >
    <q-card class="container">
      <q-card-section>
        <div class="q-pa-md text-h6">리뷰등록</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="q-px-md">
          <q-input outlined v-model="registerForm.title" label="제목" />
        </div>
        <div class="q-pa-md">
          <span class="q-mx-md">평점</span>
          <q-rating
            v-model="registerForm.rating"
            size="2em"
            :max="5"
            color="star"
          />
        </div>
        <div class="q-pa-md">
          <q-input
            v-model="registerForm.content"
            outlined
            type="textarea"
            label="내용"
          />
        </div>
        <div class="q-pa-md">
          <q-uploader
            label="이미지 업로드"
            style="width: 100%"
            @added="uploadImg"
            @removed="removeImg"
          >
            <template v-slot:header="scope">
              <div class="row no-wrap items-center q-pa-sm q-gutter-xs">
                <div class="col">
                  <div class="q-uploader__title q-mx-md">이미지 업로드</div>
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

      <q-card-actions align="right">
        <q-btn flat label="Decline" color="primary" v-close-popup />
        <q-btn flat label="Accept" color="primary" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
<script lang="ts">
import type { ReviewRegForm } from "@/utils/typeInterface";
import { ref, defineComponent } from "vue";
export default defineComponent({
  name: "ReviewRegDialog",
  setup() {
    const registerForm = ref<ReviewRegForm>({
      title: "",
      content: "",
      rating: 0,
      img: null,
    });
    const onDialog = ref(false);
    const openDialog = () => {
      onDialog.value = true;
    };
    const uploadImg = (info: File[]) => {
      registerForm.value.img = info[0];
    };
    const removeImg = () => {
      registerForm.value.img = null;
    };

    return {
      onDialog,
      openDialog,
      registerForm,
      uploadImg,
      removeImg,
    };
  },
});
</script>
