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

  const deleteItem = (id) => {
    fetch(listingsUrl + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(setListings(listings.filter((item) => item.id !== id)));
  };

  return (
    <main>
      <ul className="cards">
        {listings.map((item) => (
          <ListingCard key={item.id} item={item} deleteItem={deleteItem} />
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
