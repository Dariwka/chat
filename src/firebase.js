import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "didichat-c4e01.firebaseapp.com",
  projectId: "didichat-c4e01",
  storageBucket: "didichat-c4e01.appspot.com",
  messagingSenderId: "27304254326",
  appId: "1:27304254326:web:fdc6ca258f3cb3c7a37857",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
