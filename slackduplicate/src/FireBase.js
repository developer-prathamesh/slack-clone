import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDUIShpk0qDYXMl2D1wCict9Fi4SDbuiYU",
    authDomain: "slack-clone-cf2e3.firebaseapp.com",
    projectId: "slack-clone-cf2e3",
    storageBucket: "slack-clone-cf2e3.appspot.com",
    messagingSenderId: "1098608874536",
    appId: "1:1098608874536:web:1f18ff3bade7101856911d",
    measurementId: "G-YY4EDMXTEV"
};
const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();

const auth  = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()

export default db;
export  {auth,provider};