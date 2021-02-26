import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <Link exact="true" to="/" className="logo">
        <img src="https://via.placeholder.com/50" alt="Logo of StockFinder" />
      </Link>
    </header>
  );
};

export default Header;
