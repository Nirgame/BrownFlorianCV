import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../AuthContext";
import firebase from "firebase/compat/app";

const Navigation = () => {
  const { isConnected, setIsConnected, user } = useContext(AuthContext);

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
            <NavLink exact to="/" activeClassName="navActive">
              <i className="fas fa-home"></i>
              <span>Accueil</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/competences" activeClassName="navActive">
              <i className="fas fa-mountain"></i>
              <span>Competences</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/portfolio" activeClassName="navActive">
              <i className="fas fa-images"></i>
              <span>Portfolio</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/contact" activeClassName="navActive">
              <i className="fas fa-address-book"></i>
              <span>Contact</span>
            </NavLink>
          </li>
          {isConnected ? (
            <li>
              <NavLink
                exact
                to="/"
                activeClassName="navActive"
                onClick={logout}
              >
                <i className="fas fa-user"></i>
                <span>Déconnexion</span>
              </NavLink>
            </li>
          ) : (
            <li>
              <NavLink exact to="/login" activeClassName="navActive">
                <i className="fas fa-user"></i>
                <span>Connexion</span>
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
