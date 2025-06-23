import React, { useState } from "react";
import Search from "./Search";
import AddForm from "./AddForm";

function Header({
  listings,
  setListings,
  setSearchResults,
  setSearchMode,
  setIsSorted,
}) {
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
      <AddForm listings={listings} setListings={setListings} />
    </header>
  );
}

export default Header;
