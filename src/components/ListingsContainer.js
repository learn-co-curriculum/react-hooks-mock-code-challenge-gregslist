import React, { useState, useEffect } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer() {
  const [listings, setListings] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001")
      .then(resp => resp.json())
      .then(data => setListings(data))
  }, [])

  return (
    <main>
      <ul className="cards">
        {listings.map((listing) => (
          <ListingCard 
            description={listing.description}
            image={listing.image}
            location={listing.location}
          />
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
