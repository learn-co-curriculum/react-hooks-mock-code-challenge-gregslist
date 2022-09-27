import React from "react";
 import ListingCard from "./ListingCard";

function ListingsContainer({ listings }) {
  return (
    <main>
      <ul className="cards">
        {listings.map((listing) => {
        return <ListingCard key = {listing.id} listing={listing}/>})};
      </ul>
    </main>
  );
}

export default ListingsContainer;
