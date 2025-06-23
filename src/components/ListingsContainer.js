import React, { useState, useEffect } from "react";
import ListingCard from "./ListingCard";
import AddItem from "./AddItem";

function ListingsContainer({ searchItem }) {
  const url = "http://localhost:6001/listings/";
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setListings(data);
      });
  }, []);

  const renderListings = () =>
    filteredListing.map((listing) => (
      <ListingCard
        id={listing.id}
        key={listing.id}
        src={listing.image}
        alt={listing.description}
        description={listing.description}
        location={listing.location}
        onDelete={handleDelete}
      />
    ));

  const deleteListing = (id) => {
    const updatedListing = listings.filter((listing) => listing.id !== id);
    setListings(updatedListing);
  };

  const handleDelete = (id) => {
    fetch(`${url}${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => deleteListing(id));
  };

  const filteredListing = listings.filter((listing) =>
    listing.description.toLowerCase().includes(searchItem.toLowerCase())
  );

  const handleNewListing = (newListing) => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newListing),
    })
      .then((res) => res.json())
      .then((newItem) => {
        setListings([...listings, newItem]);
      });
  };

  return (
    <main>
      <AddItem handleNewListing={handleNewListing} />
      <ul className="cards">{renderListings()}</ul>
    </main>
  );
}

export default ListingsContainer;
