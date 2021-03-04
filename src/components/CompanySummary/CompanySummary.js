import "./CompanySummary.scss";
import PropTypes from "prop-types";

const CompanySummary = ({ companyName, ticker, industry, currentPrice }) => {
  console.log(currentPrice);
  return (
    <section className="company-summary">
      <div className="summary-wrapper">
        <div className="lhs">
          <div className="company-header">
            <h1 className="ticker">{ticker}</h1>
            <div>
              <p className="company-name">{companyName}</p>
              <p className="industry">{industry}</p>
            </div>
          </div>
          <h1 className="current-price">{currentPrice}</h1>
        </div>
        <div className="rhs">
          <p>RHS</p>
        </div>
      </div>
    </section>
  );
};

CompanySummary.propTypes = {
  companyName: PropTypes.string.isRequired,
  ticker: PropTypes.string.isRequired,
  industry: PropTypes.string.isRequired,
  currentPrice: PropTypes.number.isRequired,
};

export default CompanySummary;
