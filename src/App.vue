<template>
    <div>
        <nav>
            <router-link to="/"> Home </router-link> |
            <router-link to="/about"> About </router-link> |
            <span v-if="isLoggedIn">
                <button @click="logout">Logout</button>
            </span>
            <span v-else>
                <router-link to="/sign-up"> Sign-up </router-link> |
                <router-link to="/sign-in"> Login </router-link>
            </span>
        </nav>
        <router-view />
    </div>
</template>

<script>
import { ref } from "vue"; // used for conditional rendering
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "vue-router";

export default {
    name: "App",
    components: {},
    setup() {
        const router = useRouter();
        const isLoggedIn = ref(true);

        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                isLoggedIn.value = true; // if we have a user
            } else {
                isLoggedIn.value = false; // if we do not
            }
        });

        router.beforeEach((to, from, next) => {
            if (to.matched.some((record) => record.meta.requiresAuth)) {
                // this route requires auth, check if logged in
                // if not, redirect to login page.
                if (!isLoggedIn.value) {
                    next({ name: "signInPage" });
                } else {
                    next(); // go to wherever I'm going
                }
            } else {
                next(); // does not require auth, make sure to always call next()!
            }
        });

        const logout = () => {
            signOut(auth)
                .then(() => {
                    router.push("/sign-in");
                })
                .catch((error) => {
                    console.log(error.code, error.message);
                });
        };
        return {
            logout,
            isLoggedIn,
        };
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
