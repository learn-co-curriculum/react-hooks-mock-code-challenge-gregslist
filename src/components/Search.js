import React, { useState } from 'react'

function Search({ handleSearch }) {
  const [search, setSearch] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    handleSearch(search)
  }

  return (
    <form className='searchbar' onSubmit={handleSubmit}>
      <input
        type='text'
        id='search'
        placeholder='search free stuff'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type='submit'>🔍</button>
    </form>
  )
}

export default Search
