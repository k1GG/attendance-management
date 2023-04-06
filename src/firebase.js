import firebase from 'firebase/compat/app'
import 'firebase/compat/database'

const firebaseConfig = {
  apiKey: "AIzaSyCl0_wnC0FSV8EbbjyICSe1CXXRG7tvlnU",
  authDomain: "react-student-a931a.firebaseapp.com",
  projectId: "react-student-a931a",
  storageBucket: "react-student-a931a.appspot.com",
  messagingSenderId: "796263984412",
  appId: "1:796263984412:web:84c87066ff5398f3fd5ed9",
  measurementId: "G-CC18PY5NXD"
};

const firebaseDB = firebase.initializeApp(firebaseConfig)

export default firebaseDB.database().ref();