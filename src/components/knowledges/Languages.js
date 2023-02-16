import React, { Component } from "react";
import ProgressBar from "./ProgressBar";

class Languages extends Component {
  state = {
    languages: [
      { id: 1, value: "Php", xp: "60" },
      { id: 2, value: "Html", xp: "70" },
      { id: 3, value: "Javascript", xp: "50" },
      { id: 4, value: "Css", xp: "50" },
    ],
    frameworks: [
      { id: 1, value: "React", xp: "55" },
      { id: 2, value: "Bootstrap", xp: "65" },
      { id: 3, value: "Symfony", xp: "50" },
      { id: 4, value: "Flutter", xp: "55" },
    ],
  };

  render() {
    let { languages, frameworks } = this.state;

    return (
      <div className="languagesFrameworks">
        <ProgressBar
          languages={languages}
          className="languagesDisplay"
          title="languages"
        />
        <ProgressBar
          languages={frameworks}
          className="frameworksDisplay"
          title="frameworks & Display"
        />
      </div>
    );
  }
}

export default Languages;
