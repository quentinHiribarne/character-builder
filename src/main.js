import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebase);

const app = createApp(App);
app.use(router);
app.mount("#app");
