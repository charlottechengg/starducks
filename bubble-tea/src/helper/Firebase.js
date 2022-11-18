import React, { Component } from "react";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut, } from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVuZQ2eGdsjmotZVLdnM9z3Z2TnltbdhU",
  authDomain: "startducks-65a8d.firebaseapp.com",
  projectId: "startducks-65a8d",
  storageBucket: "startducks-65a8d.appspot.com",
  messagingSenderId: "352486943056",
  appId: "1:352486943056:web:004a87b7ac4c8bc2482455",
  measurementId: "G-49RJYCXGRG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

const auth = getAuth(app);
const db = getFirestore(app);
// To apply the default browser preference instead of explicitly setting it.
// firebase.auth().useDeviceLanguage();

provider.setCustomParameters({
  'login_hint': 'user@example.com'
});



const signInWithGoogle = async () => {
  try {
      const res = await signInWithPopup(auth, provider);
      const user = res.user;
      const q = query(collection(db, "users"), where("uid", "==", user.uid));
      const docs = await getDocs(q);
      //check if there is no user with the uid in db
      if (docs.docs.length === 0) {
        //make a new record if new user
        await addDoc(collection(db, "users"), {
          uid: user.uid,
          name: user.displayName,
          authProvider: "google",
          email: user.email,
        });
      }
      signOut(auth);
    } catch (err) {
      console.error(err);
      if (err.message == "Firebase: Error (auth/invalid-email)."){
        alert("Dear starducks customer, please enter a valid Email.");
      }
      else{
        alert("Dear startducsk customer, " + err.message)
     }

  }
};

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);

    if (err.message == "Firebase: Error (auth/invalid-email)."){
        alert("Dear starducks customer, please enter a valid Email.");
    }
    else if (err.message == "Firebase: Error (auth/user-not-found)."){
        alert("Dear starducks customer, user with the email could not be found.");
    }
    else if (err.message == "FirebaseError: Firebase: Error (auth/wrong-password)."){
        alert("Dear starducks customer, please enter a correct password.");
    }
    else{
        alert("Dear startducsk customer, " + err.message)
    }




  }
};


const registerWithEmailAndPassword = async (email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  signOut(auth);
};

export {
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
};