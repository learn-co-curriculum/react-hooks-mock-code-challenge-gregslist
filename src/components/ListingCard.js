import{ React, useState} from "react";
import ListingsContainer from "./ListingsContainer";

function ListingCard({listing}) {

//state for button boolean 
const [favorite, setFavorite] = useState(false);

//const 

//button function 
function handleClick() {
  setFavorite(!favorite)
  console.log(favorite)
}

// delete button
function handleDelete(){
fetch('http://localhost:6001/listings', 
  {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json'
    }, 
    body: JSON.stringify({
      id: listing.id
      //DELETE
    })
})
.then(res => res.json())
.then(data =>
  console.log(data)
  
  )
}

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {favorite ? (
          <button 
          onClick={handleClick}
        className="emoji-button favorite active">★</button>
        ) : (
          <button 
          onClick={handleClick}
          className="emoji-button favorite">☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button 
        onClick={handleDelete}
        className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
