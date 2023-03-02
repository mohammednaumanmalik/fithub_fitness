import React from "react";
import FeatureBox from "./FeatureBox";
import fimage1 from "../Images/1.svg";
import fimage2 from "../Images/2.svg";
import fimage3 from "../Images/3.svg";
import fimage4 from "../Images/4.svg";

function Features() {
  return (
    <div id="features">
      <h1>FEATURES</h1>
      <div className="a-container">
        <FeatureBox image={fimage1} title="WeightLifting" />
        <FeatureBox image={fimage2} title="Spacific Muscle" />
        <FeatureBox image={fimage3} title="Flex Your Muscle" />
        <FeatureBox image={fimage4} title="Cardio Exercise" />
      </div>
    </div>
  );
}

export default Features;
