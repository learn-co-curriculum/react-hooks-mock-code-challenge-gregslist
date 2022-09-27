import {React, useEffect, useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [listings, setListings]=useState([])

//fetch listings
useEffect(() => {
fetch('http://localhost:6001/listings')
.then(res => res.json())
.then(listings=>{
  console.log(listings)
setListings(listings)
})
},[])



  return (
    <div className="app">
      <Header />
     <ListingsContainer listings={listings}/>
    </div>
  );
}

export default App;
