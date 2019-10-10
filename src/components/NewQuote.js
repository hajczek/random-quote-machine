import React from 'react';

const NewQuote = (props) => {

  return (
    <button 
      id="new-quote" 
      onClick={props.changeQuote.bind(this)}
    >
      New quote
    </button>
  )
}

export default NewQuote;