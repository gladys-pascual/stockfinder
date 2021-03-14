import SyncLoader from "react-spinners/SyncLoader";
import "./Loading.scss";

const LoadingSearchAPI = () => {
  return (
    <div className="loading-search-api">
      <SyncLoader color="#7bcbc4" size="15px" margin="2px" />
    </div>
  );
};

export default LoadingSearchAPI;
