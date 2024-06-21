import React, { useState, useEffect } from "react"
import ListingCard from "./ListingCard"

function ListingsContainer({
  listings,
  setListings,
  searchedListings,
  setSearchedListings,
}) {
  const deleteListing = (listing) => {
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
    fetch(`http://localhost:6001/listings/${listing.id}`, options).then(
      (_resp) => {
        setListings(listings.filter((item) => item !== listing))
        setSearchedListings(searchedListings.filter((item) => item !== listing))
      }
    )
  }

  const displayListings = () =>
    searchedListings.map((listing) => (
      <ListingCard
        key={listing.id}
        listing={listing}
        deleteListing={deleteListing}
      />
    ))

  return (
    <main>
      <ul className="cards">{displayListings()}</ul>
    </main>
  )
}

export default ListingsContainer
