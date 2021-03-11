import PropTypes from "prop-types";
import { ResponsiveLine } from "@nivo/bar";
import "./Graph.scss";

const Graph5Y = ({ close, date }) => {
  console.log(close);
  console.log(date);

  return (
    <section className="graph-line-chart">
      <h1>Graph 5 years</h1>
    </section>
  );
};

Graph5Y.propTypes = {
  close: PropTypes.array.isRequired,
  date: PropTypes.array.isRequired,
};

export default Graph5Y;
