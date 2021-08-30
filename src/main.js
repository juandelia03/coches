import { createApp } from "vue";
import App from "./App.vue";
import firebase from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyB7YfTGKozGH4uRyUMYe7-dtSsz1qpLhgQ",
  authDomain: "calendar-6ebd2.firebaseapp.com",
  projectId: "calendar-6ebd2",
  storageBucket: "calendar-6ebd2.appspot.com",
  messagingSenderId: "957322049402",
  appId: "1:957322049402:web:535a773904ae446bdec8c3",
};
firebase.initializeApp(firebaseConfig);
createApp(App).mount("#app");
