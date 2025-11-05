import './searchBar.css';
import { useState, useEffect } from 'react';

export default function SearchBar() {

  const [term, setTerm] = useState('');
  function changeTerm(e) {
    setTerm(e.target.value);
  }
  const [location, setLocation] = useState('');
  function changeLocation(e) {
    setLocation(e.target.value);
  } 

  const [sortBy, setSortBy] = useState('');
  function changeSortBy(value) {
    setSortBy(value);
  }
  // Logs the updated useStates
  useEffect(() => {
    console.log(`sortBy useState : ${sortBy}`);
    console.log(`location useState : ${location}`);
    console.log(`term useState : ${term}`)
  }, [sortBy, location, term]);

  function searchFeedback() {
    console.log(`Searching Yelp with ${term}, ${location}, ${sortBy}`);
  }

  const options = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count"
  };

  const sortOptions = () => {
    return Object.entries(options).map(([label, value]) => (
      <li 
      key={value}
      data-value={value}
      className={sortBy === value ? 'active' : ''}
      onClick={() => changeSortBy(value)}
      >
        {label}
      </li>
    ));
  };

  return (
    <div className="searchBar">
      <div className="options">
        {sortOptions()}
      </div>
      <div className="inputField">
        <input 
        className="input" 
        placeholder="Business"
        value={term}
        onChange={changeTerm} />
        <input 
        className="input" 
        placeholder="Where"
        value={location}
        onChange={changeLocation} />
      </div>
      <div className="submitField">
        <button onClick={searchFeedback} >Search</button>
      </div>
    </div>
  );
}