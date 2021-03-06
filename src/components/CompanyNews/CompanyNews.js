import axios from "axios";
import { useEffect, useState } from "react";
import "../CompanyNews/CompanyNews.scss";
import PropTypes from "prop-types";
import LoadingCurrentNews from "../Loading/LoadingCurrentNews";
import News from "../News/News";

const CompanyNews = ({ symbol, companyName }) => {
  const [companyNews, setCompanyNews] = useState([]);
  const [loading, setLoading] = useState(true);

  const today = Date.now();

  const newDate = new Date(today);
  const year = newDate.getFullYear();
  const day = newDate.getDate();
  const month_num = newDate.getMonth();

  // convert date formats so I can use them when calling api

  console.log(`${year} ${day} ${month_num}`);
  useEffect(() => {
    async function fetchCompanyNews() {
      try {
        const result = await axios.get(
          `https://finnhub.io/api/v1/company-news?symbol=${symbol}&from=2020-04-30&to=2020-05-01&token=${process.env.REACT_APP_API_KEY}`
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
  }, [symbol]);

  if (loading) {
    return <LoadingCurrentNews />;
  }

  console.log(companyNews);
  return (
    <section className="current-news-wrapper">
      <div className="current-news">
        <h1 className="current-news-title">
          {`News about ${companyName}`}{" "}
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
