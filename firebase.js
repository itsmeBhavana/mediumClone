// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import {GoogleAuthProvider} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBi-7vDLQ3Qk92b2ybxIlU2A4DVuUXDJNY",
  authDomain: "medium-clone-replit-42c66.firebaseapp.com",
  projectId: "medium-clone-replit-42c66",
  storageBucket: "medium-clone-replit-42c66.appspot.com",
  messagingSenderId: "403320532397",
  appId: "1:403320532397:web:79188aa7e3838133564524"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db }