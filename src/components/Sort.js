import React from "react"

function Sort({ setSort }) {
  const handleChange = (e) => {
    setSort(e.target.value)
  }

  return (
    <select onChange={handleChange}>
      <option value="">None</option>
      <option value="location">Location</option>
    </select>
  )
}

export default Sort
