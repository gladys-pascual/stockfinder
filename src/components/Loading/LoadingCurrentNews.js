import PacmanLoader from "react-spinners/PacmanLoader";
import "./Loading.scss";

const LoadingCurrentNews = () => {
  return (
    <>
      <h1 className="loading-heading">Loading the latest company news...</h1>
      <div className="loading-market-news">
        <PacmanLoader color="#7bcbc4" size="60px" />
      </div>
    </>
  );
};

export default LoadingCurrentNews;
