import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyA7uW8Db551L-twzQPUy2xSUflAcP2I40o",
  authDomain: "todo-ad4f5.firebaseapp.com",
  projectId: "todo-ad4f5",
  storageBucket: "todo-ad4f5.appspot.com",
  messagingSenderId: "234150878917",
  appId: "1:234150878917:web:52ac68d662955737b75aac"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth() // for authentication
const provider = new GoogleAuthProvider() //for provider

const db = getFirestore(app)

export {auth , provider, db }
