// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCfWd8YOhdq6ERUIwmfA9lblfVH-qLk6_A",
    authDomain: "clone-86943.firebaseapp.com",
    projectId: "clone-86943",
    storageBucket: "clone-86943.appspot.com",
    messagingSenderId: "626035876607",
    appId: "1:626035876607:web:c4215755c5350efbcd22ca",
    measurementId: "G-PLDEE37TBW"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()

  const auth = firebase.auth()

  export {db,auth}