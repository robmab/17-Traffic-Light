import React, { useState } from "react";

//create your first component
export const TrafficSign = () => {
  const [color, setColor] = useState("red");

  const [purple, setPurple] = useState(false);

  return (
    <div className="wrapper">
      <div id="trafficTop"></div>
      <div id="container">
        <div
          onClick={() => {
            setColor("red");
          }}
          className={`ligth red ${color === "red" ? "selected" : ""}`}
        ></div>
        <div
          onClick={() => {
            setColor("yellow");
          }}
          className={`ligth yellow ${color === "yellow" ? "selected" : ""}`}
        ></div>
        <div
          onClick={() => {
            setColor("green");
          }}
          className={`ligth green ${color === "green" ? "selected" : ""}`}
        ></div>

        {purple === true ? (
          <div
            onClick={() => {
              setColor("purple");
            }}
            className={`ligth purple ${color === "purple" ? "selected" : ""}`}
          ></div>
        ) : (
          ""
        )}
      </div>

      <div className="buttons">
        <button
          onClick={() => {
            if (color === "red") setColor("yellow");
            else if (color === "yellow") setColor("green");
            else if (color === "green") setColor("purple");
            else setColor("red");
          }}
          type="button"
          class="btn btn-outline-warning"
        >
          Change Sign
        </button>
        <button
          onClick={() => {
            setPurple(true);
          }}
          type="button"
          class="btn btn-outline-light"
        >
          Purple Sign
        </button>
      </div>
      <div className=""></div>
    </div>
  );
};
