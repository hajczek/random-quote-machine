import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      randomQuote: 0,
      isLoaded: false
    }
  }

  componentDidMount() {
    fetch("https://andruxnet-random-famous-quotes.p.rapidapi.com/?cat=famous&count=10", {
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
        quotes: response
      });
    })
    .catch(err => {
      console.log(err);
    });
  }

  changeQuote(){
    this.setState({
      randomQuote: Math.floor((Math.random() * 10) + 1)
    });
  }

  render(){

    let { isLoaded, quotes, randomQuote } = this.state;

    if(!isLoaded){
      return <div>Loading...</div>;
    } else {
      return (
        <div className="App">
          <div id="quote-box">
            <q id="text">
              {quotes[randomQuote].quote}
            </q>
            <cite id="author">
              {quotes[randomQuote].author}
            </cite>
            <div className="buttons">
            <a 
              id="tweet-quote" 
              href={'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + quotes[randomQuote].quote + ' ' + quotes[randomQuote].author}
            >
              Tweet quote
            </a>
              <button 
                id="new-quote" 
                onClick={this.changeQuote.bind(this)}
              >
                New quote
              </button>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default App;
