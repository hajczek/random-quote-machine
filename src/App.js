import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div id="quote-box">
        <q id="text">
          A random quote will display here.
        </q>
        <cite id="author">
          The name of an author of this quote will display here.
        </cite>
        <button id="new-quote">New quote</button>
        <a id="tweet-quote" href="twitter.com/intent/tweet">Tweet quote</a>
      </div>
    </div>
  );
}

export default App;
