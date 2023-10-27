import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDJ3Ra_poB4DUhkEYylp1QEfy757TT8R28",
  authDomain: "proyecto-final-coderhous-e2639.firebaseapp.com",
  projectId: "proyecto-final-coderhous-e2639",
  storageBucket: "proyecto-final-coderhous-e2639.appspot.com",
  messagingSenderId: "341361956964",
  appId: "1:341361956964:web:f0eb3ec4a386bd64752771",
  measurementId: "G-JBD3KNXCE0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
