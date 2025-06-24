import React, { useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([]);

  return (
    <div className="app">
      <Header listings={listings} setListings={setListings} />
      <ListingsContainer listings={listings} setListings={setListings} />
    </div>
  );
}

export default App;
