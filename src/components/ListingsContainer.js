import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings = [], onDeleteListing }) {
  const sortedListings = [...listings].sort((a, b) =>
    a.location.localeCompare(b.location),
  );
  return (
    <main>
      <ul className="cards">
        {sortedListings.map((listing) => (
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

export default ListingsContainer;
