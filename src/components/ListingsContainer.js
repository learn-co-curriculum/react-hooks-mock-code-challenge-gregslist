import React, { useState, useEffect } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer() {
  const url = "http://localhost:6001/listings";
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setListings(data);
      });
  }, []);
  console.log(listings);

  const renderListings = () =>
    listings.map((listing) => (
      <ListingCard
        key={listing.id}
        src={listing.image}
        alt={listing.description}
        description={listing.description}
        location={listing.location}
      />
    ));

  return (
    <main>
      <ul className="cards">{renderListings()}</ul>
    </main>
  );
}

export default ListingsContainer;
