import React from "react";
import Search from "./Search";

function Header({filterListings}) {

  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search filterListings={filterListings}/>
    </header>
  );
}

export default Header;
