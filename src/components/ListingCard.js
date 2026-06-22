import React from "react";

function ListingCard({ listing }) {
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
        <button className="emoji-button favorite">☆</button>

        <strong>{listing.description}</strong>

        <span> · {listing.location}</span>

        <button className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;