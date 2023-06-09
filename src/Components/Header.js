import React from "react";
import Fade from "react-reveal/Fade";

function Header() {
  return (
    <div id="main">
      <div className="name">
        <Fade right>
          {" "}
          <h2>STEP UP YOUR</h2>{" "}
        </Fade>
        <Fade left>
          {" "}
          <h1>
            <span>FITNESS</span> WITH US
          </h1>
        </Fade>
        <p className="details">
          Build Your Body And Fitness With Professional Touch
        </p>
      </div>
    </div>
  );
}
export default Header;
