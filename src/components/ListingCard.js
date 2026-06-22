import React from "react";

function ListingCard({description, image, location, favorite, id, onFavorite, onDelete}) {
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorite ? (
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
