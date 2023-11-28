import React from "react";
import Search from "./Search";

function Header({ handleSearch }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search handleSearch={handleSearch} />
    </header>
  );
}

export default Header;
