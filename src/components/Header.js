import React,{useState, useEffect} from "react";
import Search from "./Search";

function Header({search , onhandleSubmit}) {
  
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search search={search} onhandleSubmit={onhandleSubmit} />
    </header>
  );
}

export default Header;
