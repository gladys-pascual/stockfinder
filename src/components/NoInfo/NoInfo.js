import { Link } from "react-router-dom";
import "./NoInfo.scss";

const NoInfo = () => {
  return (
    <div className="no-info">
      <div className="heart-broken-wrapper">
        <i className="fas fa-heart-broken heart-broken">
          <span className="sr-only">Heart broken emoji</span>
        </i>
      </div>
      <h1 className="no-info-heading">
        Unfortunately, information about this stock is not available.
      </h1>
      <h1 className="no-info-heading">
        Please{" "}
        <Link exact={true} to="/">
          search
        </Link>{" "}
        for another stock.
      </h1>
    </div>
  );
};

export default NoInfo;
