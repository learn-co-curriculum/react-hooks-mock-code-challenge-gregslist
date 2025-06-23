import React, { useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([]);

  return (
    <div className="app">
      <Header setListings={setListings} />
      <ListingsContainer listings={listings} setListings={setListings} />
    </div>
  );
}

export default App;
