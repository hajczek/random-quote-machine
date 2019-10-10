import React, { Component } from 'react';
import Quote from './components/Quote';
import Buttons from './components/Buttons';
import Spinner from './components/Spinner';
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
      return <Spinner />
    } else {
      return (
        <div className="App">
          <div id="quote-box">
            <Quote quotes={this.state.quotes}/>
            <Buttons
              quotes={this.state.quotes}
              changeQuote={this.changeQuote}
            >
            </Buttons>
          </div>
        </div>
      );
    }
  }
}

export default App;
