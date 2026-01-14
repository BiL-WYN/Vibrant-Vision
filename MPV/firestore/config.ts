// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAf58cg0EOwUWDwNCW_OIsoQRcLl9eVGKI",
  authDomain: "vibrantvisiondatabase.firebaseapp.com",
  projectId: "vibrantvisiondatabase",
  storageBucket: "vibrantvisiondatabase.firebasestorage.app",
  messagingSenderId: "109225401812",
  appId: "1:109225401812:web:94e8069e8ea7a0ae3f8a41",
  measurementId: "G-Y0FCW6QFH0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth();
export const db= getFirestore(app);
export const googleProvider = new GoogleAuthProvider();


export default app;