import React from "react";
import Search from "./Search";

function Header(props) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search {...props} />
    </header>
  );
}

export default Header;
