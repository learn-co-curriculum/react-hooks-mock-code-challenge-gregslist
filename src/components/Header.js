import React from "react";
import Search from "./Search";

function Header({listings}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search listings={listings} />
    </header>
  );
}

export default Header;
