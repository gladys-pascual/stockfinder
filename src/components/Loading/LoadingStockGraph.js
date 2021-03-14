import PacmanLoader from "react-spinners/PacmanLoader";
import "./Loading.scss";

const LoadingStockGraph = () => {
  return (
    <div className="loading-stock-graph-header">
      <h1 className="loading-heading">Loading your stock prices...</h1>
      <div className="loading-stock-graph">
        <PacmanLoader color="#7bcbc4" size="60px" />
      </div>
    </div>
  );
};

export default LoadingStockGraph;
