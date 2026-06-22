import React, { useState } from "react";

function AddForm({addItem, setAddItem}) {
  const [formData, setFormData] = useState({
    description: "",
    image: "",
    location: ""
  })

  function handleSubmit(e) {
    e.preventDefault()
    fetch("http://localhost:6001/listings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    }).then(() => {
      setFormData({
        description: "",
        image: "",
        location: "",
      })

      setAddItem(!addItem)
    })
  }

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="description" placeholder="description" value={formData.description} onChange={handleChange} required></input>
      <input type="text" name="image" placeholder="image url" value={formData.image} onChange={handleChange} required></input>
      <input type="text" name="location" placeholder="location" value={formData.location} onChange={handleChange} required></input>
      <input type="submit" value="Add Item"></input>
    </form>
  )
}

export default AddForm