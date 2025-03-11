import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBv6dF2Tl60W3TI8rJB87BG7YM-7YHphk0",
  authDomain: "lexi-3a671.firebaseapp.com",
  projectId: "lexi-3a671",
  storageBucket: "lexi-3a671.firebasestorage.app",
  messagingSenderId: "897940122020",
  appId: "1:897940122020:web:1aa40c3ad4d094bcd7f931"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export {app, auth}
export const db=getFirestore(app);