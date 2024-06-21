import React, { useState } from "react"

function Form({ onHandleSubmitForm }) {
  const [formData, setFormData] = useState({
    description: "",
    image: "",
    location: "",
  })

  function handleFormChange(event) {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  function handleSubmit(event) {
    event.preventDefault()
    fetch("http://localhost:6001/listings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((newListingData) => onHandleSubmitForm(newListingData))
      .catch((error) => console.error("Fetch error:", error))
  }

  return (
    <div className="listing-form">
      <h2>Add New Listing</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Description:
          <input
            type="type"
            name="description"
            value={formData.description}
            onChange={handleFormChange}
          />
        </label>
        <label>
          Image:
          <input
            type="type"
            name="image"
            value={formData.image}
            onChange={handleFormChange}
          />
        </label>
        <label>
          Location:
          <input
            type="type"
            name="location"
            value={formData.location}
            onChange={handleFormChange}
          />
        </label>
        <button type="submit">Add Listing</button>
      </form>
    </div>
  )
}

export default Form
