// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrHkjfoZ_GQFlloauemgH98F4LKPaFLfY",
  authDomain: "ladooshop-991be.firebaseapp.com",
  projectId: "ladooshop-991be",
  storageBucket: "ladooshop-991be.appspot.com",
  messagingSenderId: "790346226558",
  appId: "1:790346226558:web:c503e809690a1bd9de312f",
  measurementId: "G-E0EBRBJB0T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
