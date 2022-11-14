// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAjzmOQUwPqxzjnSj_lT5mi0Cd8jzz76OM",
    authDomain: "songsari-f1107.firebaseapp.com",
    projectId: "songsari-f1107",
    storageBucket: "songsari-f1107.appspot.com",
    messagingSenderId: "270463492610",
    appId: "1:270463492610:web:8931dde21590463e8ffd1b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const firebaseStorage = getStorage(app);

export const auth = getAuth(app);
