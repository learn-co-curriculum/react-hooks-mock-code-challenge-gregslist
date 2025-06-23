import React, { useState } from "react";

function ListingCard({ listing, onDelete }) {
  const { id, image, description, location } = listing;
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  const handleDelete = () => onDelete(id);

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        <button
          className={`emoji-button favorite ${isFavorited ? "active" : ""}`}
          onClick={handleFavorite}
        >
          {isFavorited ? "★" : "☆"}
        </button>
        <strong>{description}</strong>
        <span> · {location}</span>
        <button
          className="emoji-button delete"
          onClick={() => handleDelete(id)}
        >
          🗑
        </button>
      </div>
    </li>
  );
}

export default ListingCard;
