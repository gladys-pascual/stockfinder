import PropTypes from "prop-types";
import { ResponsiveLine } from "@nivo/bar";
import "./Graph.scss";

const Graph1M = ({ close, date }) => {
  console.log(close);
  console.log(date);

  return (
    <section className="graph-line-chart">
      <h1>Graph 1 month</h1>
    </section>
  );
};

Graph1M.propTypes = {
  close: PropTypes.array.isRequired,
  date: PropTypes.array.isRequired,
};

export default Graph1M;
