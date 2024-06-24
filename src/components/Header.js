import React from "react"
import Search from "./Search"
import ListingForm from "./ListingForm"

function Header({ listings, setListings, originalListings }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>

      <div>
        <Search
          listings={listings}
          setListings={setListings}
          originalListings={originalListings}
        />
      </div>
      <div>
        <ListingForm listings={listings} setListings={setListings} />
      </div>
    </header>
  )
}

export default Header
