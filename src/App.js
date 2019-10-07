import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      randomQuote: [],
      isLoaded: false
    }
  }

  componentDidMount() {
    fetch("https://andruxnet-random-famous-quotes.p.rapidapi.com/?cat=famous&count=1", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "andruxnet-random-famous-quotes.p.rapidapi.com",
        "x-rapidapi-key": "8ec386ec60msh579026526fbc14cp13550ejsn503782a91fff"
      }
    })
    .then(response => response.json())
    .then(response => {
      this.setState({
        isLoaded: true,
        randomQuote: response
      });
    })
    .catch(err => {
      console.log(err);
    });
  }

  changeQuote(){
    // Refresh page and take a new quote from API
    window.location.reload(true);
  }

  render(){

    let { isLoaded, randomQuote } = this.state;

    if(!isLoaded){
      return <div>Loading...</div>;
    } else {
      return (
        <div className="App">
          <div id="quote-box">
            <q id="text">
              {randomQuote[0].quote}
            </q>
            <cite id="author">
              {randomQuote[0].author}
            </cite>
            <button id="new-quote" onClick={this.changeQuote.bind(this)}>New quote</button>
            <a id="tweet-quote" href="twitter.com/intent/tweet">Tweet quote</a>
          </div>
        </div>
      );
    }
  }
}

export default App;
