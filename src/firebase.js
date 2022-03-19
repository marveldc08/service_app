// Import the functions you need from the SDKs you need
import { useState, useEffect } from 'react';
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAWFQ1Kf8erYxawtyJGQ9L_rECAGHmmtw",
  authDomain: "service-app-01.firebaseapp.com",
  projectId: "service-app-01",
  storageBucket: "service-app-01.appspot.com",
  messagingSenderId: "898220226414",
  appId: "1:898220226414:web:12754045676cff3c36337f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, app, provider };

export function signUp(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function signIn(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function logOut() {
 return signOut(auth);
}

// custom Hook
 export function useAuth() {
   const [currentUser, setCurrentUser] = useState();


   useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => setCurrentUser(user));
    return unsubscribe;
   },[])

     
   return currentUser;
 }
