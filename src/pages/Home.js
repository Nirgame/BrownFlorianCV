import React from "react";
import Navigation from "../components/Navigation";
import { getStorage, ref } from "firebase/storage";

const Home = () => {
  const storage = getStorage();
  const CVRef = ref(storage, "CV brown florian.pdf");
  return (
    <div className="home">
      <Navigation />
      <div className="homeContent">
        <div className="content">
          <h1>Brown Florian</h1>
          <h2>Développeur Back-end</h2>
          <div className="pdf">
            <a
              href="gs://brownfloriancv-e70ad.appspot.com/CV brown florian.pdf"
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
