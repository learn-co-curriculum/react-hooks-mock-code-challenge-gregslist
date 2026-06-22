import React, { useState, useEffect } from "react";
import ListingCard from "./ListingCard";
import Search from "./Search";

function ListingsContainer() {
	const [listings, setListings] = useState([]);
	const [searchQuery, setSearchQuery] = useState("");

	useEffect(() => {
		fetch("http://localhost:6001/listings")
			.then((r) => r.json())
			.then((data) => setListings(data));
	}, []);

	function handleDelete(id) {
		fetch(`http://localhost:6001/listings/${id}`, {
			method: "DELETE",
		}).then(() => {
			setListings((listings) =>
				listings.filter((listing) => listing.id !== id),
			);
		});
	}
	const filteredListings = listings.filter((listing) =>
		listing.description.toLowerCase().includes(searchQuery.toLowerCase()),
	);

	return (
		<main>
			<Search searchQuery={searchQuery} onSearch={setSearchQuery} />
			<ul className="cards">
				{filteredListings.map((listing) => (
					<ListingCard
						key={listing.id}
						listing={listing}
						onDelete={handleDelete}
					/>
				))}
			</ul>
		</main>
	);
}

export default ListingsContainer;
