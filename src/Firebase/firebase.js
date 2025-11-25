// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOsoMg_REvHkhoXit-vPQHt3Cij7UVHSw",
  authDomain: "next-js-app-b9e9b.firebaseapp.com",
  projectId: "next-js-app-b9e9b",
  storageBucket: "next-js-app-b9e9b.firebasestorage.app",
  messagingSenderId: "715070166538",
  appId: "1:715070166538:web:183be7a93089a03df271f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)