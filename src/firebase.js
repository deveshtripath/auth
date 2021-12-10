import { useEffect, useState } from "react";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAEcsa9YTrEDD8OTCpw1f7FD6HQPXpuzWQ",
    authDomain: "authenticationg-afb52.firebaseapp.com",
    projectId: "authenticationg-afb52",
    storageBucket: "authenticationg-afb52.appspot.com",
    messagingSenderId: "583915620285",
    appId: "1:583915620285:web:fbde681a4a7160a49a34d4",
    measurementId: "G-EXE9SGL03R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();