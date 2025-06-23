import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchMode, setSearchMode] = useState(false);

  useEffect(() => {
    if (!searchMode) {
      setSearchResults(listings);
    }
  }, [listings, searchMode]);

  return (
    <div className="app">
      <Header
        listings={listings}
        setSearchResults={setSearchResults}
        setSearchMode={setSearchMode}
      />
      <ListingsContainer
        listings={searchMode ? searchResults : listings}
        setListings={setListings}
        setSearchResults={setSearchResults}
      />
    </div>
  );
}

export default App;
