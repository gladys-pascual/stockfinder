import { Link, NavLink } from "react-router-dom";
import "./Header.scss";
import StockFinderLogo from "./StockFinderLogo.svg";

const Header = () => {
  return (
    <header>
      <Link exact="true" to="/" className="logo">
        <img src={StockFinderLogo} alt="Logo of StockFinder" />
      </Link>
      <nav>
        <ul>
          <li>
            <NavLink
              exact={true}
              to="/"
              activeClassName="selected"
              className="home-link"
            >
              Home
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
