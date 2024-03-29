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
              <CopyToClipboard text="0123456789">
                <span
                  className="clickInput"
                  onClick={() => {
                    alert("Numéro copié !");
                  }}
                >
                  01 23 45 67 89
                </span>
              </CopyToClipboard>
            </li>
            <li>
              <i className="far fa-envelope"></i>
              <CopyToClipboard text="mail@gmail.fr">
                <span
                  className="clickInput"
                  onClick={() => {
                    alert("Adresse mail copié !");
                  }}
                >
                  mail@gmail.fr
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
