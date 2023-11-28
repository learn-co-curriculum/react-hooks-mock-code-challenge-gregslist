import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearch(search) {
    setSearchTerm(search);
  }

  const filteredItems = listings.filter((item) =>
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setListings(data);
      });
  }, []);

  function handleDelete(id) {
    console.log(id);
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        const filteredList = listings.filter((item) => item.id !== id);
        setListings(filteredList);
      });
  }

  return (
    <div className="app">
      <Header handleSearch={handleSearch} />
      <ListingsContainer handleDelete={handleDelete} listings={filteredItems} />
    </div>
  );
}

export default App;
