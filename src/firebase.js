// import firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBLpF1sA_8XcmXrg_uqvfOl01_4Bv9iKvg",
  authDomain: "netflix-clone-296.firebaseapp.com",
  projectId: "netflix-clone-296",
  storageBucket: "netflix-clone-296.appspot.com",
  messagingSenderId: "1084286252209",
  appId: "1:1084286252209:web:8921f567a7439bb3095e90",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export { auth, createUserWithEmailAndPassword };
export default db;
