import { Link, NavLink } from "react-router-dom";
import "./Header.scss";
import StockFinderLogo from "./StockFinderLogo.svg";

const Header = () => {
  return (
    <header>
      <Link exact="true" to="/" className="logo">
        <img src={StockFinderLogo} alt="Logo of StockFinder" />
      </Link>
      <nav className="dropdown">
        <ul className="dropdown-content">
          <li>
            <NavLink
              exact={true}
              to="/"
              activeClassName="selected"
              className="header-link"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/marketnews"
              activeClassName="selected"
              className="header-link"
            >
              Market News
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
