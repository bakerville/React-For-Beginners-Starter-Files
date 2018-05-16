import Rebase from 're-base';
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAK7S6HgjI4UnsBsATUoPRB4lT5vHibrm0",
    authDomain: "catch-of-the-day-rlauder.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-rlauder-57802.firebaseio.com/"
});

const base = Rebase.createClass(firebaseApp.database());

//this is a named export
export { firebaseApp };

//this is a default export
export default base;