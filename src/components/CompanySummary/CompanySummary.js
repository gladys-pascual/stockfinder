import "./CompanySummary.scss";
import PropTypes from "prop-types";

const CompanySummary = ({
  companyName,
  ticker,
  industry,
  currentPrice,
  openPrice,
  prevClose,
  high,
  low,
  marketCap,
  ipo,
}) => {
  //Determine if current price is below or above the opening price
  const profitOrLoss = currentPrice - openPrice;

  const currentPricePnL = (profitOrLoss) => {
    if (Math.sign(profitOrLoss) === 1) {
      return "profit";
    } else {
      return "loss";
    }
  };

  //Convert Market Cap prices to million, billion or trillion
  const convertMarketCap = (price) => {
    if (price.toFixed(0).toString().length <= 3) {
      return `${price.toFixed(1)} M`;
    } else if (
      price.toFixed(0).toString().length > 3 &&
      price.toFixed(0).toString().length <= 6
    ) {
      return `${(price / 1000).toFixed(1)} B`;
    } else if (price.toFixed(0).toString().length > 6) {
      return `${(price / 1000000).toFixed(1)} T`;
    }
  };

  // Convert IPO date to month and year
  const convertIpo = (date) => {
    const stringDate = date.split("");
    const year = stringDate.slice(0, 4).join("");
    let month = stringDate.slice(5, 7).join("");
    if (month === "01") {
      month = "Jan";
    } else if (month === "02") {
      month = "Feb";
    } else if (month === "03") {
      month = "Mar";
    } else if (month === "04") {
      month = "Apr";
    } else if (month === "05") {
      month = "May";
    } else if (month === "06") {
      month = "Jun";
    } else if (month === "07") {
      month = "Jul";
    } else if (month === "08") {
      month = "Aug";
    } else if (month === "09") {
      month = "Sep";
    } else if (month === "10") {
      month = "Oct";
    } else if (month === "11") {
      month = "Nov";
    } else if (month === "12") {
      month = "Dec";
    }
    return `${month} ${year}`;
  };

  return (
    <section className="company-summary">
      <div className="summary-wrapper">
        <div className="lhs">
          <div className="company-header">
            <h1 className="ticker">{ticker}</h1>
            <div>
              <p className="company-name">{companyName}</p>
              <p className={industry === "N/A" ? "no-display" : "industry"}>
                {industry}
              </p>
            </div>
          </div>

          <p className={`current-price-label ${currentPricePnL(profitOrLoss)}`}>
            Current Price
          </p>
          <div className="price-and-pnl">
            <h1 className={`current-price ${currentPricePnL(profitOrLoss)}`}>
              {currentPrice}
            </h1>
            <p className={`${currentPricePnL(profitOrLoss)} pnl`}>
              {Math.sign(profitOrLoss) === 1
                ? `+${((profitOrLoss / currentPrice) * 100).toFixed(1)} %`
                : `${((profitOrLoss / currentPrice) * 100).toFixed(1)} %`}
            </p>
          </div>
        </div>
        <div className="rhs">
          <div className="prices">
            <div className="prices-lhs">
              <p className="prices-heading">OPEN</p>
              <p className="prices-text">{openPrice}</p>
            </div>
            <div className="prices-rhs">
              <p className="prices-heading">PREV CLOSE</p>
              <p className="prices-text">{prevClose}</p>
            </div>
          </div>
          <div className="prices">
            <div className="prices-lhs">
              <p className="prices-heading">HIGH</p>
              <p className="prices-text">{high}</p>
            </div>
            <div className="prices-rhs">
              <p className="prices-heading">LOW</p>
              <p className="prices-text">{low}</p>
            </div>
          </div>
          <div className="prices">
            <div className="prices-lhs">
              <p className="prices-heading">MARKET CAP</p>
              <p className="prices-text">{convertMarketCap(marketCap)}</p>
            </div>
            <div className="prices-rhs">
              <p className="prices-heading">IPO</p>
              <p className="prices-text">{convertIpo(ipo)}</p>
            </div>
          </div>
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
  openPrice: PropTypes.number.isRequired,
  prevClose: PropTypes.number.isRequired,
  high: PropTypes.number.isRequired,
  low: PropTypes.number.isRequired,
  marketCap: PropTypes.number.isRequired,
  ipo: PropTypes.string.isRequired,
};

export default CompanySummary;
