
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBU5NacoGCABiv_mPUL5AWp4hfENU2RhI4",
  authDomain: "bdk-chatgpt.firebaseapp.com",
  projectId: "bdk-chatgpt",
  storageBucket: "bdk-chatgpt.firebasestorage.app",
  messagingSenderId: "843198525108",
  appId: "1:843198525108:web:f9968288b7bb37b7da71e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
