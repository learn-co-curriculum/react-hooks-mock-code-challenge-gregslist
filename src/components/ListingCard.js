import React from "react";
import EmojiButton from "./EmojiButton";

function ListingCard({ item, deleteItem }) {
  const { description, image, location } = item;

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        <EmojiButton />
        <strong>{description}</strong>
        <span> · {location}</span>
        <button
          className="emoji-button delete"
          onClick={() => deleteItem(item.id)}
        >
          🗑
        </button>
      </div>
    </li>
  );
}

export default ListingCard;
