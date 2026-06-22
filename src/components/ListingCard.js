import React, { useState, useEffect } from "react";
import Header from "./Header";

function ListingCard({ listing, onDeleteListing }) {
  const [isFavorited, setIsFavorited] = useState(false);

  const { image, price, description, location, id } = listing;

  function handleDeleteListing() {
    onDeleteListing(id);
  }

  function handleToggle(isFavorited) {
    setIsFavorited((isFavorited) => !isFavorited);
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">${price}</span>
        <img
          src={image || "https://via.placeholder.com/300x300"}
          alt={"description"}
        />
      </div>
      <div className="details">
        {isFavorited ?
          <button
            className="emoji-button favorite active"
            onClick={handleToggle}
          >
            ★
          </button>
        : <button className="emoji-button favorite" onClick={handleToggle}>
            ☆
          </button>
        }
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDeleteListing}>
          🗑
        </button>
      </div>
    </li>
  );
}

export default ListingCard;
