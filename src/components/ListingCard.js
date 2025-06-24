import React, { useState } from "react";

function ListingCard({ listing, setListings }) {
  const [isFavorite, setFavorite] = useState(false);

  function handleClick() {
    setFavorite((isFavorite) => !isFavorite);
  }
  const handleDelete = () => {
    fetch("http://localhost:6001/listings/" + listing.id, { method: "DELETE" })
      .then((res) => res.json())
      .then(
        setListings((currentListings) =>
          currentListings.filter(
            (currentListing) => currentListing.id !== listing.id
          )
        )
      );
  };
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={"description"} />
      </div>
      <div className="details">
        {isFavorite ? (
          <button
            className="emoji-button favorite active"
            onClick={handleClick}
          >
            ★
          </button>
        ) : (
          <button className="emoji-button favorite" onClick={handleClick}>
            ☆
          </button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button className="emoji-button delete" onClick={handleDelete}>
          🗑
        </button>
      </div>
    </li>
  );
}

export default ListingCard;
