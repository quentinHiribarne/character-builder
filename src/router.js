import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: "home",
            path: "/",
            component: () => import("./views/Home.vue"),
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
