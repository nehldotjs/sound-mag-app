import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCqb0FSv5cd1Hs6a5gUVJUwJvYvczrqHEM",
  authDomain: "auth-60b39.firebaseapp.com",
  projectId: "auth-60b39",
  storageBucket: "auth-60b39.appspot.com",
  messagingSenderId: "444690090076",
  appId: "1:444690090076:web:b0d27babd8b22e9b76fe99"
};

export const GOOGLE_PROVIDER = new GoogleAuthProvider();
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
