import { useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([]);
  const getAllListings = () => {
    return fetch("http://localhost:6001/listings")
      .then((r) => r.json())
      .then(listings);
  };
  return (
    <div className="app">
      <Header
        listings={listings}
        setListings={setListings}
        getAllListings={getAllListings}
      />
      <ListingsContainer
        listings={listings}
        setListings={setListings}
        getAllListings={getAllListings}
      />
    </div>
  );
}

export default App;
