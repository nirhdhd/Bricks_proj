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


export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    console.log('snapShot', snapShot);
    console.log(' snapShot.Id.od.currentUser.uid', snapShot.Id.od.currentUser.uid);

    if (!snapShot.exists) {
        const { userName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                userName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
