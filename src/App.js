import React, { Component } from 'react';
import Quote from './components/Quote';
import TweetQuote from './components/TweetQuote';
import NewQuote from './components/NewQuote';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
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
        quotes: response
      });
    })
    .catch(err => {
      console.log(err);
    });
  }

  changeQuote(){
    window.location.reload(true);
  }

  render(){
    let { isLoaded, quotes} = this.state;

    if(!isLoaded){
      return (
        <div className="App">
          <div id="quote-box">
            <div class="spinner"></div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="App">
          <div id="quote-box">
            <Quote quotes={this.state.quotes}/>
            <div className="buttons">
              <TweetQuote quotes={this.state.quotes} />
              <NewQuote changeQuote={this.changeQuote} />
            </div>
          </div>
        </div>
      );
    }
  }
}

export default App;
