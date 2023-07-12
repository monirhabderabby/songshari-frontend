// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Shongshari Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCENHAW7l7aCMr5E1Nc7IdFjW37DZFbFLA",
    authDomain: "shongshari-8235e.firebaseapp.com",
    projectId: "shongshari-8235e",
    storageBucket: "shongshari-8235e.appspot.com",
    messagingSenderId: "548796884677",
    appId: "1:548796884677:web:7192298133e6cac83f32ac",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const firebaseStorage = getStorage(app);

export const auth = getAuth(app);
