import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "budget-1989d.firebaseapp.com",
  projectId: "budget-1989d",
  storageBucket: "budget-1989d.appspot.com",
  messagingSenderId: "38010155706",
  appId: "1:38010155706:web:28226ce2d814a431084883"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// export Firebase
export const db = getFirestore(app);
export const colRef = collection(db, "budgets");

// export authen
export const auth = getAuth();