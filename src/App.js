import BusinessList from "./businessList";
import SearchBar from "./searchBar";
import webkitchen from './Webkitchen.png';
import "./App.css";

function App() {
    const businesses = [
      {
        imageSrc: webkitchen,
        name: "Name",
        address: "Address",
        city: "City",
        state: "State",
        zipCode: "ZipCode",
        category: "Category",
        rating: "Rating",
        reviewCount: "ReviewCount"
      },
      {
        imageSrc: webkitchen,
        name: "Name",
        address: "Address",
        city: "City",
        state: "State",
        zipCode: "ZipCode",
        category: "Category",
        rating: "Rating",
        reviewCount: "ReviewCount"
      },
      {
        imageSrc: webkitchen,
        name: "Name",
        address: "Address",
        city: "City",
        state: "State",
        zipCode: "ZipCode",
        category: "Category",
        rating: "Rating",
        reviewCount: "ReviewCount"
      },
      {
        imageSrc: webkitchen,
        name: "Name",
        address: "Address",
        city: "City",
        state: "State",
        zipCode: "ZipCode",
        category: "Category",
        rating: "Rating",
        reviewCount: "ReviewCount"
      },
      {
        imageSrc: webkitchen,
        name: "Name",
        address: "Address",
        city: "City",
        state: "State",
        zipCode: "ZipCode",
        category: "Category",
        rating: "Rating",
        reviewCount: "ReviewCount"
      }
    ];

  return (
    <div className="App">
      <div className="banner">Ravenous</div>
      <SearchBar />
      <BusinessList businesses={businesses} />
    </div>
  );
}

export default App;
