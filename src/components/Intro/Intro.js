import React from 'react';
import "./Intro.scss";
import Button from "../Button/Button";

function Intro() {
  return (
    <div className="intro-container">
        <video src="/videos/video.mp4" autoPlay loop muted/>
          <h1>Welcome to the Hotel California</h1>
          <p>Such a Lovely Place</p>
          <div className="intro-buttons">
              <Button className="intro-btn" btnStyle="btn--outline" btnSize="btn--large">
                  Ready a Room
              </Button>
          </div>
    </div>
  );
}

export default Intro;
