import React, { useState, createContext } from "react";

const AuthContext = createContext({
  isConnected: false,
  setIsConnected: () => {},
  currentUser: "", // Nouvelle constante currentUser
  setCurrentUser: () => {},
});

export const AuthProvider = ({ children }) => {
  const [isConnected, setIsConnected] = useState(false);
  const [currentUser, setCurrentUser] = useState(""); // Nouvelle constante currentUser

  const contextValues = {
    isConnected,
    setIsConnected,
    currentUser, // Nouvelle constante currentUser
    setCurrentUser, // Nouvelle constante setCurrentUser
  };

  return (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
