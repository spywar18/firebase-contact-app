// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2aJyPKbgUeIKWUWBBfEaG4h7XEagjvWI",
  authDomain: "vite-contact-4c491.firebaseapp.com",
  projectId: "vite-contact-4c491",
  storageBucket: "vite-contact-4c491.firebasestorage.app",
  messagingSenderId: "714472177571",
  appId: "1:714472177571:web:d72721d642ac70f9756416"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);