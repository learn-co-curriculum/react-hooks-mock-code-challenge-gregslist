import React from "react";
import Search from "./Search";
import AddItem from "./AddItem";

function Header({ setSearchItem }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search setSearchItem={setSearchItem} />
    </header>
  );
}

export default Header;
