import React, { useState } from "react";

function ListingCard({ listing, handleDelete }) {
  const [isFavorited, setIsFavorited] = useState(false);
  
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {isFavorited ? (
          <button className="emoji-button favorite active" onClick={() => setIsFavorited(!isFavorited)}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={() => setIsFavorited(!isFavorited)}>☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button className="emoji-button delete" onClick={() => handleDelete(listing.id)}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
