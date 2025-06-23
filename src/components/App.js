import React, { useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [searchItem, setSearchItem] = useState("");
  console.log(searchItem);

  return (
    <div className="app">
      <Header setSearchItem={setSearchItem} />
      <ListingsContainer searchItem={searchItem} />
    </div>
  );
}

export default App;
