import React from "react";
import aboutimage from "../Images/about.png";
import { useState, useEffect, useRef } from "react";
function About() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [divHeight, setDivHeight] = useState("auto");
  const aboutTextRef = useRef(null);

  useEffect(() => {
    if (aboutTextRef.current) {
      setDivHeight(`${aboutTextRef.current.clientHeight}px`);
    }
  }, [isExpanded]);
  const handleShowMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div id="about" style={{ height: divHeight }}>
      <div className="about-image">
        <img src={aboutimage} alt="" />
      </div>
      <div className="about-text">
        <h1>KNOW MORE ABOUT US</h1>

        <p className="p-about">
          <h5>Facilities</h5>
          <span>Our</span> gym features state-of-the-art equipment, including
          cardio machines, weight machines, and free weights. We also offer a
          variety of amenities such as showers, locker rooms, and a sauna. To
          take a virtual tour of our facilities. <br />
          <br />
          <h5>Personal Training</h5>
          <span>Our</span> certified personal trainers are here to help you
          reach your full potential.
        </p>

        {isExpanded ? (
          <p>
            Whether you're looking to lose weight, gain strength, or improve
            your overall fitness, our trainers can create a customized workout
            plan to meet your needs. <br /> <br />
            <h5> Gym amenities</h5>{" "}
            <p>
              <span> Check</span> out our gym amenities, such as towel service,
              juice bar, and WiFi, to enhance your gym experience.
            </p>
            <button className="btn-read-less" onClick={handleShowMore}>
              Read less
            </button>
          </p>
        ) : (
          <button className="btn-read-more" onClick={handleShowMore}>
            Read more
          </button>
        )}
      </div>
    </div>
  );
}

export default About;
