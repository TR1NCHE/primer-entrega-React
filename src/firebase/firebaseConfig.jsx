import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCB09vK1XR-C6Xt8R9gscbjDye7AxGRZ5Q",
    authDomain: "old-cartoons-store.firebaseapp.com",
    projectId: "old-cartoons-store",
    storageBucket: "old-cartoons-store.firebasestorage.app",
    messagingSenderId: "393967458711",
    appId: "1:393967458711:web:fe36164bd2144508304cd2"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;