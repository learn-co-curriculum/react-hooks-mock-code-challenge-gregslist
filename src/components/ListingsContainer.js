import React, { useEffect } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, setListings }) {
  useEffect(() => {
    fetch("http://localhost:6001/listings/")
      .then((r) => r.json())
      .then((data) => setListings(data));
  }, []);

  const deleteItem = (id) => {
    fetch(`http://localhost:6001/listings/${id}`, {
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
