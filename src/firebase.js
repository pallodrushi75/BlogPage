import firebase from "firebase";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBspUbneedXu8T3KWSpjf3W1vhTYehV8fU",
  authDomain: "medium-96d32.firebaseapp.com",
  projectId: "medium-96d32",
  storageBucket: "medium-96d32.appspot.com",
  messagingSenderId: "1046133252831",
  appId: "1:1046133252831:web:a66ee60ce481e0dcd9ff6a"
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();

export default db;
