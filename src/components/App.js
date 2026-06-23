import React, { useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [search, setSearch] = useState("");

  return (
    <div className="app">
      <Header
        search={search}
        setSearch={setSearch}
      />

      <ListingsContainer
        search={search}
      />
    </div>
  );
}

export default App;
