import React from "react";

function Search({ searchQuery, onSearch }) {
	return (
		<form className="searchbar">
			<input
				type="text"
				id="search"
				placeholder="search free stuff"
				value={searchQuery}
				onChange={(e) => onSearch(e.target.value)}
			/>
			<button type="submit">🔍</button>
		</form>
	);
}

export default Search;
