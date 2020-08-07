import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBEzX_QHEEGZYvtCpoJgfSRQYBKKKTZtw8",
  authDomain: "bricks-proj.firebaseapp.com",
  databaseURL: "https://bricks-proj.firebaseio.com",
  projectId: "bricks-proj",
  storageBucket: "bricks-proj.appspot.com",
  messagingSenderId: "578724828106",
  appId: "1:578724828106:web:6c1a9d00e6752fe9363533",
  measurementId: "G-959TW14EZJ",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
