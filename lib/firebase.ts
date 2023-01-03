import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBnDphKMnkah69HxE5YP615-yTY0QBSBKU",
    authDomain: "refactored-32d58.firebaseapp.com",
    projectId: "refactored-32d58",
    storageBucket: "refactored-32d58.appspot.com",
    messagingSenderId: "784558460067",
    appId: "1:784558460067:web:9e92c396cc37d252530316",
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();