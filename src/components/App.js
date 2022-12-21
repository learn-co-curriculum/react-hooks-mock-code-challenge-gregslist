import { React, useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  // must set these states up here in App because two different child 
  // components need access to them: Search and ListingsContainer
  const [listings, setListings] = useState([])
  const [searchInput, setSearchInput] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(res => res.json())
    .then(listingsData => setListings(listingsData))
  }, [])

  const searchResults = listings.filter((listing) => {
    if (searchInput === "") return true
    
    return listing.description.toLowerCase().includes(searchInput.toLowerCase())
  })

  
  return (
    <div className="app">
      <Header 
        searchInput={searchInput} 
        setSearchInput={setSearchInput} />
      <ListingsContainer 
        searchResults={searchResults} />
    </div>
) 
}

export default App;
