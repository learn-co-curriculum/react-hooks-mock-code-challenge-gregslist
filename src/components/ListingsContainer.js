import React, { useState, useEffect } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer() {
	const [listings, setListings] = useState([]);

	useEffect(() => {
		fetch("http://localhost:6001/listings")
			.then((r) => r.json())
			.then((data) => setListings(data));
	}, []);

	return (
		<main>
			<ul className="cards">
				{listings.map((listing) => (
					<ListingCard key={listing.id} listing={listing} />
				))}
			</ul>
		</main>
	);
}

export default ListingsContainer;
