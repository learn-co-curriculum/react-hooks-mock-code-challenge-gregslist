import React, {useState} from "react";

function ListingCard({listing, onDelete}) {
  const [truthy, setTruthy] = useState(false)

  function handleTheTruth() {
    setTruthy(intialTruth => !intialTruth)
  }

  function handleDelete() {
    fetch(`http://localhost:6001/listings/${listing.id}` , {
      method: 'DELETE',
    })
    .then(res => res.json())
    .then(() => {onDelete(listing.id)})
    
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {truthy ? (
          <button className="emoji-button favorite active" onClick={handleTheTruth}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleTheTruth}>☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button className="emoji-button delete" onClick={handleDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;