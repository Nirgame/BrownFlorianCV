import React, { useEffect, useContext } from "react";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
import firebase from "firebase/compat/app";
import AuthContext from "../AuthContext";

const Auth = (props) => {
  const { setIsConnected, setCurrentUser } = useContext(AuthContext); // récupérez setIsConnected depuis le contexte

  useEffect(() => {
    const ui =
      firebaseui.auth.AuthUI.getInstance() ||
      new firebaseui.auth.AuthUI(props.auth);
    ui.start(".firebase-auth-container", {
      signInOptions: [
        {
          provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
          requireDisplayName: false,
        },
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      ],
      signInSuccessUrl: "/",
      callbacks: {
        signInSuccessWithAuthResult: (authResult) => {
          setIsConnected(true); // mettez à jour l'état isConnected en true
          setCurrentUser(authResult.user.email); // mettez à jour l'utilisateur actuel avec l'adresse e-mail de l'utilisateur connecté
          return false; // redirigez manuellement l'utilisateur
        },
      },
    });
  }, [props.auth, setCurrentUser, setIsConnected]);
  return (
    <>
      <div className={"firebase-auth-container"}></div>
    </>
  );
};

export default Auth;
