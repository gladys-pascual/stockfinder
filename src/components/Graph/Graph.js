import "./Graph.scss";
import PropTypes from "prop-types";
import Graph5D from "./Graph5D";
import Graph1M from "./Graph1M";
import Graph3M from "./Graph3M";
import Graph1Y from "./Graph1Y";
import Graph5Y from "./Graph5Y";
import { useState } from "react";

const Graph = ({ startDateHandler, close, date, multiplier }) => {
  const [selectedButton, setSelectedButton] = useState(1);

  let graphChart;
  if (multiplier === 5) {
    graphChart = <Graph5D close={close} date={date} />;
  } else if (multiplier === 30) {
    graphChart = <Graph1M close={close} date={date} />;
  } else if (multiplier === 180) {
    graphChart = <Graph3M close={close} date={date} />;
  } else if (multiplier === 360) {
    graphChart = <Graph1Y close={close} date={date} />;
  } else if (multiplier === 1800) {
    graphChart = <Graph5Y close={close} date={date} />;
  }

  const handleClick = (buttonNumber) => {
    console.log("button number", buttonNumber);
    setSelectedButton(buttonNumber);
  };
  console.log(selectedButton);

  return (
    <section className="stock-graph-wrapper">
      <div className="stock-graph">
        <div className="stock-buttons-container">
          <button
            className={selectedButton === 1 ? "active" : "not-active"}
            onClick={() => {
              startDateHandler(5, "60");
              handleClick(1);
            }}
          >
            5D
          </button>
          <button
            className={selectedButton === 2 ? "active" : "not-active"}
            onClick={() => {
              startDateHandler(30, "D");
              handleClick(2);
            }}
          >
            1M
          </button>
          <button
            className={selectedButton === 3 ? "active" : "not-active"}
            onClick={() => {
              startDateHandler(180, "D");
              handleClick(3);
            }}
          >
            3M
          </button>
          <button
            className={selectedButton === 4 ? "active" : "not-active"}
            onClick={() => {
              startDateHandler(360, "W");
              handleClick(4);
            }}
          >
            1Y
          </button>
          <button
            className={selectedButton === 5 ? "active" : "not-active"}
            onClick={() => {
              startDateHandler(1800, "M");
              handleClick(5);
            }}
          >
            5Y
          </button>
        </div>
        <div>{graphChart}</div>
      </div>
    </section>
  );
};

Graph.propTypes = {
  startDateHandler: PropTypes.func.isRequired,
  close: PropTypes.array.isRequired,
  date: PropTypes.array.isRequired,
  multiplier: PropTypes.number.isRequired,
};

export default Graph;
