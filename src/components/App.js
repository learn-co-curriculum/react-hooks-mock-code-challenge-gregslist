import React, {useEffect, useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import FormandSort from "./FormandSort";

function App() {
  //listings state
  const [listings, setListings] = useState([])
  //search state 
  const [search, setSearch] = useState('')
  //sort state
  const [sort, setSort] = useState(false)

  // let visibleListings = [...listings].filter((listing) => listing.description.toLowerCase().includes(search.toLowerCase()))

  //intial get for listings 
  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then((resp) => resp.json())
    .then((listing) => { setListings(listing)}) 
  },[])

  //handleDelete
  function handleDelete(id) {
    let deleteThemThangs = listings.filter((listing) => listing.id !== id)
    setListings(deleteThemThangs)
  }

  //handleSearch
  function onhandleSubmit(newSearch) {
    setSearch(newSearch)
  }

  //filter listings
   let filteredListings = listings.filter((listing) => {
    return listing.description.toLowerCase().includes(search.toLowerCase())
  })

  //handleNewFormPOST
  function handlePost(newListings) {
    setListings([...listings, newListings])
  }

  //handleSort 
  function handleSort() {
    setSort(intialSort => !intialSort)
  }
 
  return (
    <div className="app">
      <Header search={search} onhandleSubmit={onhandleSubmit}/>
      <FormandSort onHandleSort={handleSort} onPost={handlePost} sort={sort}/>
      <ListingsContainer listings={filteredListings} onDelete={handleDelete}/>
    </div>
  );
}
export default App;