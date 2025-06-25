import Search from "./Search";
import AddForm from "./AddForm";
import { useState } from "react";

function Header({ listings, addListing, sortListings, filterListings }) {
  const [isAddFormHidden, setIsAddFormHidden] = useState(false);
  const toggleFormVisibility = () => {
    setIsAddFormHidden((currStatus) => !currStatus);
  };
  return (
    <>
      <header>
        <h1>
          <span className="logo" role="img">
            ☮
          </span>
          gregslist
        </h1>
        <Search filterListings={filterListings} />
        <button onClick={sortListings}>Sort By Location</button>
        <button onClick={toggleFormVisibility}>+ Add Item</button>
      </header>
      {isAddFormHidden && <AddForm addListing={addListing} />}
    </>
  );
}

export default Header;
