import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      randomQuote: '',
      isLoaded: false
    }
  }

    componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(json => {
          this.setState({
            isLoaded: true,
              randomQuote: json
          })
        });
    }

  render(){

    let { isLoaded, remoteQuote } = this.state;

    return (
      <div className="App">
        <div id="quote-box">
          <q id="text">
            The random quote will display here.
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
}

export default App;
