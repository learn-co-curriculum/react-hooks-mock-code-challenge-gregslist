import React from "react";

function ListingCard({ listing, onFavorite, onDelete }) {
  const { id, description, image, location, favorited } =listing;
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorited ? (
          <button className="emoji-button favorite active" onClick={() => onFavorite(id)}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={() => onFavorite(id)}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={() => onDelete(id)}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
