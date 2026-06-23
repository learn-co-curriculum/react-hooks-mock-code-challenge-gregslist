import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((r) => r.json())
      .then((data) => setListings(data));
  }, []);

  function handleDeleteListing(id) {
  fetch(`http://localhost:6001/listings/${id}`, {
    method: "DELETE",
  });

  const updatedListings = listings.filter((listing) => listing.id !== id);
  setListings(updatedListings);
}

  return (
    <div className="app">
      <Header />
      <ListingsContainer listings={listings} />
    </div>
  );
}

export default App;