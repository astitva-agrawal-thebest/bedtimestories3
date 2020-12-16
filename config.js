import firebase from 'firebase'
require("@firebase/firestore")


var firebaseConfig = {
  apiKey: "AIzaSyA_wJSoGIiD6wXz_BP5MaD5ImvdQu6uVIY",
  authDomain: "bedtimestorie-a7c0b.firebaseapp.com",
  projectId: "bedtimestorie-a7c0b",
  storageBucket: "bedtimestorie-a7c0b.appspot.com",
  messagingSenderId: "135911204977",
  appId: "1:135911204977:web:0f14e0f67c2b41023c13d0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default  firebase.firestore()                                   