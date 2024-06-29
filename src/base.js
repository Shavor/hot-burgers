import Rebase from "re-base";
import firebase from "firebase/app";
import "firebase/storage";
import "firebase/database";
import "firebase/firestore";
import "firebase/messaging";
import "firebase/functions";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBU7l7CGYpWWgNph0i_bcwjUt3ALtaZ25c",
  authDomain: "very-hot-burgers-b300c.firebaseapp.com",
  projectId: "very-hot-burgers-b300c",
  storageBucket: "very-hot-burgers-b300c.appspot.com",
  messagingSenderId: "489462688411",
  appId: "1:489462688411:web:bac88545c62745f320343e",
});

const base = Rebase.createClass(firebaseApp.database());
export { firebaseApp };
export default base;
