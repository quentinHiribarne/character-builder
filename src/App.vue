<template>
  <div>
    <nav>
      <router-link to="/"> Home </router-link> |
      <router-link to="/register"> Register </router-link> |
      <router-link to="/sign-in"> Login </router-link> |
    </nav>
    <router-view />
  </div>
</template>

<script>
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ref } from "vue";

const firebaseConfig = {
  apiKey: "AIzaSyD1X7FDQ66jFw2stfe6Cx-UCDoxtAwAjzI",
  authDomain: "character-builder-33d77.firebaseapp.com",
  databaseURL:
    "https://character-builder-33d77-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "character-builder-33d77",
  storageBucket: "character-builder-33d77.appspot.com",
  messagingSenderId: "434435830572",
  appId: "1:434435830572:web:bb7fc76939605dccf3f289",
  measurementId: "G-LFM4SCRHLT",
};

export default {
  name: "App",
  components: {},
  setup() {
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

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
