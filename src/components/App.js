import { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([]);

  // Fetch all listings from the server
  const fetchListings = async () => {
    const response = await fetch("http://localhost:6001/listings");
    const data = await response.json();
    setListings(data);
  };

  useEffect(() => {
    fetchListings();
  }, []);

  // Add a new listing
  const addListing = async (newListing) => {
    const response = await fetch("http://localhost:6001/listings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newListing),
    });
    const addedListing = await response.json();
    setListings((curr) => [...curr, addedListing]);
  };

  // Delete a listing
  const deleteListing = async (id) => {
    await fetch(`http://localhost:6001/listings/${id}`, { method: "DELETE" });
    setListings((curr) => curr.filter((listing) => listing.id !== id));
  };

  // Sort listings by location
  const sortListings = () => {
    setListings((curr) =>
      [...curr].sort((a, b) => a.location.localeCompare(b.location)),
    );
  };

  // Filter listings by description
  const filterListings = async (searchValue) => {
    const response = await fetch("http://localhost:6001/listings");
    const allListings = await response.json();
    setListings(
      allListings.filter(
        (listing) =>
          searchValue === "" ||
          listing.description.toLowerCase().includes(searchValue.toLowerCase()),
      ),
    );
  };

  return (
    <div className="app">
      <Header
        listings={listings}
        addListing={addListing}
        sortListings={sortListings}
        filterListings={filterListings}
      />
      <ListingsContainer listings={listings} deleteListing={deleteListing} />
    </div>
  );
}

export default App;
