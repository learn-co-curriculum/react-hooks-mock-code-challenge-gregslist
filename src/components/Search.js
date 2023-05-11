import React,{useState} from "react";

function Search({onSearch , search}) {
  const [form , setForm] = useState('')
  
  function handleSubmit(e) {
    e.preventDefault();
    onSearch(form);
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
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;