import React, { useEffect, useState } from 'react'

function Sort({ setSort }) {
  const [isChecked, setIsChecked] = useState(false)

  useEffect(() => {
    setSort(isChecked)
  }, [isChecked])

  const handleCheckboxChange = () => {
    setIsChecked((prevValue) => {
      const newValue = !prevValue
      return newValue
    })
  }

  return (
    <div>
      <div>
        <input type='checkbox' style={{ margin: '10px' }} checked={isChecked} onChange={handleCheckboxChange} />
        Sort By Location
      </div>
    </div>
  )
}

export default Sort
