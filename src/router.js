import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: "homePage",
            path: "/",
            meta: {
                requiresAuth: true,
            },
            component: () => import("../src/views/HomePage.vue"),
        },
        {
            name: "aboutPage",
            path: "/about",
            component: () => import("../src/views/AboutPage.vue"),
        },
        {
            name: "registerPage",
            path: "/register",
            component: () => import("../src/views/RegisterPage.vue"),
        },
        {
            name: "signInPage",
            path: "/sign-in",
            component: () => import("../src/views/SignInPage.vue"),
        },
    ],
});
export default router;
