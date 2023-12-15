import firebaseConfig from "./firebaseConfig";
import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
firebase.initializeApp(firebaseConfig);

const Firebase = {
  loginWithEmail: (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  },
  signupWithEmail: (email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  },
  signOut: () => {
    return firebase.auth().signOut();
  },

  checkAuthUser: (user) => {
    return firebase.auth().onAuthStateChanged(user);
  },

  createNewUser: (userData) => {
    return firebase
      .firestore()
      .collection("users")
      .doc(`${userData.uid}`)
      .set(userData);
  },
};
export default Firebase;
