import React from 'react';

const Quote = (props) => {

  return (
    <div>
      <q id="text">
        {props.quotes[0].quote}
      </q>
      <cite id="author">
        {props.quotes[0].author}
      </cite>
    </div>
  )
}

export default Quote;