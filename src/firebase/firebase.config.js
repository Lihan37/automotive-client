// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3kPosmXP-6uDHsaZD3DfXOJzUISFHrpM",
  authDomain: "automotive-store-7d9d6.firebaseapp.com",
  projectId: "automotive-store-7d9d6",
  storageBucket: "automotive-store-7d9d6.appspot.com",
  messagingSenderId: "153729011711",
  appId: "1:153729011711:web:5b2f5288147d27afb7e1ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;