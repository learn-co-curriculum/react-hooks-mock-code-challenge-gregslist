import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (input) => {
    setSearchInput(input);
  };
  return (
    <div className="app">
      <Header handleSearch={handleSearch} />
      <ListingsContainer searchInput={searchInput} />
    </div>
  );
}

export default App;
