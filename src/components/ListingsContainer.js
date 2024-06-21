import React from "react"
import ListingCard from "./ListingCard"

function ListingsContainer({ listings, onDelete }) {
  const displayedListings = listings.map((listing) => {
    return (
      <ListingCard key={listing.id} listing={listing} onDelete={onDelete} />
    )
  })

  return (
    <main>
      <ul className="cards">{displayedListings}</ul>
    </main>
  )
}

export default ListingsContainer
