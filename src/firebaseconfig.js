// src/firebase.js
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA1fasRsoOFaR7LSUa6xZj_oi0Zyrdl5l4",
  authDomain: "hikerent-4cfc7.firebaseapp.com",
  projectId: "hikerent-4cfc7",
  storageBucket: "hikerent-4cfc7.firebasestorage.app",
  messagingSenderId: "347900640418",
  appId: "1:347900640418:web:b5819c6d3332478c802bfb",
  measurementId: "G-3LKDN5E282",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

export default app;
