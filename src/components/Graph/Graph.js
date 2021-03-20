import "./Graph.scss";
import axios from "axios";
import PropTypes from "prop-types";
import Graph5D from "./Graph5D";
import Graph1M from "./Graph1M";
import Graph3M from "./Graph3M";
import Graph1Y from "./Graph1Y";
import Graph5Y from "./Graph5Y";
import { useState, useEffect, useMemo } from "react";
import LoadingStockGraph from "../../components/Loading/LoadingStockGraph";
import NoInfo from "../../components/NoInfo/NoInfo";

const Graph = ({ symbol }) => {
  const [selectedButton, setSelectedButton] = useState(1);
  const [stockData, setStockData] = useState(null);
  const [multiplier, setMultiplier] = useState(5);
  const [resolution, setResolution] = useState(60);
  const [loading, setLoading] = useState(true);
  const [noInfo, setNoInfo] = useState(false);

  //Get stock prices
  const now = useMemo(() => {
    return Math.floor(Date.now() / 1000);
  }, []);

  const startDate = now - 86400 * multiplier;

  const startDateHandler = (multiplier, resolution) => {
    setMultiplier(multiplier);
    setResolution(resolution);
  };

  useEffect(() => {
    async function fetchStockData() {
      try {
        setLoading(true);
        const result = await axios.get(
          `https://finnhub.io/api/v1/stock/candle?symbol=${symbol}&resolution=${resolution}&from=${startDate}&to=${now}&token=${process.env.REACT_APP_API_KEY}`
        );
        setStockData(result.data);
        setLoading(false);
      } catch (err) {
        console.log("Error fetching and parsing data", err);
        setNoInfo(true);
        setLoading(false);
      }
    }
    fetchStockData();
  }, [symbol, resolution, startDate, now]);

  if (loading) {
    return <LoadingStockGraph />;
  }

  if (noInfo) {
    return <NoInfo />;
  }

  if (
    stockData.s === "no_data" ||
    stockData === { error: "You don't have access to this resource." }
  ) {
    console.log("There is no available price graph for this stock.");
    return null;
  }

  let graphChart;
  if (multiplier === 5) {
    graphChart = <Graph5D close={stockData.c} date={stockData.t} />;
  } else if (multiplier === 30) {
    graphChart = <Graph1M close={stockData.c} date={stockData.t} />;
  } else if (multiplier === 180) {
    graphChart = <Graph3M close={stockData.c} date={stockData.t} />;
  } else if (multiplier === 360) {
    graphChart = <Graph1Y close={stockData.c} date={stockData.t} />;
  } else if (multiplier === 1800) {
    graphChart = <Graph5Y close={stockData.c} date={stockData.t} />;
  }

  const handleClick = (buttonNumber) => {
    setSelectedButton(buttonNumber);
  };

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
  symbol: PropTypes.string.isRequired,
};

export default Graph;
