import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAlc-rgze3tiy89BgQm_XynVAt9fgCQNpQ",
  authDomain: "rail-seatify.firebaseapp.com",
  projectId: "rail-seatify",
  storageBucket: "rail-seatify.appspot.com",
  messagingSenderId: "1073926433562",
  appId: "1:1073926433562:web:20c818b24aef1b70721aa3",
  measurementId: "G-ZTNFHVEDN3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };