import React, { useEffect, useContext } from "react";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
import firebase from "firebase/compat/app";
import AuthContext from "../AuthContext";

const Auth = (props) => {
  const { setIsConnected } = useContext(AuthContext); // récupérez setIsConnected depuis le contexte

  useEffect(() => {
    const ui =
      firebaseui.auth.AuthUI.getInstance() ||
      new firebaseui.auth.AuthUI(props.auth);
    ui.start(".firebase-auth-container", {
      signInOptions: [
        {
          provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
          //provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID
          requireDisplayName: false,
        },
      ],
      signInSuccessUrl: "/",
      callbacks: {
        signInSuccessWithAuthResult: (authResult) => {
          setIsConnected(true); // mettez à jour l'état isConnected en true
          return false; // redirigez manuellement l'utilisateur
        },
      },
    });
  }, [props.auth]);
  return (
    <>
      <div className={"firebase-auth-container"}></div>
    </>
  );
};

export default Auth;
