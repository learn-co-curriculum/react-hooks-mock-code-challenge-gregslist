import React from "react";
import Search from "./Search";

function Header({ search, onSearchChange, onAddListing }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    const newObject = Object.fromEntries(new FormData(e.target));

    const newListing = {
      ...newObject,
      id: Date.now(),
    };

    onAddListing(newListing);

    e.target.reset();
  };

  return (
    <header>
      <div>
        <form onSubmit={handleSubmit}>
          <input name="description" required placeholder="Description" />
          <input name="location" required placeholder="Location" />
          <input name="price" required placeholder="Price" />
          <input name="image" type="src" required placeholder="Image" />
          <button>Post</button>
        </form>
      </div>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search search={search} onSearchChange={onSearchChange} />
    </header>
  );
}

export default Header;
