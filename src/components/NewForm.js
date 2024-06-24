import React, { useState } from "react"

const initialValues = {
  description: "",
  image: "",
  location: "",
}

function NewForm({ onAddListing }) {
  const [formData, setFormData] = useState(initialValues)

  const handleChange = ({ target: { name, value } }) => {
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    fetch(`http://localhost:6001/listings/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then(onAddListing)
      .then(resetForm)
  }

  const resetForm = () => setFormData(initialValues)

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Description"
        name="description"
        value={formData.description}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Image"
        name="image"
        value={formData.image}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Location"
        name="location"
        value={formData.location}
        onChange={handleChange}
      />
      <button type="submit">Add Listing</button>
    </form>
  )
}

export default NewForm
