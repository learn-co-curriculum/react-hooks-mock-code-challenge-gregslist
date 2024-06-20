import React, { useState } from 'react'

function ListingCard({ listingInfo: { id, description, image, location }, handleDeleteListing }) {
  const [favorite, setFavorite] = useState(false)
  const handleFavoriteClick = () => setFavorite(!favorite)

  const handleDeleteClick = () => {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then(() => handleDeleteListing(id))
      .catch((error) => alert(error))
  }

  return (
    <li className='card'>
      <div className='image'>
        <span className='price'>$0</span>
        <img src={image} alt={description} />
      </div>
      <div className='details'>
        {favorite ? (
          <button className='emoji-button favorite active' onClick={handleFavoriteClick}>
            ★
          </button>
        ) : (
          <button className='emoji-button favorite' onClick={handleFavoriteClick}>
            ☆
          </button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className='emoji-button delete' onClick={handleDeleteClick}>
          🗑
        </button>
      </div>
    </li>
  )
}

export default ListingCard
