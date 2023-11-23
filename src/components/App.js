import React,{useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import FormandSort from "./FormandSort";

function App() {
  const [listings ,setListings] = useState([])
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState(false)

  //updateForm
  //filterListings

  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then((resp) => resp.json())
    .then((data) => { setListings(data)}) 
  },[])
  // console.log(listings)
  
  function handleDelete(id) {
    const fetchDelete = [...listings].filter((listing) => listing.id !== id)
    setListings(fetchDelete)
  }

  function handleSearch(newSearch) {
    setSearch(newSearch)
  }

  function handleSort() {
    setSort(intialSort => !intialSort)
  }

  function handleListings(data) {
    setListings([...listings, data])
  }

  const filteredListings = [...listings].filter((listing) => {
    return listing.description.toLowerCase().includes(search.toLowerCase())
  })

  const tobeSorted = sort ?  [...filteredListings].sort((a,b) => a.location.localeCompare(b.location)) : filteredListings

  
  return (
    <div className="app">
      <Header search={search} onSearch={handleSearch}/>
      <FormandSort onSort={handleSort} listings={filteredListings} sort={sort} onnewListing={handleListings}/>
      <ListingsContainer listings={tobeSorted} onDelete={handleDelete}  />
    </div>
  );
}

export default App;

// When the app starts, I can see all listings. DONE
// I can "favorite" and "unfavorite" a listing on the frontend by clicking the star icon. This feature doesn't need backend persistence. DONE
// I can remove a listing from the page by clicking the trash can icon. This change should be persisted in the backend.DONE
// I can search for listings by their name.DONE
