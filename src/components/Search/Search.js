import "./Search.scss";

const Search = () => {
  return (
    <form className="search-form">
      <div className="form-wrapper">
        <input
          className="search-input"
          type="text"
          name="query"
          placeholder="Search for symbol or company name..."
        ></input>
        <button type="submit" id="submit">
          <p>Search</p>
        </button>
      </div>
    </form>
  );
};

export default Search;
