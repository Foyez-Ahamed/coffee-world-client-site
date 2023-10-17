// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhpzchtBS3kYlv4ca9_UIn7OE6dQ3RSs8",
  authDomain: "coffee-world-client-site.firebaseapp.com",
  projectId: "coffee-world-client-site",
  storageBucket: "coffee-world-client-site.appspot.com",
  messagingSenderId: "3043363270",
  appId: "1:3043363270:web:fd152aab1a7fa2aaee8ac7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;