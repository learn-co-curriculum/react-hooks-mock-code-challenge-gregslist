import React, {useState, useContext} from "react";
import { SearchContext } from "../context/serachTerm";

function Search() {
  const [inputText, setInputText] = useState("")
  const [searchTerm, setSearchTerm] = useContext(SearchContext)

  function handleSubmit(e) {
    console.log("search executed", inputText)
    e.preventDefault();
    setSearchTerm(inputText)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
