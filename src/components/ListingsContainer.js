import React, { useEffect, useState } from 'react'
import ListingCard from './ListingCard'

function ListingsContainer({ search, sort, submitTrigger }) {
  const [listings, setListings] = useState(null)

  useEffect(() => {
    fetch('http://localhost:6001/listings')
      .then((res) => res.json())
      .then((data) => setListings(data))
  }, [submitTrigger])

  const handleDeleteListing = (listingToDelete) => {
    setListings(listings.filter((listing) => listing.id !== listingToDelete))
  }
  const executeSearch = () => {
    const searchLower = search.toLowerCase()
    return listings.filter((listing) => listing.description.toLowerCase().includes(searchLower))
  }

  const searchList = search.length > 0 ? executeSearch() : listings
  const sortList = sort ? [...searchList].sort((a, b) => a.location.localeCompare(b.location)) : searchList

  if (!searchList) return <h1>Loading...</h1>

  return (
    <main>
      <ul className='cards'>
        {sortList.map((listing) => {
          return (
            <ListingCard
              key={`listing-${listing.id}`}
              listingInfo={listing}
              handleDeleteListing={handleDeleteListing}
            />
          )
        })}
      </ul>
    </main>
  )
}

export default ListingsContainer
