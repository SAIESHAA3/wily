 import * as firebase from "firebase"
 require("@firebase/firestore")
 var firebaseConfig = {
    apiKey: "AIzaSyDXZ678Ed1pHFd6Iu3RL2mX2AizYchBtSw",
    authDomain: "wily-dd8d9.firebaseapp.com",
    databaseURL: "https://wily-dd8d9.firebaseio.com",
    projectId: "wily-dd8d9",
    storageBucket: "wily-dd8d9.appspot.com",
    messagingSenderId: "1088843654525",
    appId: "1:1088843654525:web:c52e28ffa5e3c2c9465814"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()