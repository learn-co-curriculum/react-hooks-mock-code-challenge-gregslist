import React from "react"
import Search from "./Search"

function Header({onSort, searchTerm, setSearchTerm}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
      <div>
        <button onClick={onSort} className="sort">
          Sort by Location
        </button>
      </div>
    </header>
  )
}

export default Header
