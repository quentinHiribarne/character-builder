<template>
    <div>
        <h1>Create an Account</h1>
        <p><input type="text" placeholder="Email" v-model="email" /></p>
        <p>
            <input type="password" placeholder="Password" v-model="password" />
        </p>
        <p><button @click="register">Submit</button></p>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router"; // import router

const email = ref("");
const password = ref("");
const errorCode = ref("");
const errorMessage = ref("");
const router = useRouter(); // get a reference to our vue router

const register = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email.value, password.value) // need .value because ref()
        .then((userCredential) => {
            console.log("Successfully registered!");
            router.push("/"); // redirect to home
        })
        .catch((error) => {
            errorCode.value = error.code;
            errorMessage.value = error.message;
        });
};
</script>
