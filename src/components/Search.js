function Search({ filterListings }) {
  const updateSearchValue = async (e) => {
    await filterListings(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        onChange={updateSearchValue}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
