import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer-section">
      <a
        href="https://finnhub.io/docs/api"
        target="_blank"
        rel="noopener noreferrer"
        className="finnhub"
      >
        <div
          className="finnhub-logo"
          href="https://finnhub.io/docs/api"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="finnhub-logo-img"
            src="https://static.finnhub.io/img/finnhub_2020-05-09_20_51/logo/logo-gradient-thumbnail-trans.png"
            alt="Finnhub logo"
          />
        </div>
        <p className="finnhub-text">This website uses the Finnhub API.</p>
      </a>

      <ul className="footer-socials">
        <li>
          <a
            href="https://github.com/gladys-pascual/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github">
              <span className="sr-only">GitHub icon</span>
            </i>
          </a>
        </li>
        <li>
          <a
            href="https://dev.to/gladyspascual"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-dev">
              <span className="sr-only">Dev icon</span>
            </i>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/gladyspascual/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin">
              <span className="sr-only">LinkedIn icon</span>
            </i>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
