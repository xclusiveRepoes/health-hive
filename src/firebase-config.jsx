import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAR9n0ihlcHo8nc67l_g-7--ionTKydIA8",
  authDomain: "user-crud-f79d9.firebaseapp.com",
  projectId: "user-crud-f79d9",
  storageBucket: "user-crud-f79d9.firebasestorage.app",
  messagingSenderId: "419766241105",
  appId: "1:419766241105:web:cdcda1e4ae2e91a87f7570",
  measurementId: "G-KWSKKY4P9H"
};
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app)