import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAKw3HJZkT58dlo_dGtt2wUFlQpe8poV0I",
    authDomain: "instagram-reels-clone-react.firebaseapp.com",
    projectId: "instagram-reels-clone-react",
    storageBucket: "instagram-reels-clone-react.appspot.com",
    messagingSenderId: "149645612557",
    appId: "1:149645612557:web:d8f3a639b4d715a1ee6744",
    measurementId: "G-HREBFREZ5H"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()

export default db