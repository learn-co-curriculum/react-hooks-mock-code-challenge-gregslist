import React from "react";
import Search from "./Search";

function Header({ onSearch, onSort }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onSearch={onSearch} />
      <button onClick={onSort}>Sort by Location</button>
    </header>
  );
}

export default Header;
