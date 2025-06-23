import React, { useState, useEffect } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer() {
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
    listings.map((listing) => (
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

  return (
    <main>
      <ul className="cards">{renderListings()}</ul>
    </main>
  );
}

export default ListingsContainer;
