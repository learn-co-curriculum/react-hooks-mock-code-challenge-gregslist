import {React, useState} from "react";


function Search({listings}) {

const [name, setName] =useState('');

function handleChange (e) {

    console.log(e.target.value)
    setName(e.target.value)
}
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={""}
        onChange ={handleChange}
      />
      <button type="submit">🔍</button>
    </form>
  );
}


export default Search;
