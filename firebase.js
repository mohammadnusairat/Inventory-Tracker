// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3hqCn_pwH8_9Pzh650FIZNp2fExj2n8Q",
  authDomain: "inventory-management-bd0e9.firebaseapp.com",
  projectId: "inventory-management-bd0e9",
  storageBucket: "inventory-management-bd0e9.appspot.com",
  messagingSenderId: "387874668308",
  appId: "1:387874668308:web:2b653fabce3fa76d088c01",
  measurementId: "G-4HT4R2YTLG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore}