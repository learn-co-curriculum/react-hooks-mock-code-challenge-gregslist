import React, { useState } from "react";

const AddForm = ({ listings, setListings }) => {
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newListing = {
      description: description,
      image: image,
      location: location,
    };

    fetch("http://localhost:6001/listings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(newListing),
    })
      .then((r) => r.json())
      .then((response) => setListings([...listings, response]));
  };

  return (
    <form id="add-form" onSubmit={handleSubmit}>
      <h3>Create a new listing:</h3>
      <input
        type="text"
        value={description}
        placeholder="enter description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        value={image}
        placeholder="enter image url"
        onChange={(e) => setImage(e.target.value)}
      />
      <input
        type="text"
        value={location}
        placeholder="enter location"
        onChange={(e) => setLocation(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddForm;
