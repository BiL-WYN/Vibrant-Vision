import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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
const analytics = getAnalytics(app);
export default {app, analytics}