import React, { useEffect } from "react"
import ListingCard from "./ListingCard"

function ListingsContainer({ listings, setListings }) {
  const handleRemoveListing = (deletedListing) => {
    const filteredListings = listings.filter(
      (listing) => listing !== deletedListing
    )

    setListings(filteredListings)
  }

  useEffect(() => {
    fetch("http://localhost:6001/listings/")
      .then((response) => response.json())
      .then((listings) => setListings(listings))
  }, [])

  return (
    <main>
      <ul className="cards">
        {listings.map((listing) => (
          <ListingCard
            key={listing.id}
            listing={listing}
            onRemoveListing={handleRemoveListing}
          />
        ))}
      </ul>
    </main>
  )
}

export default ListingsContainer
