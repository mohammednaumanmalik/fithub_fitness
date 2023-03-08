import React from "react";

function FeatureBox(props) {
  return (
    <div className="a-box">
      FeatureBox
      <div className="a-b-img"></div>
      <div className="a-b-text">
        <h2>{props.muscle}</h2>
        <p>{props.equipment}</p>
        <p>{props.name}</p>

        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
      </div>
    </div>
  );
}

export default FeatureBox;
