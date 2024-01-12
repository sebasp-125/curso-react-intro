import React from 'react';
import './TodoSearch.css'


function TodoSearch({
  searchState ,
  foudState ,   //Destructuracíon.
}) {
  return (
    <div className="content_input">
      <input placeholder="   Cortar Cebolla" 
      value={searchState}
        onChange={(event) => {
          const filter = event.target.value;
          foudState(filter)
        }}

      />
      
    </div> 
  )
}

export { TodoSearch };
