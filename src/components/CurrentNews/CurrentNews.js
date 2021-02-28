import { useEffect, useState } from "react";
import News from "../News/News";
import "./CurrentNews.scss";
import axios from "axios";
import Loading from "../Loading/Loading";

const CurrentNews = () => {
  const [currentNews, setCurrentNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://finnhub.io/api/v1/news?category=general&token=${process.env.REACT_APP_API_KEY}`
      )
      .then((response) => {
        const firstTenNews = response.data.slice(0, 10);
        setCurrentNews(firstTenNews);
        setLoading(false);
      })
      .catch((err) => console.log("Error fetching and parsing data", err));
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="current-news-wrapper">
      <div className="current-news">
        <h1 className="current-news-title">
          See the latest market news{" "}
          <i className="fas fa-newspaper">
            <span className="sr-only">Newspaper icon</span>
          </i>
        </h1>
        {currentNews.map((news) => {
          return <News news={news} key={news.id} />;
        })}
      </div>
    </section>
  );
};

export default CurrentNews;
