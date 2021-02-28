import PacmanLoader from "react-spinners/PacmanLoader";
import "./Loading.scss";

const Loading = () => {
  return (
    <>
      <h1 className="loading-heading">Loading the latest market news...</h1>
      <div className="loading">
        <PacmanLoader color="#7bcbc4" size="60px" />
      </div>
    </>
  );
};

export default Loading;
