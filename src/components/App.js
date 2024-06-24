import React, { useEffect, useState } from "react"
import Header from "./Header"
import ListingsContainer from "./ListingsContainer"

function App() {
  const [listings, setListings] = useState([])
  const [originalListings, setOriginalListings] = useState([])

  const getListings = () => {
    fetch("http://localhost:6001/listings")
      .then((res) => res.json())
      .then((listings) => {
        setListings(listings)
        setOriginalListings(listings)
      })
  }

  useEffect(() => {
    getListings()
  }, [])

  return (
    <div className="app">
      <Header
        listings={listings}
        setListings={setListings}
        getListings={getListings}
        originalListings={originalListings}
      />
      <ListingsContainer listings={listings} setListings={setListings} />
    </div>
  )
}

export default App
