import React, { useState } from "react";

function ListingCard({ listing }) {
	const { description, image, location } = listing;
	const [isFavorited, setIsFavorited] = useState(false);

	function handleFavoriteClick() {
		setIsFavorited((isFavorited) => !isFavorited);
	}

	return (
		<li className="card">
			<div className="image">
				<span className="price">$0</span>
				<img src={image} alt={description} />
			</div>
			<div className="details">
				{isFavorited ? (
					<button
						className="emoji-button favorite active"
						onClick={handleFavoriteClick}
					>
						★
					</button>
				) : (
					<button
						className="emoji-button favorite"
						onClick={handleFavoriteClick}
					>
						☆
					</button>
				)}
				<strong>{description}</strong>
				<span> · {location}</span>
				<button className="emoji-button delete">🗑</button>
			</div>
		</li>
	);
}

export default ListingCard;
