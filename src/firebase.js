// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  RecaptchaVerifier,
  signInWithPhoneNumber
} from "firebase/auth";
import {
  updateDoc,
  deleteDoc,
  getFirestore,
  doc,
  getDoc,
  setDoc,
  addDoc,
  collection,
  getDocs
} from "firebase/firestore";

// --- MODIFICATIONS START ---

// Build the Firebase config from individual environment variables
// This approach is more robust than parsing a JSON string
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// Validate that required environment variables exist
if (!firebaseConfig.apiKey || !firebaseConfig.projectId) {
  throw new Error("Firebase configuration is incomplete. Please check your environment variables.");
}

// --- MODIFICATIONS END ---

const app = initializeApp(firebaseConfig);

// App Check initialization is removed

const auth = getAuth(app);
const db = getFirestore(app);

export {
  auth,
  db,
  updateDoc,
  deleteDoc,
  signInWithEmailAndPassword,
  signOut,
  doc,
  getDoc,
  setDoc,
  addDoc,
  collection,
  getDocs,
  RecaptchaVerifier,
  signInWithPhoneNumber
};