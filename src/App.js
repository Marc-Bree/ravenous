import BusinessList from "./businessList";
import SearchBar from "./searchBar";
import { getTerm } from "./utils";
import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  const searchYelp = (term, location, sortBy) => {
    console.log('API loading!');
    getTerm(term, location, sortBy).then(businesses => {
      console.log(businesses);
      console.log('200, API finished loading!');
      setData(businesses);
    });
  }

  return (
    <div className="App">
      <div className="banner">Ravenous</div>
      <SearchBar searchYelp={searchYelp} />
      <BusinessList businesses={data} />
    </div>
  );
}

export default App;