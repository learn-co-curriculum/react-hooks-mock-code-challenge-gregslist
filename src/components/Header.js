import React from "react";
import Search from "./Search";

function Header({ setListings, listings, getAllListings }) {
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
        setListings={setListings}
        getAllListings={getAllListings}
      />
    </header>
  );
}

export default Header;
