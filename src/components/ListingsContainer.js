import React, {useEffect} from "react"
import ListingCard from "./ListingCard"

function ListingsContainer({listings, onListingsFetch, onDeleteListing}) {
  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((r) => r.json())
      .then((listings) => onListingsFetch(listings))
  }, [])

  return (
    <main>
      <ul className="cards">
        {listings.map((listing) => {
          return (
            <ListingCard
              key={listing.id}
              listing={listing}
              onDeleteListing={onDeleteListing}
            />
          )
        })}
      </ul>
    </main>
  )
}

export default ListingsContainer
