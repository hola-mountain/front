import { createRouter, createWebHistory } from "vue-router";
import MainView from "../views/main/MainView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: MainView,
    },
    {
      path: "/mountains/:cityId?",
      name: "MountainsView",
      component: () => import("../views/mt/list/MountainsView.vue"),
    },
    {
      path: "/mountains/detail/:mtId",
      name: "MountainDetailView",
      component: () => import("../views/mt/detail/MountainDetailView.vue"),
    },
  ],
});

export default router;
