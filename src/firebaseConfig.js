// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyHC_4YbCZdrgml0nMg0NfNyvG1YzNb_Q",
  authDomain: "portfolio-1467d.firebaseapp.com",
  projectId: "portfolio-1467d",
  storageBucket: "portfolio-1467d.appspot.com",
  messagingSenderId: "6589466746",
  appId: "1:6589466746:web:31ae516f0da28345db93c3",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
export { db };
