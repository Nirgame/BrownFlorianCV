import React from "react";

const Hobbies = () => {
  return (
    <div className="hobbies">
      <h3>Intérêts</h3>
      <ul>
        <li className="hobby">
          <i className="fas fa-pen"></i>
          <span>Dessin</span>
        </li>
        <li className="hobby">
          <i className="fas fa-plane"></i>
          <span>Voyage</span>
        </li>
        <li className="hobby">
          <i className="fas fa-music"></i>
          <span>Musique</span>
        </li>
      </ul>
    </div>
  );
};

export default Hobbies;
