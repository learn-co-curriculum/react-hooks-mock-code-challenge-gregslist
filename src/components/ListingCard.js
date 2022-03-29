import React, { useState }  from "react";


function ListingCard( { itemToRender , getClickItem } ) {

    const [ favOrUnfav , toggleFavOrUnFav ] = useState( false )
      

    function clickHandlerForStar(){

      console.log( "click" )

      toggleFavOrUnFav( favOrUnfav => !favOrUnfav )

    }
    function clickHandlerForDELETEButton(){

      getClickItem( itemToRender )

    }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$FREE.99</span>
        <img src={ itemToRender.image } alt={ itemToRender.description } />
      </div>
      <div className="details" >
        {
        
          favOrUnfav ? 
          
          ( // true
            <button className="emoji-button favorite active" onClick={ clickHandlerForStar }>
              ★
            </button> 
          ) 
          
          :
          
          (
            <button className="emoji-button favorite" onClick={ clickHandlerForStar } >
              ☆
            </button> 
          ) // false

        }
        <strong>{ itemToRender.description }</strong>
        <span> · { itemToRender.location }</span>

        <button className="emoji-button delete"  onClick={ clickHandlerForDELETEButton } >
          🗑
        </button>

      </div>
    </li>
  );
}
export default ListingCard;
