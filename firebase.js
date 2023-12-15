// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import constants from "./src/Constants/constants";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: constants?.API_KEY,
  // "AIzaSyBV3psgA8aORP3raHhrtfI1CemdbdX4100",
  authDomain: constants?.AUTH_DOMAIN,
  // "fir-auth-8e4d0.firebaseapp.com",
  projectId: constants?.PROJECT_ID,
  // "fir-auth-8e4d0",
  storageBucket: constants?.STORAGE_BUCKET,
  // "fir-auth-8e4d0.appspot.com",
  messagingSenderId: constants?.MESSAGING_SENDER_ID,
  // "518506692258",
  appId: constants?.APP_ID,
  //  "1:518506692258:web:d23618a0c74f301eb5a1fb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
