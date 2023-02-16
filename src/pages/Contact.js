import React from "react";
import Navigation from "../components/Navigation";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Contact = () => {
  return (
    <div className="contact">
      <Navigation />
      <div className="contactContent">
        <div className="header"></div>
        <div className="contactBox">
          <h1>Contactez-moi</h1>
          <ul>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span>Audruicq</span>
            </li>
            <li>
              <i className="fas fa-mobile-alt"></i>
              <CopyToClipboard text="0782535994">
                <span
                  className="clickInput"
                  onClick={() => {
                    alert("Numéro copié !");
                  }}
                >
                  07 82 53 59 94
                </span>
              </CopyToClipboard>
            </li>
            <li>
              <i className="far fa-envelope"></i>
              <CopyToClipboard text="brown.florian08@gmail.fr">
                <span
                  className="clickInput"
                  onClick={() => {
                    alert("Adresse mail copié !");
                  }}
                >
                  brown.florian08@gmail.fr
                </span>
              </CopyToClipboard>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
