import React, {useState} from "react"

function Form({onAddNewListing}) {
  const [formData, setFormData] = useState({
    description: "",
    location: "",
    image: "",
  })

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    const updatedForm = {...formData, [name]: value}
    setFormData(updatedForm)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch("http://localhost:6001/listings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((data) => onAddNewListing(data))
  }

  return (
    <form className="new-form" onSubmit={handleSubmit}>
      <input
        className="new-item"
        type="text"
        name="description"
        placeholder="Description..."
        value={formData.description}
        onChange={handleChange}
      />
      <input
        className="new-item"
        type="text"
        name="location"
        placeholder="Location..."
        value={formData.location}
        onChange={handleChange}
      />
      <input
        className="new-item"
        type="text"
        name="image"
        placeholder="Image URL..."
        value={formData.image}
        onChange={handleChange}
      />
      <button type="submit" className="new">
        Add New Listing
      </button>
    </form>
  )
}

export default Form
