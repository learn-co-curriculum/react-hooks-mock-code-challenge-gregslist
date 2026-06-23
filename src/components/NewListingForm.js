import React, {useState} from 'react';

function NewListingForm({ onAddListing }) {
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [location, setLocation] = useState('');
  
  function handleSubmit(e) {
    e.preventDefault();
    onAddListing({ description, image, location });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='description'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        />
      <input
        type='text'
        placeholder='image url'
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <input 
        type='text'
        placeholder='location'
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button type='submit'>Add Listing</button>
    </form>
  )
}

export default NewListingForm;