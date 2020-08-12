import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
    apiKey: 'AIzaSyDoKKwvKXFN_51oqxkGuVlqFyzqeoJd9tE',
    authDomain: 'react-slack-app-75ab0.firebaseapp.com',
    databaseURL: 'https://react-slack-app-75ab0.firebaseio.com',
    projectId: 'react-slack-app-75ab0',
    storageBucket: 'react-slack-app-75ab0.appspot.com',
    messagingSenderId: '134969118371',
    appId: '1:134969118371:web:9998cc4f81d9f52b3ef916',
    measurementId: 'G-LP7W15B7GL',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase;
