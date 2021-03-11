import PropTypes from "prop-types";
import { ResponsiveLine } from "@nivo/bar";
import "./Graph.scss";

const Graph1Y = ({ close, date }) => {
  console.log(close);
  console.log(date);

  return (
    <section className="graph-line-chart">
      <h1>Graph 1 year</h1>
    </section>
  );
};

Graph1Y.propTypes = {
  close: PropTypes.array.isRequired,
  date: PropTypes.array.isRequired,
};

export default Graph1Y;
