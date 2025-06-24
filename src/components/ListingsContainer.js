import React, { useState, useEffect } from "react";
import ListingCard from "./ListingCard";
import AddItem from "./AddItem";
import LocationSorter from "./LocationSorter";

function ListingsContainer({ searchItem }) {
  const url = "http://localhost:6001/listings/";
  const [listings, setListings] = useState([]);
  const [locationSort, setLocationSort] = useState("notSorted");

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setListings(data);
      });
  }, []);

  const renderListings = () =>
    filteredListing.map((listing) => (
      <ListingCard key={listing.id} listing={listing} onDelete={handleDelete} />
    ));

  const filteredListing = [...listings].filter((listing) =>
    listing.description.toLowerCase().includes(searchItem.toLowerCase())
  );

  if (locationSort === "a-z") {
    filteredListing.sort((a, b) =>
      a.location.toLowerCase().localeCompare(b.location.toLowerCase())
    );
  } else if (locationSort === "z-a") {
    filteredListing.sort((a, b) =>
      b.location.toLowerCase().localeCompare(a.location.toLowerCase())
    );
  }

  const handleDelete = (id) => {
    fetch(`${url}${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => deleteListing(id));
  };

  const deleteListing = (id) => {
    const updatedListing = listings.filter((listing) => listing.id !== id);
    setListings(updatedListing);
  };

  const handleNewListing = (newListing) => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newListing),
    })
      .then((res) => res.json())
      .then((newItem) => {
        setListings([...listings, newItem]);
      });
  };

  return (
    <main>
      <AddItem handleNewListing={handleNewListing} />
      <br />
      <LocationSorter
        locationSort={locationSort}
        setLocationSort={setLocationSort}
      />
      <ul className="cards">{renderListings()}</ul>
    </main>
  );
}

export default ListingsContainer;
