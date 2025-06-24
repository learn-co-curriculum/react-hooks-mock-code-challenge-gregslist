import { useEffect } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, setListings }) {
  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((res) => res.json())
      .then((data) => setListings(data));
  }, []);

  return (
    <>
      <main>
        <ul className="cards">
          {listings.map((listing) => (
            <ListingCard
              listing={listing}
              setListings={setListings}
              key={listing.id}
            />
          ))}
        </ul>
      </main>
    </>
  );
}

export default ListingsContainer;
