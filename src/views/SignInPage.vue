<template>
    <div>
        <h1>Login to Your Account</h1>
        <p><input type="text" placeholder="Email" v-model="email" /></p>
        <p>
            <input type="password" placeholder="Password" v-model="password" />
        </p>
        <p><button @click="signIn">Submit</button></p>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router"; // import router

const email = ref("");
const password = ref("");
const errorCode = ref("");
const errorMessage = ref("");
const router = useRouter(); // get a reference to our vue router

const signIn = () => {
    const auth = getAuth();
    console.log(auth, email.value, password.value);
    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            console.log("Successfully logged in!");
            router.push("/"); // redirect to home
        })
        .catch((error) => {
            errorCode.value = error.code;
            errorMessage.value = error.message;
        });
};
</script>
