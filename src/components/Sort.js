import React, { useState } from "react"

function Sort({ onSortChange }) {
  const [sortByLocation, setSortByLocation] = useState(false)

  function handleSortCheckboxChange(e) {
    setSortByLocation(e.target.checked)
    onSortChange()
  }

  return (
    <label>
      Sort by Location:
      <input
        type="checkbox"
        checked={sortByLocation}
        onChange={handleSortCheckboxChange}
      />
    </label>
  )
}

export default Sort
