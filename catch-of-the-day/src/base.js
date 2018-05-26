import Rebase from 're-base';
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCo3WjU_-XYaoMNVzJPKakq2WP8kh7OHJM",
    authDomain: "catch-of-the-day-rlauder-57802.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-rlauder-57802.firebaseio.com",
    projectId: "catch-of-the-day-rlauder-57802",
    storageBucket: "catch-of-the-day-rlauder-57802.appspot.com",
    messagingSenderId: "437723827484"
});

const base = Rebase.createClass(firebaseApp.database());

//this is a named export
export { firebaseApp };

//this is a default export
export default base;
