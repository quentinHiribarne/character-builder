<template>
    <div class="mx-60 mt-8 flex flex-col justify-center">
        <h1 class="p-2 font-medium text-lg text-gray-900">Connectez-vous !</h1>
        <div class="p-4 grid grid-cols-6 gap-4">
            <div class="col-span-6">
                <label
                    class="block font-medium text-gray-900 text-left"
                    for="email"
                >
                    Email
                </label>
                <input
                    class="px-3 py-2 w-full rounded-md border border-gray-300 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                    type="text"
                    name="email"
                    v-model="email"
                />
            </div>
            <div class="col-span-6">
                <div>
                    <label
                        class="block font-medium text-gray-900 text-left"
                        for="password"
                    >
                        Mot de passe
                    </label>
                </div>
                <div>
                    <input
                        class="px-3 py-2 w-full rounded-md border border-gray-300 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                        type="password"
                        name="password"
                        v-model="password"
                    />
                </div>
            </div>
            <div class="col-span-6">
                <button
                    class="px-3 py-2 rounded-md bg-emerald-500 hover:bg-emerald-400 text-white font-medium uppercase w-full"
                    @click="signIn"
                >
                    Connexion
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, computed } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router"; // import router
import { useStore } from "vuex";

export default {
    name: "SignIn",
    setup() {
        const router = useRouter(); // get a reference to our vue router
        const store = useStore();

        const email = ref("");
        const password = ref("");
        const errorCode = ref("");
        const errorMessage = ref("");

        const user = computed(() => store.state.user);

        const signIn = () => {
            const auth = getAuth();
            console.log(auth, email.value, password.value);
            signInWithEmailAndPassword(auth, email.value, password.value)
                .then((userCredential) => {
                    console.log("Successfully logged in!");
                    console.log(userCredential.user.uid);
                    store.commit("user/setUserUid", userCredential.user.uid);
                })
                .then(() => {
                    router.push("/"); // redirect to home
                })
                .catch((error) => {
                    errorCode.value = error.code;
                    errorMessage.value = error.message;
                });
        };

        return {
            router,
            store,

            email,
            password,
            errorCode,
            errorMessage,
            user,

            signIn,
        };
    },
};
</script>
