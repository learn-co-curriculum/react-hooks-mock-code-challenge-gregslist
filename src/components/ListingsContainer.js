import React from "react"
import ListingCard from "./ListingCard"

function ListingsContainer({ handleDeleteListing, listings }) {
  return (
    <main>
      <ul className="cards">
        {listings.map((listing) => (
          <ListingCard
            key={listing.id}
            onDeleteListing={handleDeleteListing}
            listing={listing}
          />
        ))}
      </ul>
    </main>
  )
}

export default ListingsContainer
