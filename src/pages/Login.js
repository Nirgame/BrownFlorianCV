import React, { useEffect, useState, useContext } from "react";
import Auth from "./Auth";
import firebase from "firebase/compat/app";
import { onAuthStateChanged } from "firebase/auth";
import Home from "./Home";
import AuthContext from "../AuthContext";

const Login = () => {
  const { setCurrentUser } = useContext(AuthContext);

  const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
  };

  firebase.initializeApp(firebaseConfig);
  const [user, setUser] = useState({ username: "" });
  useEffect(() => {
    onAuthStateChanged(firebase.auth(), (user) => {
      if (user) {
        setUser({ email: user.email });
      }
    });
  });

  return <div>{user.email ? <Home /> : <Auth auth={firebase.auth()} />}</div>;
};

export default Login;
