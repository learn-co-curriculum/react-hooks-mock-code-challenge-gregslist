import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, onDeleteListing }) {
  return (
    <main>
      <ul className="cards">
        {listings.map((listing) => (
          <ListingCard
            key={listing.id}
            listing={listing}
            onDeleteListing={onDeleteListing}
          />
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer