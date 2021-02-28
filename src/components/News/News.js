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
            <p className="time">time</p>
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
