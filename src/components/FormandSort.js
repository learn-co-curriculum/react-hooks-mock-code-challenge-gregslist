import React, {useState} from 'react';

function FormandSort({ onPost, sort, onHandleSort }) {

     //clear intial form and have text reset
    const intialForm = {
        "id" : 0,
        "description" : "",
        "image" : "",
        "location" : ""
    }
    const [form , setForm] = useState(intialForm)

   
  
    function handleChange(e) {
        setForm({...form, [e.target.name] : e.target.value })}


``
    function handleSubmit() {
        fetch(`http://localhost:6001/listings`,{
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(form)
            })
            .then((resp) => resp.json())
            .then((newListing) => onPost(newListing))
        }

    
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" name="description" placeholder="Description" value={form.description} onChange={handleChange}/>
            <input type="text" name="image" placeholder="Image" value={form.image} onChange={handleChange}/>
            <input type="text" name="location" placeholder="Where Are you Located" value={form.location} onChange={handleChange}/>
            <input type="submit"/>
        </form>
        <label>Sort Alphabetically: </label><input type="checkbox" name="sort" id="sort"  value={sort} onClick={onHandleSort}/>
    </div>

  )
}

export default FormandSort;