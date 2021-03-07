import "./Analysis.scss";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import axios from "axios";
import LoadingSearchAPI from "../Loading/LoadingSearchAPI";
import AnalysisBarChart from "./AnalysisBarChart";

const Analysis = ({ symbol, companyName }) => {
  const [analysisData, setAnalysisData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAnalysisData() {
      try {
        const result = await axios.get(
          `https://finnhub.io/api/v1/stock/recommendation?symbol=${symbol}&token=${process.env.REACT_APP_API_KEY}`
        );
        setAnalysisData(result.data[0]);
        setLoading(false);
      } catch (err) {
        console.log("Error fetching and parsing data", err);
        setLoading(false);
      }
    }
    fetchAnalysisData();
  }, [symbol]);

  if (loading) {
    return <LoadingSearchAPI />;
  }

  const period = analysisData.period;
  const formatDate = (date) => {
    const splitDate = date.split("");

    const year = splitDate.slice(0, 4).join("");
    const day = splitDate.slice(8, 10).join("");
    const monthNum = splitDate.slice(5, 7).join("");
    let month;
    if (monthNum === "01") {
      month = "Jan";
    } else if (monthNum === "02") {
      month = "Feb";
    } else if (monthNum === "03") {
      month = "Mar";
    } else if (monthNum === "04") {
      month = "Apr";
    } else if (monthNum === "05") {
      month = "May";
    } else if (monthNum === "06") {
      month = "Jun";
    } else if (monthNum === "07") {
      month = "Jul";
    } else if (monthNum === "08") {
      month = "Aug";
    } else if (monthNum === "09") {
      month = "Sep";
    } else if (monthNum === "10") {
      month = "Oct";
    } else if (monthNum === "11") {
      month = "Nov";
    } else if (monthNum === "12") {
      month = "Dec";
    }

    return `${month} ${day} ${year}`;
  };

  const strongBuy = analysisData.strongBuy;
  const buy = analysisData.buy;
  const hold = analysisData.hold;
  const sell = analysisData.sell;
  const strongSell = analysisData.strongSell;
  const total = strongBuy + buy + hold + sell + strongSell;

  const recommendationData = {
    "Strong Buy": strongBuy,
    Buy: buy,
    Hold: hold,
    Sell: sell,
    "Strong Sell": strongSell,
  };

  let maxVote = 0;
  let maxVoteKey;
  let maxVoteKeyClassName;

  for (const recommendation in recommendationData) {
    if (recommendationData[recommendation] > maxVote) {
      maxVote = recommendationData[recommendation];
      maxVoteKey = recommendation;
      maxVoteKeyClassName = recommendation.replace(" ", "-");
    }
  }

  return (
    <section>
      <h1 className="analysis-title">
        {`Analysis for ${companyName}`}{" "}
        <i className="fas fa-chart-bar">
          <span className="sr-only">Bar chart icon</span>
        </i>
      </h1>
      <div className="advice-and-chart">
        <div className="advice">
          <p className="advice-date">{`Based on ${total} analyst, as of ${formatDate(
            period
          )}:`}</p>
          <h1 className={`advice-heading ${maxVoteKeyClassName}`}>
            {" "}
            {maxVoteKey}
          </h1>
          <p className="disclaimer">
            Disclaimer: The analysis information is for reference only and does
            not constitute an investment recommendation.
          </p>
        </div>
        <div className="analysis-bar-chat-wrapper">
          <AnalysisBarChart
            strongBuy={strongBuy}
            buy={buy}
            hold={hold}
            sell={sell}
            strongSell={strongSell}
            total={total}
          />
        </div>
      </div>
    </section>
  );
};

Analysis.propTypes = {
  symbol: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
};
export default Analysis;
