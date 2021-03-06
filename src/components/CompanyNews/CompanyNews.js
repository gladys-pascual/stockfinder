import axios from "axios";
import { useEffect, useState } from "react";
import "../CompanyNews/CompanyNews.scss";
import PropTypes from "prop-types";
import LoadingCurrentNews from "../Loading/LoadingCurrentNews";
import News from "../News/News";

const CompanyNews = ({ symbol, companyName }) => {
  const [companyNews, setCompanyNews] = useState([]);
  const [loading, setLoading] = useState(true);

  // Get today's date and format it to use for the API
  const today = new Date();

  const day = today.getDate(); // day
  let dayString;
  if (day.toString().split("").length === 1) {
    dayString = `0${day}`;
  } else {
    dayString = `${day}`;
  }
  const month = today.getMonth() + 1; //month
  let monthString;
  if (month.toString().split("").length === 1) {
    monthString = `0${month}`;
  } else {
    monthString = `${month}`;
  }
  const year = today.getFullYear(); //year
  const todayFormat = `${year}-${monthString}-${dayString}`;

  // Get last month's date and format it to use for the API
  const monthAgo = (dayString, month, year) => {
    let lastMonth;
    if (month === 1) {
      // If month is January, last month will be December of previous year
      lastMonth = 12;
      year = year - 1;
    } else {
      lastMonth = month - 1;
    }
    let lastMonthString;
    if (lastMonth.toString().split("").length === 1) {
      lastMonthString = `0${lastMonth}`;
    } else {
      lastMonthString = `${lastMonth}`;
    }
    return `${year}-${lastMonthString}-${dayString}`;
  };
  const monthAgoFormat = monthAgo(dayString, month, year);

  useEffect(() => {
    async function fetchCompanyNews() {
      try {
        const result = await axios.get(
          `https://finnhub.io/api/v1/company-news?symbol=${symbol}&from=${monthAgoFormat}&to=${todayFormat}&token=${process.env.REACT_APP_API_KEY}`
        );
        console.log(result.data);
        const firstFiveNews = result.data.slice(0, 5);
        setCompanyNews(firstFiveNews);
        setLoading(false);
      } catch (err) {
        console.log("Error fetching and parsing data", err);
        setLoading(false);
      }
    }
    fetchCompanyNews();
  }, [symbol, todayFormat, monthAgoFormat]);

  if (loading) {
    return <LoadingCurrentNews />;
  }

  console.log(companyNews);
  return (
    <section className="current-news-wrapper">
      <div className="current-news">
        <h1 className="current-news-title">
          {`See the latest news about ${companyName}`}{" "}
          <i className="fas fa-newspaper">
            <span className="sr-only">Newspaper icon</span>
          </i>
        </h1>
        {companyNews.map((news) => {
          return <News news={news} key={news.id} />;
        })}
      </div>
    </section>
  );
};
CompanyNews.propTypes = {
  symbol: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
};

export default CompanyNews;
