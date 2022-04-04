// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuCIeiwjtifhk3HvYLfLf9TVmRqf1yyAw",
  authDomain: "e-commercefeliceslascows.firebaseapp.com",
  projectId: "e-commercefeliceslascows",
  storageBucket: "e-commercefeliceslascows.appspot.com",
  messagingSenderId: "391485106548",
  appId: "1:391485106548:web:c1a59b0a481e7a2fcbe421"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
