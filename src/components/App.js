import React, { useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import AddForm from "./AddForm";

function App() {
  const [alphaSort, setAlphaSort] = useState(false)
  const [addItem, setAddItem] = useState(false)
  return (
    <div className="app">
      <Header alphaSort={alphaSort} setAlphaSort={setAlphaSort} addItem={addItem} setAddItem={setAddItem} />
      {addItem ? <AddForm addItem={addItem} setAddItem={setAddItem} /> : null}
      <ListingsContainer alphaSort={alphaSort} addItem={addItem}/>
    </div>
  );
}

export default App;
