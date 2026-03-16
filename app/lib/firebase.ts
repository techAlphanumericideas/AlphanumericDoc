// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5R5JnAHkTo_CBYCVyqNEGkfJkxVID870",
  authDomain: "alphanumericdoc.firebaseapp.com",
  projectId: "alphanumericdoc",
  storageBucket: "alphanumericdoc.firebasestorage.app",
  messagingSenderId: "144191329264",
  appId: "1:144191329264:web:82fd2cfdc87d3933aa0335"
};

// Initialize Firebase


// Initialize Firebase
// const app =!getApps.length? initializeApp(firebaseConfig): getApp()
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();

 export {auth,provider}