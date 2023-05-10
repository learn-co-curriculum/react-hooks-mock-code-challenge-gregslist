import React, {useState} from "react";

function ListingCard({listing , onDelete}) {
  const [trueOrFalse , setTrueorFalse] = useState(true)

  function handleTrueorFalse() {
    setTrueorFalse(isitTrue => !isitTrue)
  }

  function handleDelete(e) {
    e.preventDefault()
    fetch(`http://localhost:6001/listings/${listing.id}` , {
      method: 'DELETE',
    })
    .then(res => res.json())
    .then(() => {onDelete(listing.id)})}
    
    
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {trueOrFalse ? (
          <button className="emoji-button favorite active" onClick={handleTrueorFalse}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleTrueorFalse}>☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location }</span>
        {/* onClick for trashCan */}
        <button className="emoji-button delete" onClick={handleDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
