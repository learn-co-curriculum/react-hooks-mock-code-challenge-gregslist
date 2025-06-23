import React from "react";
import Search from "./Search";
import AddItem from "./AddItem";
import LocationSorter from "./LocationSorter";

function Header({ setSearchItem, setLocationSort }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <LocationSorter setLocationSort={setLocationSort} />
      <Search setSearchItem={setSearchItem} />
    </header>
  );
}

export default Header;
