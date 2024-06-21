import React, { useState } from "react"

function ListingCard({
  listing: { id, description, image, location },
  onDelete,
}) {
  const [favorite, setFavorite] = useState(false)

  function handleFavoriteClick() {
    setFavorite(!favorite)
  }

  function handleDeleteClick() {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    }).then((response) => response.json())
    onDelete(id)
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
