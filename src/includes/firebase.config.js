import firebase from 'firebase/compat/app'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { getFirestore, getDoc, doc, setDoc } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDMGL_e5lOAa4LTBxHhUlZ_oKCRLogEMzY",
    authDomain: "transpareat.firebaseapp.com",
    projectId: "transpareat",
    storageBucket: "transpareat.appspot.com",
    messagingSenderId: "293562259434",
    appId: "1:293562259434:web:4cb8038789e4befd890493",
    measurementId: "G-CEFQTM1MC5"
};
const app = firebase.initializeApp(firebaseConfig)

const auth = getAuth()
const provider = new GoogleAuthProvider();
const db = getFirestore(app);


export {
    auth, provider, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, db, getDoc, doc, setDoc, onAuthStateChanged
}
