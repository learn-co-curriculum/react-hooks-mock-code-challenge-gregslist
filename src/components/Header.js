import React from "react"
import Search from "./Search"
import Sort from "./Sort"

function Header({ setSearch, setSort }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search setSearch={setSearch} />
      <Sort setSort={setSort} />
    </header>
  )
}

export default Header
