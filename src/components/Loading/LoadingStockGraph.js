import PacmanLoader from "react-spinners/PacmanLoader";
import "./Loading.scss";

const LoadingStockGraph = () => {
  return (
    <>
      <h1 className="loading-heading">Loading your stock prices...</h1>
      <div className="loading-stock-graph">
        <PacmanLoader color="#7bcbc4" size="60px" />
      </div>
    </>
  );
};

export default LoadingStockGraph;
