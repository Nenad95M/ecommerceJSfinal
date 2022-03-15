// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkpHmPwUkkDhw8gpEiLpB6IrTbc586HWg",
  authDomain: "ecommfinal-c7246.firebaseapp.com",
  projectId: "ecommfinal-c7246",
  databaseURL: "https://ecommfinal-c7246-default-rtdb.europe-west1.firebasedatabase.app",
  storageBucket: "ecommfinal-c7246.appspot.com",
  messagingSenderId: "224112360817",
  appId: "1:224112360817:web:692c7a69452201660b8ad0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;