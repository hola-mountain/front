import { defineStore } from "pinia";

export const useSearchStore = defineStore({
  id: "search",
  state: () => ({
    mtSearchText: "",
  }),
  actions: {
    setSearchText(text: string) {
      this.$state.mtSearchText = text;
    },
    removeText() {
      this.$reset();
    },
  },
  getters: {
    getSearchText: (state) => state.mtSearchText,
  },
  persist: {
    enabled: true,
  },
});
