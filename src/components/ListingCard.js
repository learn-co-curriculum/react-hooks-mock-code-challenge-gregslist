import React, { useState } from "react"

function ListingCard({ listing, deleteListing }) {
  const { image, description, location } = listing
  const [favorite, setFavorite] = useState(false)

  const handleFavorite = (e) => {
    e.preventDefault()
    favorite ? setFavorite(false) : setFavorite(true)
  }

  const handleDelete = (e) => {
    e.preventDefault()
    deleteListing(listing)
  }

  return (
    <li className="card" id={listing.id}>
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={"description"} />
      </div>
      <div className="details">
        {favorite ? (
          <button
            onClick={handleFavorite}
            className="emoji-button favorite active"
          >
            ★
          </button>
        ) : (
          <button onClick={handleFavorite} className="emoji-button favorite">
            ☆
          </button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDelete} className="emoji-button delete">
          🗑
        </button>
      </div>
    </li>
  )
}

export default ListingCard
