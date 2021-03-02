import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Search.scss";
import axios from "axios";

const Search = () => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState(null);
  let history = useHistory();

  async function getCompanyData() {
    try {
      const results = await axios.get(
        `https://finnhub.io/api/v1/search?q=${query}&token=${process.env.REACT_APP_API_KEY}`
      );
      console.log(results);
      const firstFiveResults = results.data.result.slice(0, 5);
      setSearchResults(firstFiveResults);
    } catch (err) {
      console.log("Error fetching and parsing data", err);
    }
  }

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    if (query && query.length > 0) {
      getCompanyData();
    }
  };

  const hanldeItemClick = (item) => {
    console.log(item);
    setSelectedCompany(item);
    setQuery("");
    history.push(`/quote/${item.symbol}`);
  };

  const results = searchResults.map((item, idx) => {
    return (
      <li
        className="result-item"
        key={idx}
        onClick={() => hanldeItemClick(item)}
      >
        <p className="company-name">{item.description} </p>
        <p className="company-symbol">{item.symbol}</p>
      </li>
    );
  });

  console.log(selectedCompany);

  return (
    <>
      <form className="search-form">
        <div className="form-wrapper">
          <input
            className="search-input"
            type="text"
            name="query"
            placeholder="Search for symbol or company name..."
            onChange={handleInputChange}
          ></input>
          <button type="submit" id="submit">
            <p>Search</p>
          </button>
        </div>
      </form>
      <div className="query-results-list">
        {query.length > 1 && <ul>{results}</ul>}
      </div>
    </>
  );
};

export default Search;
