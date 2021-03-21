import "./News.scss";
import PropTypes from "prop-types";

const News = ({ news }) => {
  const { category, datetime, headline, image, source, summary, url } = news;

  // Function that  turns the first letter of category uppercase
  // If the category has two words or more, upper case start of each word
  // otherwise capitalize the first letter of the word
  const upperCase = (category) => {
    if (category.includes(" ")) {
      const splitCategory = category.split(" "); //an array
      const upperCasedWords = splitCategory.map((word) => {
        return word[0].toUpperCase() + word.slice(1);
      });
      return upperCasedWords.join(" ");
    } else {
      return category.charAt(0).toUpperCase() + category.slice(1);
    }
  };

  //  For conditional rendering of class name of category
  const categoryClassName = {
    "top news": "top-news",
    business: "business",
  };

  // Converting time given by API to relative time
  function timeDifference(current, previous) {
    const msPerMinute = 60 * 1000;
    const msPerHour = msPerMinute * 60;
    const msPerDay = msPerHour * 24;
    const msPerMonth = msPerDay * 30;
    const msPerYear = msPerDay * 365;
    const elapsed = current - previous;
    if (elapsed < msPerMinute) {
      return Math.round(elapsed / 1000) + " seconds ago";
    } else if (elapsed < msPerHour) {
      return Math.round(elapsed / msPerMinute) + " minutes ago";
    } else if (elapsed < msPerDay) {
      return Math.round(elapsed / msPerHour) + " hours ago";
    } else if (elapsed < msPerMonth && Math.round(elapsed / msPerDay) == 1) {
      return Math.round(elapsed / msPerDay) + " day ago";
    } else if (elapsed < msPerMonth) {
      return Math.round(elapsed / msPerDay) + " days ago";
    } else if (elapsed < msPerYear) {
      return Math.round(elapsed / msPerMonth) + " months ago";
    } else {
      return Math.round(elapsed / msPerYear) + " years ago";
    }
  }
  const currentTime = Date.now();
  const newsTime = timeDifference(currentTime, +`${datetime}000`);

  return (
    <a href={url} target="_blank" rel="noreferrer" className="news-link">
      <section className="news">
        <div className="news-picture">
          <img src={image} alt={headline} />
        </div>
        <div className="news-info">
          <div className="category-source-time">
            <p className={`category ${categoryClassName[category]}`}>
              {upperCase(category)}
            </p>
            <p className="source">{source}</p>
            <p className="time">{newsTime}</p>
          </div>
          <h3 className="headline">{headline}</h3>
          <p className="summary">{summary}</p>
        </div>
      </section>
    </a>
  );
};

News.propTypes = {
  news: PropTypes.object.isRequired,
};

export default News;
