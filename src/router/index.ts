import { createRouter, createWebHistory } from "vue-router";
import MainView from "../views/main/MainView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
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
    {
      path: "/mypage",
      component: () => import("../views/mypage/MyPage.vue"),
      children: [
        {
          path: "/mypage/profile/:id",
          name: "ProfileView",
          component: () => import("../views/mypage/profile/ProfileView.vue"),
        },
        {
          path: "/mypage/favorit/:id",
          name: "FavoritMountain",
          component: () => import("../views/mypage/favorit/FavoritMountain.vue"),
        },
      ],
    },
  ],
});

export default router;
