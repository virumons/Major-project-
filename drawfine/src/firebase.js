// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
import {getFirestore} from "@firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIkHiDhifL8W-_T1TzpF4yegO00JFkbR4",
  authDomain: "drawfinedb.firebaseapp.com",
  projectId: "drawfinedb",
  storageBucket: "drawfinedb.firebasestorage.app",
  messagingSenderId: "450274054993",
  appId: "1:450274054993:web:c19b9cfa1a05453c137970",
  measurementId: "G-LKKXH18CBL"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
//const firestore = getFirestore(app);
const auth = getAuth(app);
const db = getFirestore(app);

export default firebaseConfig;
export {app,auth,db};