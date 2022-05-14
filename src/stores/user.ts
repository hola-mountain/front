import type { SigninResponce } from "@/utils/typeInterface";
import { defineStore } from "pinia";

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    userId: 0,
    userNickName: "",
    accessToken: "",
    refreshToken: "",
  }),
  actions: {
    setUser(info: SigninResponce) {
      this.$state.accessToken = info.accessToken;
      this.$state.refreshToken = info.refreshToken;
    },
    setUserNickName(name: string) {
      this.$state.userNickName = name;
    },
    logOutUser() {
      this.$reset();
    },
  },
  getters: {
    getAccessToken: (state) => state.accessToken,
    getRefreshToken: (state) => state.refreshToken,
    getNickName: (state) => state.userNickName,
    getUserId: (state) => state.userId,
  },
  persist: {
    enabled: true,
  },
});
