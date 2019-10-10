import React from 'react';
import TweetQuote from './TweetQuote';
import NewQuote from './NewQuote';

const Buttons = (props) => {

  return (
    <div className="buttons">
      <TweetQuote quotes={props.quotes} />
      <NewQuote changeQuote={props.changeQuote} />
    </div>
  )
}

export default Buttons;