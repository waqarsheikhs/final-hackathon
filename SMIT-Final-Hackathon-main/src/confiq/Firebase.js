import { initializeApp } from "firebase/app";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from "firebase/auth";
import {
    getFirestore,
    collection,
    doc,
    setDoc,
    query,
    where,
    onSnapshot,
    updateDoc,
    getDoc,
    getDocs
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDjLURYR7URUBvSQfl-iXXavF3EjoQOQgM",
    authDomain: "smit-final-project.firebaseapp.com",
    projectId: "smit-final-project",
    storageBucket: "smit-final-project.appspot.com",
    messagingSenderId: "896752651720",
    appId: "1:896752651720:web:51f9c248862ff3db54c4fd"
};
initializeApp(firebaseConfig)
const db = getFirestore();
const auth = getAuth();
export {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    db,
    collection,
    doc,
    setDoc,
    query,
    where,
    onSnapshot,
    updateDoc,
    getDoc,
    getDocs
};