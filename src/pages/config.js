// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHkmjogF4L5jlA62j_ZKY7sS2gHG07990",
  authDomain: "sneaker-world-87e4a.firebaseapp.com",
  projectId: "sneaker-world-87e4a",
  storageBucket: "sneaker-world-87e4a.appspot.com",
  messagingSenderId: "62633581397",
  appId: "1:62633581397:web:a69a8dc4106a8f1f542ddc",
  measurementId: "G-CBJ6VRDK7F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};