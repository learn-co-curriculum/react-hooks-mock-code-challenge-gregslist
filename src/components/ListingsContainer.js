import { useEffect } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ setListings, listings, getAllListings }) {
  useEffect(() => {
    const fetchListings = async () => {
      const data = await getAllListings();
      setListings(data);
    };

    fetchListings();
  }, []);
  return (
    <main>
      <ul className="cards">
        {listings.map((listing) => {
          return (
            <ListingCard
              listing={listing}
              setListings={setListings}
              key={listing.id}
            />
          );
        })}
      </ul>
    </main>
  );
}

export default ListingsContainer;
