import React from "react";
import aboutimage from "../Images/about.png";

function About() {
  return (
    <div id="about">
      <div className="about-image">
        <img src={aboutimage} alt="" />
      </div>
      <div className="about-text">
        <h1>LEARN MORE ABOUT US</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae,
          sapiente quibusdam nobis commodi et facere suscipit earum, eum tempore
          dolor ullam aperiam dicta totam dolorem.
        </p>
      </div>
    </div>
  );
}

export default About;
