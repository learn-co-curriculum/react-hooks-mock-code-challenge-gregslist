import React, { useEffect, useState } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer() {
  const listingsUrl = "http://localhost:6001/listings/";
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch(listingsUrl)
      .then((r) => r.json())
      .then((data) => setListings(data));
  }, []);

  return (
    <main>
      <ul className="cards">
        {listings.map((item) => (
          <ListingCard key={item.id} item={item} />
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
