<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld :msg="message" />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ref } from "vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  setup() {
    let email = "quentin.hiribarne@gmail.com";
    let password = "quentin";
    let message = ref("");

    // const user = ref({});
    const errorCode = ref("");
    const errorMessage = ref("");

    // Initialize Firebase Authentication and get a reference to the service
    const auth = getAuth();
    const authenticate = () => {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          message.value = user.uid;
          console.log(user);
        })
        .catch((error) => {
          errorCode.value = error.code;
          errorMessage.value = error.message;
        });
    };

    authenticate();
    return {
      message,
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
