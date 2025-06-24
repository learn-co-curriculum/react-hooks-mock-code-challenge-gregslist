import React, {useState} from "react"

function ListingCard({onDeleteListing, listing}) {
  const [isActive, setIsActive] = useState()

  const handleFavToggle = () => {
    setIsActive((isActive) => !isActive)
  }

  const handleDeleteClick = () => {
    fetch(`http://localhost:6001/listings/${listing.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => onDeleteListing(listing))
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={`${listing.image}`} alt={`${listing.description}`} />
      </div>
      <div className="details">
        <button
          onClick={handleFavToggle}
          className={`emoji-button favorite ${isActive ? "active" : ""}`}
        >
          {isActive ? "★" : "☆"}
        </button>
        <strong>{`${listing.description}`}</strong>
        <span> · {`${listing.location}`}</span>
        <button onClick={handleDeleteClick} className="emoji-button delete">
          🗑
        </button>
      </div>
    </li>
  )
}

export default ListingCard
