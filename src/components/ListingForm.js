import React, { useState } from "react"

function ListingForm({ listings, setListings }) {
  const [formData, setFormData] = useState({
    description: "",
    image: "",
    location: "",
  })

  function handleChange(event) {
    console.log(event.target.name)
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  function handleAddListing(newListing) {
    setListings([...listings, newListing])
  }

  function handleSubmit(event) {
    event.preventDefault()
    const listingData = {
      description: formData.description,
      image: formData.image,
      location: formData.location,
    }
    fetch("http://localhost:6001/listings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(listingData),
    })
      .then((r) => r.json())
      .then((newListing) => handleAddListing(newListing))
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      List An Item
      <input
        type="text"
        name="description"
        placeholder="enter description"
        value={formData.description}
        onChange={handleChange}
      />
      <input
        type="text"
        name="image"
        placeholder="enter image url"
        value={formData.image}
        onChange={handleChange}
      />
      <input
        type="text"
        name="location"
        placeholder="enter item location"
        value={formData.location}
        onChange={handleChange}
      />
      <button type="submit">List Item</button>
    </form>
  )
}

export default ListingForm
