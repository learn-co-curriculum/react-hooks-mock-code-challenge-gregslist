import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import NewListingForm from "./NewListingForm";

function App() {
  const [listings, setListings] = useState([]);
  const [search, setSearch] = useState("");
  const [sortByLocation, setSortByLocation] = useState(false);

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((res) => res.json())
      .then((data) => setListings(data));
  }, []);

  function handleFavorite(id) {
    setListings((prev) =>
      prev.map((listing) =>
        listing.id === id
          ? { ...listing, favorited: !listing.favorited }
          : listing
      )
    );
  }

  function handleDelete(id) {
    fetch(`http://localhost:6001/listings/${id}`, { method: "DELETE" })
      .then(() => {
        setListings((prev) => prev.filter((listing) => listing.id !== id));
      });
  }

  const filteredListings = listings.filter((listing) =>
    listing.description.toLowerCase().includes(search.toLowerCase())
  );
  
  if (sortByLocation) {
    filteredListings.sort((a, b) => a.location.localeCompare(b.location));
  }

  function handleAddListing(newListing) {
    fetch('http://localhost:6001/listings', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newListing),
    })
      .then((res) => res.json())
      .then((savedListing) => {
        setListings((prev) => [ ...prev, savedListing]);
      });
  }

  return (
    <div className="app">
      <Header onSearch={setSearch} onSort={() => setSortByLocation((prev) => !prev)} />
      <NewListingForm onAddListing={handleAddListing} />
      <ListingsContainer
        listings={filteredListings}
        onFavorite={handleFavorite}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;