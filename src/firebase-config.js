// Import the functions you need from the SDKs you need


import { initializeApp } from "firebase/app";

import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCf60skbYBqG5mPY0-XBqrOE_tJngO1hCw",
  authDomain: "reactnoteapp-6a39a.firebaseapp.com",
  projectId: "reactnoteapp-6a39a",
  storageBucket: "reactnoteapp-6a39a.appspot.com",
  messagingSenderId: "262459001026",
  appId: "1:262459001026:web:c7afa295a9d1b09302535b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)