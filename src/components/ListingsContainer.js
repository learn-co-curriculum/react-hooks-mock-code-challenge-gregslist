import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, handleDelete }) {
  const renderListings = listings.map((item) => (
    <ListingCard key={item.id} item={item} handleDelete={handleDelete} />
  ));
  return (
    <main>
      <ul className="cards">{renderListings}</ul>
    </main>
  );
}

export default ListingsContainer;
