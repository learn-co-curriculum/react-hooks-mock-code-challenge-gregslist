import React from "react"

function Sort({ onSort }) {
  return (
    <label>
      Sort by Location
      <input type="checkbox" onChange={onSort} />
    </label>
  )
}

export default Sort
