import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBk6X2BEA7fsk70hfRXzVGQNLNk3BwW5ho",
  authDomain: "activynizer.firebaseapp.com",
  projectId: "activynizer",
  storageBucket: "activynizer.appspot.com",
  messagingSenderId: "970759532445",
  appId: "1:970759532445:web:1938daa68fac0c23da0974",
  measurementId: "G-BBP2CBWYYN"
};

firebase.initializeApp(firebaseConfig);

export default firebase;