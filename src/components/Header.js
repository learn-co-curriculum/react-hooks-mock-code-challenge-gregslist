import Search from "./Search";
import AddForm from "./AddForm";
import { useState } from "react";

function Header({ setListings, listings, getAllListings }) {
  const [isAddFormHidden, setIsAddFormHidden] = useState(false);
  const sortByLocation = () => {
    setListings((currListings) =>
      [...currListings].sort((a, b) => a.location.localeCompare(b.location)),
    );
  };
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
        <Search
          listings={listings}
          setListings={setListings}
          getAllListings={getAllListings}
        />
        <button onClick={sortByLocation}>Sort By Location</button>
        <button onClick={toggleFormVisibility}>+ Add Item</button>
      </header>
      {isAddFormHidden && <AddForm setListings={setListings} />}
    </>
  );
}

export default Header;
