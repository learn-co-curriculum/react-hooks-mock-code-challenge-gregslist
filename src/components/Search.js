import React, {useState} from "react";

function Search({search , onhandleSubmit}) {
  const [form, setForm] = useState('')

  //need a handleChange form change 
  //1. make form controlled using state Form 
  //2. onSubmit change search in app.js
  //need a  handleSubmit
  // function handleSubmit(e) {
  //   e.preventDefault();
  //   console.log("submitted");
  // }

  function handleSubmit(e) {
    e.preventDefault()
    onhandleSubmit(form)
  }

  function handleForm(e) {
    setForm(e)
  }

  return (
    <form className="searchbar" value={search} onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={form}
        onChange={(e) => handleForm(e.target.value)}
      />
      <button type="submit" >🔍</button>
    </form>
  );
}

export default Search;
