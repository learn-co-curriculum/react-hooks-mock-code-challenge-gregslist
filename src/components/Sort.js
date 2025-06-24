import React, { useEffect, useState } from "react"

function Sort({ onSort }) {
  const [isSort, setIsSort] = useState(false)

  const handleSort = () => {
    setIsSort(!isSort)
  }

  useEffect(() => {
    onSort(isSort)
  }, [isSort])

  return (
    <label>
      Sort by Location
      <input type="checkbox" onChange={handleSort} />
    </label>
  )
}

export default Sort
