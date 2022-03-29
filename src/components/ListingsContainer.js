import React from "react";
import ListingCard from "./ListingCard";


function ListingsContainer( { listingsToMap , searchTEXT , getClickItem } ) {

    console.log( "searchTEXT" , searchTEXT )

    let filteredListings = listingsToMap.filter( ( itemToCheck )=>{

        if(  itemToCheck.description.toLowerCase().includes( searchTEXT.toLowerCase() )  ){  // 

          return( itemToCheck )
          
        }

    } )

  return (
    <main>

      <ul className="cards">
        {/* use the ListingCard component to display listings */
        
        filteredListings.map( ( eachItem )=>{

            return( 
              <ListingCard key={ eachItem.id }  // for React 
              
                itemToRender={ eachItem } 
                getClickItem={ getClickItem }
            
              /> 
            )

          } )
        
        }
      </ul>
    </main>
  );
}

export default ListingsContainer;
