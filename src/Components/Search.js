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

const getExerciseDescription = (categoryName) => {
  switch (categoryName) {
    case "Abs":
      return "Strengthen your core and tone your abs with these exercises. Planks, crunches, and Russian twists are great choices.";
    case "Shoulders":
      return "Build strong and defined shoulders with these workouts. Try shoulder presses, lateral raises, and upright rows.";
    case "Arms":
      return "Get bigger and stronger biceps and triceps with these exercises. Include bicep curls, tricep dips, and hammer curls in your routine.";
    case "Legs":
      return "Sculpt your lower body and improve your leg strength with these workouts. Squats, lunges, and deadlifts are effective leg exercises.";
    case "Back":
      return "Strengthen your back muscles and improve your posture with these exercises. Bent-over rows, pull-ups, and lat pulldowns can help.";
    case "Chest":
      return "Develop a strong and well-defined chest with these exercises. Bench presses, push-ups, and chest flyes are excellent choices.";
    default:
      return "Sorry, no description available for this category.";
  }
};

function Search() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  function searchBar(e) {
    e.preventDefault();
    fetchData();
    setSearch(e.target.value);
  }

  useEffect(() => {
    fetchData();
  }, [data]);

  const fetchData = () => {
    fetch("https://wger.de/api/v2/exercisebaseinfo/?limit=200&offset=200")
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setData(result);
        // console.log(result);
      });
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
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
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },

      {
        breakpoint: 700,
        settings: {
          dots: false,
          infinite: false,
          speed: 1000,
          slidesToShow: 2,
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
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
    ],
  };

  return (
    <div id="search_main">
      <h1>Explore More Exercises</h1>
      <input
        type="text"
        placeholder="search your exercises"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />{" "}
      <>
        <div className="grid-container">
          {(data && data.results ? data.results : [])

            .filter(
              (item) =>
                item.images.length > 0 &&
                item.equipment.length > 0 &&
                (search
                  ? item.category.name
                      .toLowerCase()
                      .includes(search.toLowerCase())
                  : true)
            )

            .map((item, idx) => {
              return (
                <ul>
                  <li>
                    <div className="grid-item">
                      <div className="a-box-s">
                        <div className="a-b-img-s">
                          <img
                            src={
                              item.images.length > 0 ? item.images[0].image : ""
                            }
                            alt={item.name}
                          />
                        </div>

                        <div className="a-b-text-s">
                          <div className="a-b-text-s-div">
                            <p>
                              <button
                                style={{ fontSize: "1rem" }}
                                className="name-button"
                              >
                                <strong className="str-name-s">
                                  {item.category.name}
                                </strong>
                              </button>
                            </p>
                          </div>
                          <p className="name-button-s-description-s">
                            <p className="str-name-desc-s">
                              {getExerciseDescription(item.category.nam)}
                            </p>
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              );
            })}
        </div>
      </>
    </div>
  );
}
export default Search;
