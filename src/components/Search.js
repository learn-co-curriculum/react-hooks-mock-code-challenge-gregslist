function Search({ setListings, getAllListings }) {
  const updateSearchValue = async (e) => {
    const fetchAndFilterListings = async () => {
      const allListings = await getAllListings();
      return allListings.filter((currentListing) => {
        return (
          e.target.value === "" ||
          currentListing.description.toLowerCase().includes(e.target.value)
        );
      });
    };
    setListings(await fetchAndFilterListings());
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
