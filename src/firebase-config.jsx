import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBbyR3ucL1D737bYpDPqPgMwPdTs28UjYE",
  authDomain: "user-crud-460d8.firebaseapp.com",
  projectId: "user-crud-460d8",
  storageBucket: "user-crud-460d8.firebasestorage.app",
  messagingSenderId: "581419334011",
  appId: "1:581419334011:web:5226c828ec6e3f257ee5de",
  measurementId: "G-H22K8XJE7W"
};
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app)