import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../AuthContext";
import firebase from "firebase/compat/app";

const Navigation = () => {
  const { isConnected, setIsConnected } = useContext(AuthContext);

  const handleDownload = () => {
    window.open(
      "https://firebasestorage.googleapis.com/v0/b/brownfloriancv-e70ad.appspot.com/o/BrownFlorianCV.zip?alt=media&token=fa2a93c4-9c79-4069-844c-0a61a779cd31",
      "_blank"
    );
  };

  function logout() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setIsConnected(false);
      })
      .catch((error) => {
        // Une erreur s'est produite lors de la déconnexion
      });
  }
  var email = "";
  if (isConnected) {
    var user = firebase.auth().currentUser;
    if (user) {
      var email = user.email;
    }
  }

  return (
    <div className="sidebar">
      <div className="id">
        <div className="idContent">
          <img src="./media/moi.jpg" alt="profile" />
          <h3>Brown Florian</h3>
        </div>
      </div>

      <div className="navigation">
        <ul>
          <li>
            <NavLink exact="true" to="/" activeclassname="navActive">
              <i className="fas fa-home"></i>
              <span>Accueil</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact="true" to="/competences" activeclassname="navActive">
              <i className="fas fa-mountain"></i>
              <span>Competences</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact="true" to="/portfolio" activeclassname="navActive">
              <i className="fas fa-images"></i>
              <span>Portfolio</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact="true" to="/contact" activeclassname="navActive">
              <i className="fas fa-address-book"></i>
              <span>Contact</span>
            </NavLink>
          </li>
          {isConnected ? (
            <li>
              <NavLink
                exact="true"
                to="/"
                activeclassname="navActive"
                onClick={logout}
              >
                <i className="fas fa-user"></i>
                <span>Déconnexion</span>
              </NavLink>
            </li>
          ) : (
            <li>
              <NavLink exact="true" to="/login" activeclassname="navActive">
                <i className="fas fa-user"></i>
                <span>Connexion</span>
              </NavLink>
            </li>
          )}
          {isConnected && (
            <li>
              <NavLink>
                <i className="fas fa-user"></i>
                <span>{email}</span>
              </NavLink>
            </li>
          )}
          {isConnected && (
            <li>
              <NavLink onClick={handleDownload}>
                <i className="fas fa-file"></i>
                <span>Code Source</span>
              </NavLink>
            </li>
          )}
        </ul>
      </div>

      <div className="socialNetwork">
        <ul>
          <li>
            <a
              href="https://github.com/Nirgame"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a
              href="http://brown-florian.alwaysdata.net/vue/Page.php"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-desktop"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
