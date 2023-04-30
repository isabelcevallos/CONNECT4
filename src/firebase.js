// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAT0KrhDNcFR-hAk90o1AtEK3wdkIox26A",
  authDomain: "connect4-88d1b.firebaseapp.com",
  projectId: "connect4-88d1b",
  storageBucket: "connect4-88d1b.appspot.com",
  messagingSenderId: "185982724357",
  appId: "1:185982724357:web:e7f79b1e9897ec63eaef6c",
  measurementId: "G-K6Y64R58L6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);