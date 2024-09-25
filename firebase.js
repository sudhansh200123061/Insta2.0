// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:  process.env.FIREBASE_API,
  authDomain: "insta-2-yt-fc85b.firebaseapp.com",
  projectId: "insta-2-yt-fc85b",
  storageBucket: "insta-2-yt-fc85b.appspot.com",
  messagingSenderId: process.env.MESSENGER_ID,
  appId: process.env.FIREBASE_ID
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig):getApp;
const db = getFirestore();
const storage =getStorage();

export {app, db, storage};