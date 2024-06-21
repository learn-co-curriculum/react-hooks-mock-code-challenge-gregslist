import React from "react"
import Search from "./Search"
import Sort from "./Sort"

function Header({ onSearch, onSortChange }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onSearch={onSearch} />
      <Sort onSortChange={onSortChange} />
    </header>
  )
}

export default Header
