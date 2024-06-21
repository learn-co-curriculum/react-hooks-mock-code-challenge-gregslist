import React from "react"
import Search from "./Search"

function Header({ listings, setSearchedListings }) {
  const searchListings = (search) => {
    setSearchedListings(
      listings.filter((listing) =>
        listing.description.toLowerCase().includes(search.toLowerCase())
      )
    )
  }

  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search searchListings={searchListings} />
    </header>
  )
}

export default Header
