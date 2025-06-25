import { useState } from "react";

function ListingCard({ listing, deleteListing }) {
  const [isFavorited, setIsFavorited] = useState(false);
  const toggleIsFavorited = () => {
    setIsFavorited((currentStatus) => !currentStatus);
  };
  const handleDelete = () => {
    deleteListing(listing.id);
  };
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={"description"} />
      </div>
      <div className="details">
        {isFavorited ? (
          <button
            className="emoji-button favorite active"
            onClick={toggleIsFavorited}
          >
            ★
          </button>
        ) : (
          <button className="emoji-button favorite" onClick={toggleIsFavorited}>
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
