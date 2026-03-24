import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB6kdpvyTxEZwO8uZHVWLSpjqEyhGM7Sz8",
  authDomain: "netflixgpt-b8cae.firebaseapp.com",
  projectId: "netflixgpt-b8cae",
  storageBucket: "netflixgpt-b8cae.firebasestorage.app",
  messagingSenderId: "481857391790",
  appId: "1:481857391790:web:cfe300a06c6e522708f13f",
  measurementId: "G-DLW1T20BFJ"
};

const app = initializeApp(firebaseConfig);
getAnalytics(app);

export const auth = getAuth(app);
