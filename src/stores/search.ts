import { defineStore } from "pinia";

export const useSearchStore = defineStore({
  id: "search",
  state: () => ({
    mtSearchText: "",
    mtPageNum: 0,
  }),
  actions: {
    setSearchText(text: string) {
      this.$state.mtSearchText = text;
    },
    setMtPageNum(num: number) {
      this.$state.mtPageNum = num;
    },
    resetAll() {
      this.$reset();
    },
  },
  getters: {
    getSearchText: (state) => state.mtSearchText,
    getMtPageNum: (state) => state.mtPageNum,
  },
  persist: {
    enabled: true,
  },
});
