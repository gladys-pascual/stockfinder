import News from "../News/News";
import "./CurrentNews.scss";

const CurrentNews = () => {
  return (
    <section className="current-news-wrapper">
      <div className="current-news">
        <h1 className="current-news-title">
          See the latest market news{" "}
          <i className="fas fa-newspaper">
            <span className="sr-only">Newspaper icon</span>
          </i>
        </h1>
        <News />
      </div>
    </section>
  );
};

export default CurrentNews;
