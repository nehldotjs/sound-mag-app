import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object

const firebaseConfig = {
  apiKey: "AIzaSyCqb0FSv5cd1Hs6a5gUVJUwJvYvczrqHEM",
  authDomain: "auth-60b39.firebaseapp.com",
  projectId: "auth-60b39",
  storageBucket: "auth-60b39.appspot.com",
  messagingSenderId: "444690090076",
  appId: "1:444690090076:web:b0d27babd8b22e9b76fe99"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
