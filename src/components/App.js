import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import ListingCard from "./ListingCard";

function App() {
  const [isListing, setListing] = useState([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((res) => {
        if (!res.ok) throw new Error("Loading listings failed!");
        return res.json();
      })
      .then((listings) => setListing(listings))
      .catch((err) => setError(err));
  }, []);

  if (error) {
    throw error;
  }

  function handleAddListing(newListing) {
    setListing([...isListing, newListing]);

    fetch("http://localhost:6001/listings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newListing),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Adding listing failed!");
        return res.json();
      })
      .then((savedListing) => setListing([...isListing, savedListing]))
      .catch((err) => setError(err));
  }

  const displayedSearch = isListing.filter((listing) => {
    const searchResult = listing.description || listing.location || "";
    return searchResult.toLowerCase().includes(search.toLowerCase());
  });

  function handleDeleteListing(id) {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          const updatedListings = isListing.filter(
            (listing) => listing.id !== id,
          );
          setListing(updatedListings);
        }
      })
      .catch((error) => console.error("Delete failed:", error));
  }

  return (
    <div className="app">
      <Header
        search={search}
        onSearchChange={setSearch}
        onAddListing={handleAddListing}
      />
      <ListingsContainer
        listings={displayedSearch}
        onDeleteListing={handleDeleteListing}
      />
    </div>
  );
}

export default App;
