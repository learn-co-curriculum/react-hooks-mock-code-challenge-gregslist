import React, { useState } from 'react'
import Header from './Header'
import Sort from './Sort'
import ListingsContainer from './ListingsContainer'
import NewListingForm from './NewListingForm'

function App() {
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState(false)
  const [submitTrigger, setSubmitTrigger] = useState(false)

  const handleSearch = (searchText) => setSearch(searchText)
  const handleFormSubmitted = () => setSubmitTrigger(!submitTrigger)

  return (
    <div className='app'>
      <Header handleSearch={handleSearch} />
      <Sort setSort={setSort} />
      <NewListingForm handleFormSubmitted={handleFormSubmitted} />
      <ListingsContainer search={search} sort={sort} submitTrigger={submitTrigger} />
    </div>
  )
}

export default App
