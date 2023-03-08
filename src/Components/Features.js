import React from "react";
import FeatureBox from "./FeatureBox";
import fimage1 from "../Images/1.svg";
import fimage2 from "../Images/2.svg";
import fimage3 from "../Images/3.svg";
import fimage4 from "../Images/4.svg";
import { useState, useEffect } from "react";
import Carousel from "react-elastic-carousel";

function Features() {
  const [data, setData] = useState([]);
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "8e2a062680msh2c5992bcba67bf8p1220d2jsn6e3b78db8b6d",
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };

  useEffect((id) => {
    fetch("https://exercisedb.p.rapidapi.com/exercises/", options)
      .then((response) => response.json())
      .then((response) => {
        setData(response);
        console.log(response);
      });
  }, []);
  let _break = false;

  const breaker = () => {
    _break = true;
  };
  const breakPoints = [];
  return (
    <>
      <div id="features">
        <h1>FEATURES</h1> <br />
        <Carousel breakPoints={breakPoints}>
          <div className="a-container">
            {data.slice(0, 20).map((item, idx) => {
              if (idx === 0) {
                return breaker();
              }
              if (idx === 1) {
                return breaker();
              }
              if (idx === 2) {
                return breaker();
              }
              if (idx === 4) {
                return breaker();
              }
              if (idx === 7) {
                return breaker();
              }
              if (idx === 9) {
                return breaker();
              }

              if (idx === 10) {
                return breaker();
              }

              return (
                <div className="a-box">
                  <div className="a-b-img">
                    <img src={item.gifUrl} alt="" style={{}} />
                  </div>
                  <div className="a-b-text">
                    <p style={{ Color: "red" }}> {item.bodyPart}</p>
                    <p>{item.equipment}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Carousel>
      </div>
    </>
  );
}

export default Features;
