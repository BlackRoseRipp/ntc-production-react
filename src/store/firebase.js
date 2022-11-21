// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCu2BmLCN99rprMC1ulmoTdyda6EGXqClU",
  authDomain: "ovalab-monkeypox-scheduler.firebaseapp.com",
  projectId: "ovalab-monkeypox-scheduler",
  storageBucket: "ovalab-monkeypox-scheduler.appspot.com",
  messagingSenderId: "23477663618",
  appId: "1:23477663618:web:d73c2dbbeac7878b44819b",
  measurementId: "G-8QRFH47E5L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
export const auth = getAuth();
