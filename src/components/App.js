import React,{ useState , useEffect } from "react";

import Header from "./Header";
import ListingsContainer from "./ListingsContainer";


function App() {


  const [ allListings , setAllListings ] = useState( [] )
    console.log( "State of allListings: " , allListings )  //

    const [ searchTEXT , setsearchTEXT ] = useState( "" )
      console.log( "State of searchTEXT: " , searchTEXT )  //


    const fetchListings =()=>{

      fetch( "http://localhost:6001/listings" )
      .then( r => r.json() )
      .then( ( fetchedArrayOfObjects )=> { 
      
        setAllListings( fetchedArrayOfObjects )
      
      } )

    }
  useEffect( fetchListings , [] )


  function getSearchText( searchBarText ){

    setsearchTEXT( searchBarText )  //

  }

  function getClickItem( itemToDELETE ){

    console.log( "click to DELETE :" , itemToDELETE )

    let resultOfListingFilter = allListings.filter( ( itemToCheck )=>{

      if( itemToCheck.id !== itemToDELETE.id ){

        return( itemToCheck )

      }

    } )

    setAllListings(  [ ...resultOfListingFilter ]  )

    fetch( `http://localhost:6001/listings/${itemToDELETE.id}` , { method: "Delete" } )

  }


  return (
    <div className="app">
      <Header getSearchText={ getSearchText } />
      <ListingsContainer 
        listingsToMap={ allListings } searchTEXT={ searchTEXT } 
        getClickItem={ getClickItem } 
      />
    </div>
  );
}
export default App;


/*


  < App />
  L>
    < Header />
    < ListingsContainer />



*/
