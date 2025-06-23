import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([]);
  const [unsortedListings, setUnsortedListings] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchMode, setSearchMode] = useState(false);
  const [isSorted, setIsSorted] = useState(false);

  useEffect(() => {
    if (!searchMode) {
      setSearchResults(listings);
    }
  }, [listings, searchMode]);

  useEffect(() => {
    if (isSorted) {
      const sortedListings = [...listings].sort((a, b) =>
        a.location.localeCompare(b.location)
      );
      setListings(sortedListings);
    } else {
      setListings(unsortedListings);
    }
  }, [isSorted]);

  return (
    <div className="app">
      <Header
        listings={listings}
        setSearchResults={setSearchResults}
        setSearchMode={setSearchMode}
        setIsSorted={setIsSorted}
      />
      <ListingsContainer
        listings={searchMode ? searchResults : listings}
        setListings={setListings}
        setSearchResults={setSearchResults}
        setUnsortedListings={setUnsortedListings}
      />
    </div>
  );
}

export default App;
