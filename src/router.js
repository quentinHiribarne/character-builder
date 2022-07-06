import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: "about",
            path: "/",
            component: () => import("../src/views/About.vue"),
        },
        {
            name: "dashboard",
            path: "/dashboard",
            component: () => import("./views/Dashboard.vue"),
            meta: {
                requiresAuth: true,
            },
        },
        {
            name: "signUp",
            path: "/sign-up",
            component: () => import("./views/SignUp.vue"),
        },
        {
            name: "signInPage",
            path: "/sign-in",
            component: () => import("./views/SignIn.vue"),
        },
    ],
});
export default router;
