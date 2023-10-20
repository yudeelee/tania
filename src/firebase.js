import { initializeApp } from "firebase/app";
import {
    getFirestore
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCjHhhIqV_hfCL9Ut307cAgPHNw5nXbilE",
    authDomain: "accountant-48c0c.firebaseapp.com",
    projectId: "accountant-48c0c",
    storageBucket: "accountant-48c0c.appspot.com",
    messagingSenderId: "1005178903861",
    appId: "1:1005178903861:web:bf5e4aea03898d6ef0407c"
};

const fire = initializeApp(firebaseConfig);
const db = getFirestore(fire);

export { db };