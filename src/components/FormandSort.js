import React,{useState} from 'react'

function FormandSort({onSort, listings, onnewListing}) {

    const intialForm = {
        "description" : "",
        "image" : "",
        "location" : ""
    }
const [form, setForm] = useState(intialForm)



function handlePatch(e) {
    e.preventDefault()
    fetch('http://localhost:6001/listings/',{
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(form)
        })
        .then((resp) => resp.json())
        .then((data) => onnewListing(data))
        setForm(intialForm)
}

//... spread is used to add data | POST
//spread not to alter spread directly 
//map is used to update data | PATCH
//.filter is used to delete data | DELETE

function handleForm(e) {
    setForm({...form,
        [e.target.name] : e.target.value })
}


  return (
    <div>
        <form onSubmit={handlePatch}>
            <input type="text" name="description" value={form.description} placeholder="Description?" onChange={handleForm}/>
            <input type="text" name="image" value={form.image} placeholder="Image?" onChange={handleForm}/>
            <input type="text" name="location" value={form.location} placeholder="Location?" onChange={handleForm}/>
            <button type="submit">Submit</button>
        </form>
        <label>Sort</label>
        <input type="checkbox" onClick={onSort}/>
    </div>
  )
}

export default FormandSort