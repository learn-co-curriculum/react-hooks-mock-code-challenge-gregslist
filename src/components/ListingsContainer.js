import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, onDelete}) {

  const displayListings = listings.map((listing) => {
    return <ListingCard key={listing.id} listing={listing} onDelete={onDelete} />
  })

  return (
    <main>
      <ul className="cards">
        {/* use the ListingCard component to display listings */}
        {displayListings}
      </ul>
    </main>
  );
}

export default ListingsContainer;



//.sort using location loCaleCompare
// I can create a new listing by submitting a form, and persist the changes to the backend
//POST COntrolledForm intialForm 