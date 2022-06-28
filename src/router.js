import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../src/views/HomePage.vue"),
    },
    {
      path: "/register",
      component: () => import("../src/views/RegisterPage.vue"),
    },
    {
      path: "/sign-in",
      component: () => import("../src/views/SignInPage.vue"),
    },
  ],
});
export default router;
