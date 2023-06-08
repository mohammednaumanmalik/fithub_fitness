import React from "react";
//import FeatureBox from "./FeatureBox";
//import fimage1 from "../Images/1.svg";
//import fimage2 from "../Images/2.svg";
//import fimage3 from "../Images/3.svg";
//import fimage4 from "../Images/4.svg";
import { useState, useEffect } from "react";
//import Carousel from "react-bootstrap/Carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import { Carousel } from "bootstrap";
// import "./slickdemo.css";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

const getExerciseDescription = (categoryName) => {
  switch (categoryName) {
    case "Abs":
      return "Strengthen your core and tone your abs with these exercises.";
    case "Shoulders":
      return "Build strong and defined shoulders with these workouts.";
    case "Arms":
      return "Get bigger and stronger biceps and triceps with these exercises.";
    case "Legs":
      return "Sculpt your lower body and improve your leg strength with these workouts.";
    case "Back":
      return "Strengthen your back muscles and improve your posture with these exercises.";
    case "Chest":
      return "Develop a strong and well-defined chest with these exercises.";
    default:
  }
};
function Features() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [data]);

  const fetchData = () => {
    fetch("https://wger.de/api/v2/exercisebaseinfo/?limit=70&offset=70")
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setData(result);
        // console.log(result);
      });
  };

  let _break = false;

  const breaker = () => {
    _break = true;
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 400,
        settings: {
          dots: false,
          infinite: true,
          speed: 1000,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },

      {
        breakpoint: 700,
        settings: {
          dots: false,
          infinite: true,
          speed: 1000,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          dots: false,
          infinite: true,
          speed: 1000,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
    ],
  };
  return (
    <>
      <div id="features">
        <h1>EXERCISES</h1> <br />
        <div className="a-container">
          <Slider {...settings} className="slider">
            {data.results
              ?.filter(
                (item) => item.images.length > 0 && item.equipment.length > 0
              )
              .slice(1, 6)
              .map((item, idx) => {
                return (
                  <Fade top>
                    <div className="a-box1">
                      <div className="a-box">
                        <div className="a-b-img">
                          <img
                            src={
                              item.images.length > 0 ? item.images[0].image : ""
                            }
                            alt={item.name}
                          />
                        </div>

                        <div className="a-b-text">
                          <div style={{ display: "inline-flex" }}>
                            <p>
                              <button
                                style={{ fontSize: "1rem" }}
                                className="name-button"
                              >
                                <strong className="str-name">
                                  {item.category.name}
                                </strong>
                              </button>
                            </p>

                            <p>
                              <button
                                style={{ fontSize: "1rem" }}
                                className="name-button-s"
                              >
                                <strong className="str-name">
                                  {item.equipment[0]?.name}
                                </strong>
                              </button>
                            </p>
                          </div>
                          <p
                            style={{ fontSize: "1rem" }}
                            className="name-button-s-description"
                          >
                            <strong className="str-name-desc">
                              {getExerciseDescription(item.category.name)}
                            </strong>
                          </p>
                        </div>
                      </div>
                    </div>
                  </Fade>
                );
              })}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Features;
