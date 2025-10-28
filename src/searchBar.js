import './searchBar.css';

function SearchBar() {
  const options = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count"
  };

  const sortOptions = () => {
    return Object.entries(options).map(([label, value]) => (
      <li key={value}>{label}</li>
    ));
  };

  return (
    <div className="searchBar">
      <div className="options">
        {sortOptions()}
      </div>
      <div className="inputField">
        <input className="input" placeholder="Business" />
        <input className="input" placeholder="Where" />
      </div>
      <div className="submitField">
        <button>Search</button>
      </div>
    </div>
  );
}

export default SearchBar;