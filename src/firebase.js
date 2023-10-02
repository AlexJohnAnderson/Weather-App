// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDUQ4bpf_5BLQNiffGgwR-HTTJFJdcpxEw",
    authDomain: "weather-app-2f5c2.firebaseapp.com",
    projectId: "weather-app-2f5c2",
    storageBucket: "weather-app-2f5c2.appspot.com",
    messagingSenderId: "512997135549",
    appId: "1:512997135549:web:ce04482b3e42f39e69d3d4",
    measurementId: "G-YG6XKX3TGD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);