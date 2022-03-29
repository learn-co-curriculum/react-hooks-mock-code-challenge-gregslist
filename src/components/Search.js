import React, { useState } from "react";

function Search( { getSearchText } ) {

  function handleSubmit(e) {
    e.preventDefault();

    getSearchText( whatsInTheSearchBar )

  }

  const [ whatsInTheSearchBar , updateSearchBarText ] = useState( "" )
    console.log("whatsInTheSearchBar: " , whatsInTheSearchBar);  //

  return (
    <form className="searchbar" onSubmit={ handleSubmit }>

      <input
        type="text"
        id="search"
        placeholder="search free stuff"
          value={ whatsInTheSearchBar }
        onChange={ ( e ) => updateSearchBarText( e.target.value ) }
      />

      <button type="submit">🔍</button>

    </form>
  );
}

export default Search;
