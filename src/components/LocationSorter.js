import React from "react";

const LocationSorter = ({ locationSort, setLocationSort }) => {
  const handleChange = (event) => {
    setLocationSort(event.target.value);
  };

  return (
    <div>
      <h4>Sort By Location:</h4>
      <select value={locationSort} onChange={handleChange}>
        <option value="notSorted">Not Sorted</option>
        <option value="a-z">Sorted Location: A-Z</option>
        <option value="z-a">Sorted Location: Z-A</option>
      </select>
    </div>
  );
};

export default LocationSorter;
