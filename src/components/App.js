import React, { useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [search, setSearch] = useState("");

  function handleSearch(newSearch) {
    setSearch(newSearch);
  }

  return (
    <div className="app">
      <Header onSearch={handleSearch} />
      <ListingsContainer search={search} />
    </div>
  );
}

export default App;
