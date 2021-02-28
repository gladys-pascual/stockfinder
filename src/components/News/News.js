import "./News.scss";

const News = () => {
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
    } else if (elapsed < msPerMonth) {
      return Math.round(elapsed / msPerDay) + " days ago";
    } else if (elapsed < msPerYear) {
      return Math.round(elapsed / msPerMonth) + " months ago";
    } else {
      return Math.round(elapsed / msPerYear) + " years ago";
    }
  }
  const currentTime = Date.now();
  const newsTime = timeDifference(currentTime, +`${1614304447}000`);

  return (
    <a
      href="https://www.bloomberg.com/news/articles/2021-02-28/thailand-kicks-off-covid-19-vaccine-program-with-sinovac-shots"
      target="_blank"
      rel="noreferrer"
      className="news-link"
    >
      <section className="news">
        <div className="news-picture">
          <img src="https://image.cnbcfm.com/api/v1/image/106846604-16143685932021-02-26t191137z_1609913315_rc2j0m9vrk0y_rtrmadp_0_usa-biden-texas.jpeg?v=1614368630" />
        </div>
        <div className="news-info">
          <div className="category-source-time">
            <p className={`category ${categoryClassName["business"]}`}>
              {upperCase("business")}
            </p>
            <p className="source">CNBC</p>
            <p className="time">{newsTime}</p>
          </div>
          <h3 className="headline">
            People have spent more than $230 million buying and trading digital
            collectibles of NBA highlights
          </h3>
          <p className="summary">
            NBA Top Shots is like trading cards, but with a video highlight
            instead of a photo. People have spent more than $230 million buying
            and trading NBA highlights.
          </p>
        </div>
      </section>
    </a>
  );
};

export default News;
