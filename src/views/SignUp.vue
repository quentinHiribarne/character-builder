<template>
    <div class="mx-60 mt-8 flex flex-col justify-center">
        <h1 class="p-2 font-medium text-lg text-gray-900">
            Créez un compte pour nous rejoindre
        </h1>
        <div class="p-4 grid grid-cols-6 gap-4">
            <div class="col-span-6 sm:col-span-3">
                <label
                    class="block font-medium text-gray-900 text-left"
                    for="email"
                >
                    Email
                </label>
                <input
                    class="px-3 py-2 w-full rounded-md border border-gray-300 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                    type="email"
                    name="email"
                    placeholder="email@example.com"
                    v-model="email"
                />
            </div>
            <div class="col-span-6 sm:col-span-3">
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
            <div class="col-span-6 sm:col-span-3">
                <div>
                    <label
                        class="block font-medium text-gray-900 text-left"
                        for="pseudo"
                    >
                        Pseudo
                    </label>
                </div>
                <div>
                    <input
                        class="px-3 py-2 w-full rounded-md border border-gray-300 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                        type="text"
                        name="pseudo"
                        v-model="username"
                    />
                </div>
            </div>
            <div class="col-span-6">
                <button
                    class="px-3 py-2 rounded-md bg-emerald-500 hover:bg-emerald-400 text-white font-medium uppercase w-full"
                    @click="register"
                >
                    Créer mon compte
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import db from "../firebase/init.js";

export default {
    name: "SignUp",
    setup() {
        const router = useRouter(); // get a reference to our vue router

        const email = ref("");
        const password = ref("");
        const username = ref("");

        const errorCode = ref("");
        const errorMessage = ref("");

        const register = () => {
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, email.value, password.value) // need .value because ref()
                .then(async (userCredential) => {
                    await createUser(userCredential.user.uid);
                })
                .then(() => {
                    router.push("/sign-in"); // redirect to home
                })
                .catch((error) => {
                    errorCode.value = error.code;
                    errorMessage.value = error.message;
                });
        };

        const createUser = async (uid) => {
            console.log(uid);

            await setDoc(doc(db, "users", uid), {
                username: username.value,
            });
        };

        return {
            router,

            email,
            password,
            username,
            errorCode,
            errorMessage,

            register,
            createUser,
        };
    },
};
</script>
