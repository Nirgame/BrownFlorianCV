import React from "react";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <div className="homeContent">
        <div className="content">
          <h1>Brown Florian</h1>
          <h2>Développeur Back-end</h2>
          <div className="pdf">
            <a
              href="https://firebasestorage.googleapis.com/v0/b/brownfloriancv-e70ad.appspot.com/o/CV%20brown%20florian.pdf?alt=media&token=7822d2ac-c745-469a-a32e-33a2fefd9f8e"
              target="_blank"
            >
              Télécharger CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
