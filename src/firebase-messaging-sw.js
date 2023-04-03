import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

function requestPermission() {
  console.log("Requesting permission...");
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      console.log("Notification permission granted.");
      const app = initializeApp(firebaseConfig);

      const messaging = getMessaging(app);

      // Register the service worker with the correct scope
      navigator.serviceWorker
        .register("/firebase-messaging-sw.js", {
          scope: "/firebase-cloud-messaging-push-scope",
        })
        .then(() => {
          console.log("Service worker registered.");

          // Get the FCM token
          getToken(messaging, {
            vapidKey:
              "BDYszMuXclMsJhCtZIL64aYydR6_GDl_yE5orLAIs2Z7hH13qaMJ4hx__vZXxWb6Ql-W9EqwRcqmNy68X79lCPo",
          }).then((currentToken) => {
            if (currentToken) {
              console.log("current token: ", currentToken);
            } else {
              console.log("can not get token");
            }
          });
        })
        .catch((error) => {
          console.error("Error registering service worker:", error);
        });
    } else {
      console.log("Do not have permission!");
    }
  });
}

requestPermission();
