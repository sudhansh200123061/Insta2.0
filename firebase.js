// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDw3zHfP19WY92MnxM57brag_vID5-xriQ",
  authDomain: "insta-2-yt-fc85b.firebaseapp.com",
  projectId: "insta-2-yt-fc85b",
  storageBucket: "insta-2-yt-fc85b.appspot.com",
  messagingSenderId: "654983296068",
  appId: "1:654983296068:web:44466071328a4216ae7811"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig):getApp;
const db = getFirestore();
const storage =getStorage();

export {app, db, storage};