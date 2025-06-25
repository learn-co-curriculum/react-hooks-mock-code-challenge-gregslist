import ListingCard from "./ListingCard";

function ListingsContainer({ listings, deleteListing }) {
  return (
    <main>
      <ul className="cards">
        {listings.map((listing) => {
          return (
            <ListingCard
              listing={listing}
              deleteListing={deleteListing}
              key={listing.id}
            />
          );
        })}
      </ul>
    </main>
  );
}

export default ListingsContainer;
