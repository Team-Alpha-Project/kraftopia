// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpo4xxmVUoWiCQzmFiCAtdvexn5G-huu8",
  authDomain: "otp-login-c5905.firebaseapp.com",
  projectId: "otp-login-c5905",
  storageBucket: "otp-login-c5905.appspot.com",
  messagingSenderId: "103822102065",
  appId: "1:103822102065:web:90bf4ae5a70cc8b98d4f10",
  measurementId: "G-67NW6ZQWZ4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
