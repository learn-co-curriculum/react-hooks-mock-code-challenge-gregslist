import React, { useState } from "react";
import Search from "./Search";

function Header({ listings, setSearchResults, setSearchMode, setIsSorted }) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search
        listings={listings}
        setSearchResults={setSearchResults}
        setSearchMode={setSearchMode}
      />
      <input
        type="checkbox"
        name="sort"
        checked={isChecked}
        onChange={() => {
          setIsChecked(!isChecked);
          setIsSorted(!isChecked);
        }}
      />
      <label htmlFor="sort">Sort by location?</label>
    </header>
  );
}

export default Header;
