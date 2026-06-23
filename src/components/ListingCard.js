import React, { useState } from "react";

function ListingCard({ listing, onDeleteListing }) {
  const [isFavorite, setIsFavorite] = useState(false);

  function handleFavoriteClick() {
    setIsFavorite(!isFavorite);
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>

        <img
          src={listing.image.replace(".", "")}
          alt={listing.description}
        />
      </div>

      <div className="details">

        <button
          className="emoji-button favorite"
          onClick={handleFavoriteClick}
        >
          {isFavorite ? "★" : "☆"}
        </button>

        <strong>{listing.description}</strong>

        <span> · {listing.location}</span>

        <button
          className="emoji-button delete"
          onClick={() => onDeleteListing(listing.id)}
        >
          🗑
        </button>

      </div>
    </li>
  );
}

export default ListingCard;