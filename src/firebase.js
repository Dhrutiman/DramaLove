import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBHzZ9S8lNamefvqMGmiMfGLosBEskf_NQ",
    authDomain: "tv-series-18ed8.firebaseapp.com",
    databaseURL: "https://tv-series-18ed8.firebaseio.com",
    projectId: "tv-series-18ed8",
    storageBucket: "tv-series-18ed8.appspot.com",
    messagingSenderId: "918060689536",
    appId: "1:918060689536:web:b938012d52ddd76cb3de65",
    measurementId: "G-K7T73JLJXZ"
};
// Initialize Firebase
firebase.initializeApp(config);
const db = firebase.firestore()

export default db;