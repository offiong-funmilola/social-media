
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA2d9h-qgJlQPQT8RJMSNqaQY98fStfOOw",
  authDomain: "social-media-dashboard-90336.firebaseapp.com",
  projectId: "social-media-dashboard-90336",
  storageBucket: "social-media-dashboard-90336.appspot.com",
  messagingSenderId: "213357989537",
  appId: "1:213357989537:web:6c094dbfcfcd3f9af96ae0",
  measurementId: "G-JEQZ23FC4K"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// project-213357989537