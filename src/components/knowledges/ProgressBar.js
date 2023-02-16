import React from "react";

const ProgressBar = (props) => {
  return (
    <div className={props.className}>
      <h3>{props.title}</h3>
      <div className="years">
        <span>Connaissances</span>
        <span>50 %</span>
        <span>100 %</span>
      </div>

      <div>
        {props.languages.map((item) => {
          let ProgressBar = item.xp + "%";

          return (
            <div key={item.id} className="languagesList">
              <li>{item.value}</li>
              <div className="progressBar" style={{ width: ProgressBar }}></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressBar;
