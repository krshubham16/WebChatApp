import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//GET Below Settings from Firebase > Project Overview > Settings > General > Your apps > Firebase SDK snippet > Config
const firebaseConfig = {
  apiKey: "AIzaSyBsh0qjWI9ZbxopzuSsRcLtyHzYpsp9bJo",
  authDomain: "webchatapp-64ce3.firebaseapp.com",
  projectId: "webchatapp-64ce3",
  storageBucket: "webchatapp-64ce3.appspot.com",
  messagingSenderId: "64271157702",
  appId: "1:64271157702:web:4bc6ff9d6199078be08ac7"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); 
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;
