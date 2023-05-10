import React, {useEffect, useState} from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings , onDelete}) {

  const displayListings = listings.map((listing) => {
    return <ListingCard key={listing.id} listing={listing} onDelete={onDelete}/>
  })
  // console.log(displayListings)

  // const sortedList = listings.sort((a,b) => a.location.localeCompare(b.location))

  

  return (
    <main>
      <ul className="cards">
        {/* use the ListingCard component to display listings */}
        {displayListings}
      </ul>
      {/* <input type="checkbox" onClick={}/> */}
    </main>
  );
}

export default ListingsContainer;
