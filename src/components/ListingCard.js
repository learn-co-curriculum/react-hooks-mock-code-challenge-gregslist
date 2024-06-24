import React, { useState } from "react"

function ListingCard({ listing, listings, setListings }) {
  const { description, location, image, id } = listing

  const [favorite, setFavorite] = useState(false)

  function handleFavoriteClick() {
    if (!favorite) {
      setFavorite(true)
    } else setFavorite(false)
  }

  function handleDeleteClick() {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(handleDelete(id))
  }

  function handleDelete(deletedListingId) {
    const updatedListings = listings.filter(
      (listing) => listing.id !== deletedListingId
    )
    setListings(updatedListings)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorite ? (
          <button
            onClick={handleFavoriteClick}
            className="emoji-button favorite active"
          >
            ★
          </button>
        ) : (
          <button
            onClick={handleFavoriteClick}
            className="emoji-button favorite"
          >
            ☆
          </button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDeleteClick} className="emoji-button delete">
          🗑
        </button>
      </div>
    </li>
  )
}

export default ListingCard
