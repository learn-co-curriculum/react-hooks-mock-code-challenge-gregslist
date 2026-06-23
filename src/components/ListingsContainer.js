import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, onFavorite, onDelete }) {
  return (
    <main>
      <ul className="cards">
        {listings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} onFavorite={onFavorite} onDelete={onDelete} />
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
