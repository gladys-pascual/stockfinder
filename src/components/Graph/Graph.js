import "./Graph.scss";
import PropTypes from "prop-types";

const Graph = ({ stockData, startDateHandler }) => {
  console.log(stockData);
  //default is 5 days
  // if 1M is clicked, API for one month is called
  // only call API as needed..
  // 5, 30, 180, 360, 1800

  return (
    <section className="stock-graph-wrapper">
      <div className="stock-graph">
        <div className="stock-buttons-container">
          <button onClick={() => startDateHandler(5)}>5D</button>
          <button onClick={() => startDateHandler(30)}>1M</button>
          <button onClick={() => startDateHandler(180)}>3M</button>
          <button onClick={() => startDateHandler(360)}>1Y</button>
          <button onClick={() => startDateHandler(1800)}>5Y</button>
        </div>
        <div>
          <h1>graph</h1>
        </div>
      </div>
    </section>
  );
};

Graph.propTypes = {
  stockData: PropTypes.object.isRequired,
  startDateHandler: PropTypes.func.isRequired,
};

export default Graph;
