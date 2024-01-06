import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAeGhQfUiYCslnGLS1O0U1R4rHQ3e44f24",
  authDomain: "netflix-clone-9f1b9.firebaseapp.com",
  projectId: "netflix-clone-9f1b9",
  storageBucket: "netflix-clone-9f1b9.appspot.com",
  messagingSenderId: "33479361671",
  appId: "1:33479361671:web:6ae43ab421ed02a74b6422"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;