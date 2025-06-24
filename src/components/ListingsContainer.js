import React, { useEffect, useState } from "react"
import ListingCard from "./ListingCard"

function ListingsContainer() {
  const [listings, setListings] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/listings/")
      .then((response) => response.json())
      .then((listings) => setListings(listings))
  }, [])

  return (
    <main>
      <ul className="cards">
        {listings.map((listing) => (
          <ListingCard listing={listing} />
        ))}
      </ul>
    </main>
  )
}

export default ListingsContainer
