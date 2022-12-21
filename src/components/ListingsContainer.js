import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ searchResults }) {

  const listingCards = searchResults.map(listing => {
    return <ListingCard 
      description={listing.description} 
      image={listing.image} 
      location={listing.location}
      listing={listing} 
      key={listing.id}
      />
  })

  return (
    <main>
      <ul className="cards">
        {listingCards}
      </ul>
    </main>
  );
}

export default ListingsContainer;
