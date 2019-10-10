import React from 'react';

const TweetQuote = (props) => {

  return (
    <a 
      id="tweet-quote" 
      href={'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + props.quotes[0].quote + ' ' + props.quotes[0].author}
    >
      Tweet quote
    </a>
  )
}

export default TweetQuote;