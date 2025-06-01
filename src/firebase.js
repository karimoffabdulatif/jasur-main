// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCQAziCU_EVPFjJxt1UB6e2VHh-TYVuB6I",
  authDomain: "taklifnoma-8472b.firebaseapp.com",
  projectId: "taklifnoma-8472b",
  storageBucket: "taklifnoma-8472b.appspot.com",
  messagingSenderId: "1033480939464",
  appId: "1:1033480939464:web:207d0f15255947d01982fd",
  measurementId: "G-1DD4JLL8EF"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
