import React from "react";
import Search from "./Search";

function Header({ searchTerm, onSearchChange }) {
  return (
    <header>
      <h1>
        <span className="logo">☮</span>
        gregslist
      </h1>
      <Search searchTerm={searchTerm} onSearchChange={onSearchChange} />
    </header>
  );
}

export default Header;