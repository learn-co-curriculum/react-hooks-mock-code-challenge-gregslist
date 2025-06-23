import React, { useState } from "react";

function ListingCard({ src, alt, description, location }) {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={src} alt={alt} />
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
        <button className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
