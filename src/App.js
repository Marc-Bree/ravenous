import BusinessList from "./businessList.js";
import SearchBar from "./searchBar.js";
import "./App.css"; //Global style

function App() {
  return (
    <div className="App">
      <div className="banner">
        Ravenous
      </div>
      <SearchBar />
      <BusinessList />
    </div>
  );
}

export default App;
