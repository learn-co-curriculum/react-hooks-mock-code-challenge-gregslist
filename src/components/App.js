import React, {useEffect, useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [listings, setListings] = useState([])
  const [filteredListings, setFilteredListings] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(response => response.json())
    .then(listingsData => {
      setListings(listingsData)
      setFilteredListings(listingsData)
    })
  }, [])

  function removeListing(listing){
    setListings(listings.filter(l => {
      return l.id !== listing.id
    }))

    setFilteredListings(filteredListings.filter(l => {
      return l.id !== listing.id
    }))

    fetch(`http://localhost:6001/listings/${listing.id}`, {
      method: "DELETE"
    })
  }

  function filterListings(searchText){
    if(searchText === ""){
      setFilteredListings(listings)
    }
    else{
      setFilteredListings(listings.filter(listing => {
        return listing.description.toLowerCase().includes(searchText.toLowerCase())
      }))
    }
  }

  return (
    <div className="app">
      <Header filterListings={filterListings}/>
      <ListingsContainer listings={filteredListings} removeListing={removeListing}/>
    </div>
  );
}

export default App;
