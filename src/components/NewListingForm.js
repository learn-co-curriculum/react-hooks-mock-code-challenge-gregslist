import React, { useEffect, useState } from 'react'

function NewListingForm({ handleFormSubmitted }) {
  const [form, setForm] = useState({
    description: '',
    image: '',
    location: '',
  })

  const handelOnChange = ({ target }) => {
    setForm({
      ...form,
      [target.name]: target.value,
    })
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:6001/listings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then(handleFormSubmitted)
      .then(() => {
        setForm({
          description: '',
          image: '',
          location: '',
        })
      })
      .catch((error) => alert(error))
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor='description'>Description:</label>
        <input type='text' name='description' value={form.description} onChange={handelOnChange} />
      </div>
      <div>
        <label htmlFor='image'>Image URL:</label>
        <input type='text' name='image' id='image' value={form.image} onChange={handelOnChange} />
      </div>
      <div>
        <label htmlFor='location'>Location:</label>
        <input type='text' name='location' id='location' value={form.location} onChange={handelOnChange} />
      </div>
      <button type='submit'>Submit</button>
    </form>
  )
}

export default NewListingForm
