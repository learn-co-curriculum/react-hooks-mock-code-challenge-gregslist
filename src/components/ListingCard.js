import React, {useState} from "react";

function ListingCard({listing, removeListing}) {

  const [favorite, setFavorite] = useState(false)

  const {description, image, location} = listing

  function toggleFavorite(){
    setFavorite(!favorite)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorite ? (
          <button className="emoji-button favorite active" onClick={toggleFavorite}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={toggleFavorite}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={() => removeListing(listing)}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
