import React from "react";
import Search from "./Search";

function Header({ setListings }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search setListings={setListings} />
    </header>
  );
}

export default Header;
