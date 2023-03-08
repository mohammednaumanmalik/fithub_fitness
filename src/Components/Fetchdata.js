import { useState, useEffect } from "react";
import React from "react";

function Fetchdata() {
  const [data, setData] = useState([]);
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "8e2a062680msh2c5992bcba67bf8p1220d2jsn6e3b78db8b6d",
      "X-RapidAPI-Host": "exercises-by-api-ninjas.p.rapidapi.com",
    },
  };
  useEffect(() => {
    fetch(
      "https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=biceps",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setData(response);
        console.log(response);
      });
  }, []);

  return (
    <>
      <div>
        {data.map((item, key) => (
          <div>
            <h5 key={key} style={{ backgroundColor: "red" }}>
              {item.difficulty}
            </h5>
            <br />
            <p style={{ backgroundColor: "red" }}>{item.equipment}</p>
            <p style={{ backgroundColor: "red" }}>{item.instructions}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Fetchdata;
