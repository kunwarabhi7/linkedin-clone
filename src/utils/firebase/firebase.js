// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {Firestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDF-kHTWjuURVQhtQK_tu9OMjPq3YDrhY4",
  authDomain: "linkedin-8bf1e.firebaseapp.com",
  projectId: "linkedin-8bf1e",
  storageBucket: "linkedin-8bf1e.appspot.com",
  messagingSenderId: "637118306911",
  appId: "1:637118306911:web:9a534eb4f8a059b7e959ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db= Firestore(app)