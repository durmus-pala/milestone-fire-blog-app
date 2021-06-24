import { useState, useEffect } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBwkPKfnKESFcHWF9bmVV7IydqnpN2ddLU",
  authDomain: "milestone-fire-blog-app.firebaseapp.com",
  projectId: "milestone-fire-blog-app",
  storageBucket: "milestone-fire-blog-app.appspot.com",
  messagingSenderId: "137726194070",
  appId: "1:137726194070:web:5b64402a9066308b67adb7",
});

export const createUser = async (
  email,
  password,
  displayName,
  photo,
  history
) => {
  try {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        var user = userCredential.user;
        console.log(":rocket: REGISTER USER", user);
        history.push("/");
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
    const currentUser = firebase.auth().currentUser;
    currentUser.updateProfile({ displayName: displayName, photoURL: photo });
  } catch (error) {
    alert("The email address is already in use by another account!");
  }
};
export const SignIn = async (email, password, history) => {
  await firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log(":rocket: LOGIN USER", user);
      history.push("/");
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
    });
};
export const userObserver = async (setCurrentUser) => {
  await firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setCurrentUser(user);
    } else {
      // User is signed out
      setCurrentUser(null);
    }
  });
};
export const SignUpProvider = () => {
  var provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({
    promt: "select_account",
  });
  firebase.auth().signInWithPopup(provider);
};
export const SignOut = (history) => {
  firebase.auth().signOut();
  history.push("/login");
};
export const addInfo = (info) => {
  const blogRef = firebase.database().ref("blog");
  blogRef.push(info);
};
export const useFetch = () => {
  const [blogList, setBlogList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    const blogRef = firebase.database().ref("blog");
    blogRef.on("value", (snapshot) => {
      const blogs = snapshot.val();
      const blogArray = [];
      for (let id in blogs) {
        blogArray.push({ id, ...blogs[id] });
      }
      setBlogList(blogArray);
      setIsLoading(false);
    });
  }, []);
  return { blogList, isLoading };
};
export default firebaseApp;
