import React, { useState } from "react";

const AddItem = ({ handleNewListing }) => {
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newListing = {
      description,
      image,
      location,
    };

    handleNewListing(newListing);

    setDescription("");
    setImage("");
    setLocation("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <br />
      <h4>Add New Item</h4>
      <br />
      <label>
        Description
        <input
          type="text"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </label>
      <label>
        Image URL
        <input
          type="text"
          value={image}
          onChange={(event) => setImage(event.target.value)}
        />
      </label>
      <label>
        Location
        <input
          type="text"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddItem;
