import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/firebase-storage';
import 'firebase/database';

firebase.initializeApp({
  apiKey: "AIzaSyDn7Q7uMM-rBukrUFlFL4eHoEZmwD-hPO8",
  authDomain: "tullingkueto.firebaseapp.com",
  projectId: "tullingkueto",
  storageBucket: "tullingkueto.appspot.com",
  messagingSenderId: "780350146422",
  appId: "1:780350146422:web:4248a178534f2924fadc57",
  measurementId: "G-TTGBXVSC4B"
});

const db = firebase.firestore();
const auth = firebase.auth;
const storage = firebase.storage();
const dbRealTime = firebase.database();

export default firebase;
export {firebase, auth, db, storage};