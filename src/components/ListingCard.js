import { React, useEffect, useState } from "react";

function ListingCard({ location, image, description, listing }) {

  // isFav state is set here in ListingCard because you want each card to 
  // have its own state independent of all the others
  const [isFav, setIsFav] = useState(listing.isFavorite)

  function handleFavClick() {
    setIsFav(isFav => !isFav)
  }

  function handleDeleteClick(e, listing) {
    // delete listing from back end
    fetch(`http://localhost:6001/listings/${listing.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    
    // remove card from front end
    e.target.parentElement.parentElement.remove()
  }
  
  // sends PATCH request to backend whenever isFav changes
  useEffect(() => {
    fetch(`http://localhost:6001/listings/${listing.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({isFavorite: isFav})
    })
  
  }, [isFav, listing.id])

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isFav ? (
          <button 
            onClick={() => handleFavClick(listing)} 
            className="emoji-button favorite active">★</button>
        ) : (
          <button 
            onClick={() => handleFavClick(listing)} 
            className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={(e) => handleDeleteClick(e, listing)} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
