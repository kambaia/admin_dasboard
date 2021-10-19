import { initializeApp} from 'firebase/app';
import { getFirestore} from 'firebase/firestore';
import { getAuth} from 'firebase/auth';
import {getStorage} from 'firebase/storage'
const firebaseConfig = ({
  apiKey: "AIzaSyDn7Q7uMM-rBukrUFlFL4eHoEZmwD-hPO8",
  authDomain: "tullingkueto.firebaseapp.com",
  databaseURL: "tullingkueto.firebaseio.com",
  projectId: "tullingkueto",
  storageBucket: "tullingkueto.appspot.com",
  messagingSenderId: "780350146422",
  appId: "1:780350146422:web:4248a178534f2924fadc57",
  measurementId: "G-TTGBXVSC4B"
});

const app= initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);


export {db, auth, storage}