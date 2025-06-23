import { useState } from "react";

function Header({ setListings }) {
  const defaultValues = {
    location: "",
    description: "",
    image: "",
  };

  const [newLocationObj, setNewLocationObj] = useState(defaultValues);

  const updateLocationObj = (e) => {
    setNewLocationObj((currObj) => {
      const returnObj = { ...currObj };
      returnObj[e.target.name] = e.target.value;
      return returnObj;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:6001/listings", {
      method: "POST",
      body: JSON.stringify(newLocationObj),
      headers: { "Content-Type": "application/json" },
    })
      .then((r) => r.json())
      .then((addedListing) => {
        setListings((currListings) => [...currListings, addedListing]);
        setNewLocationObj(defaultValues);
      });
  };
  return (
    <div id="addForm">
      <h2>Add New Item</h2>
      <form onSubmit={handleSubmit}>
        <span>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            value={newLocationObj.description}
            placeholder="Description"
            onChange={updateLocationObj}
            name="description"
          />
        </span>
        <span>
          <label htmlFor="image">Image</label>
          <input
            type="text"
            value={newLocationObj.image}
            placeholder="Image"
            onChange={updateLocationObj}
            name="image"
          />
        </span>
        <span>
          <label htmlFor="location">Location</label>
          <input
            type="text"
            value={newLocationObj.location}
            placeholder="Location"
            onChange={updateLocationObj}
            name="location"
          />
        </span>
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}

export default Header;
