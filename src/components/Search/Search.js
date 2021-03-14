import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Search.scss";
import axios from "axios";
import LoadingSearchAPI from "../Loading/LoadingSearchAPI";

const Search = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [loading, setLoading] = useState(false);
  let history = useHistory();

  async function getCompanyData(inputValue) {
    setLoading(true);
    try {
      const results = await axios.get(
        `https://finnhub.io/api/v1/search?q=${inputValue}&token=${process.env.REACT_APP_API_KEY}`
      );
      const firstFiveResults = results.data.result.slice(0, 5);
      setSearchResults(firstFiveResults);
      setSelectedCompany(firstFiveResults[0]);
      setLoading(false);
    } catch (err) {
      console.log("Error fetching and parsing data", err);
      setLoading(false);
    }
  }

  // Returns a function, that, as long as it continues to be invoked, will not be triggered.
  // The function will be called after it stops being called for `wait` milliseconds.
  const debounce = (func, wait) => {
    let timeout;
    // This is the function that is returned and will be executed many times
    return function executedFunction(...args) {
      const later = () => {
        timeout = null;
        func(...args);
      };
      // This will reset the waiting every function execution.
      clearTimeout(timeout);
      // Restart the debounce waiting period. setTimeout returns a truthy value (it differs in web vs Node)
      timeout = setTimeout(later, wait);
    };
  };

  const debouncedInputChange = debounce((e) => {
    const inputValue = e.target.value;
    if (inputValue && inputValue.length > 0) {
      getCompanyData(inputValue);
    } else {
      setSearchResults([]);
      setSelectedCompany(null);
    }
  }, 500);

  const hanldeItemClick = (item) => {
    setSelectedCompany(item);
    history.push(`/quote/${item.symbol}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedCompany) {
      history.push(`/quote/${selectedCompany.symbol}`);
    }
  };

  const results = searchResults.map((item, i) => {
    return (
      <li
        className={
          (selectedCompany && selectedCompany.symbol) === item.symbol
            ? "active result-item"
            : "result-item"
        }
        key={i}
        onClick={() => hanldeItemClick(item)}
      >
        <p className="company-name">{item.description} </p>
        <p className="company-symbol">{item.symbol}</p>
      </li>
    );
  });

  return (
    <>
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-wrapper">
          <input
            className="search-input"
            type="text"
            name="query"
            placeholder="Search for symbol or company name..."
            onChange={debouncedInputChange}
          ></input>
        </div>
      </form>
      <div className="query-results-list">
        {loading ? (
          <LoadingSearchAPI />
        ) : (
          <ul className="results">{results}</ul>
        )}
      </div>
    </>
  );
};

export default Search;
