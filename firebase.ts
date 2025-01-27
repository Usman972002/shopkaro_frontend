// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfrOGYq-p83UMilg6sy-tAY7zyNOAFxWA",
  authDomain: "mern-ecommerce-2024-80cb0.firebaseapp.com",
  projectId: "mern-ecommerce-2024-80cb0",
  storageBucket: "mern-ecommerce-2024-80cb0.appspot.com",
  messagingSenderId: "453084609186",
  appId: "1:453084609186:web:85e970d954827643edf5fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;