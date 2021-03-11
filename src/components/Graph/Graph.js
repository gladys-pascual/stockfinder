import "./Graph.scss";
import PropTypes from "prop-types";
import Graph5D from "./Graph5D";
import Graph1M from "./Graph1M";
import Graph3M from "./Graph3M";
import Graph1Y from "./Graph1Y";
import Graph5Y from "./Graph5Y";

const Graph = ({ startDateHandler, close, date, multiplier }) => {
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

  if (multiplier)
    return (
      <section className="stock-graph-wrapper">
        <div className="stock-graph">
          <div className="stock-buttons-container">
            <button onClick={() => startDateHandler(5, "60")}>5D</button>
            <button onClick={() => startDateHandler(30, "D")}>1M</button>
            <button onClick={() => startDateHandler(180, "D")}>3M</button>
            <button onClick={() => startDateHandler(360, "W")}>1Y</button>
            <button onClick={() => startDateHandler(1800, "M")}>5Y</button>
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
