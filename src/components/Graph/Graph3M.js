import PropTypes from "prop-types";
import { ResponsiveLine } from "@nivo/bar";
import "./Graph.scss";

const Graph3M = ({ close, date }) => {
  console.log(close);
  console.log(date);

  return (
    <section className="graph-line-chart">
      <h1>Graph 3 months</h1>
    </section>
  );
};

Graph3M.propTypes = {
  close: PropTypes.array.isRequired,
  date: PropTypes.array.isRequired,
};

export default Graph3M;
