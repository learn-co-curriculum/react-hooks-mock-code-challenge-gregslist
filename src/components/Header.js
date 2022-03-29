import React from "react";
import Search from "./Search";

function Header( { getSearchText } ) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search getSearchText={ getSearchText } />
    </header>
  );
}

export default Header;
