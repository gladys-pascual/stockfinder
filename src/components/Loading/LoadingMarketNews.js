import PacmanLoader from "react-spinners/PacmanLoader";
import "./Loading.scss";

const LoadingMarketNews = () => {
  return (
    <>
      <h1 className="loading-heading">Loading the latest market news...</h1>
      <div className="loading-market-news">
        <PacmanLoader color="#7bcbc4" size="60px" />
      </div>
    </>
  );
};

export default LoadingMarketNews;
