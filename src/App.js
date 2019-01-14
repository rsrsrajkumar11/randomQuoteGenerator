import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import meme from './resources/meame'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text:meme[0]["quote"],
      author:meme[0]["author"]
    }
    this.handleClick=this.handleClick.bind(this);
  }
  
  handleClick(event){
    let r=Math.round(Math.random()*12);
    console.log(r);

    this.setState({
      text:meme[r]["quote"],
      author:meme[r]["author"]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Random Quote Machine</h1>
        <div id="quote-box" > 
          <p id="text"><span>"</span>{ this.state.text }</p>
          <p id="author">-{ this.state.author }</p>
          <div class="buttons">
            <a class="button" id="tweet-quote" title="Tweet this quote!" target="_blank" href='twitter.com/intent/tweet'>
              <i class="fa fa-twitter"></i>
            </a>
            <a class="button" id="tumblr-quote" title="Post this quote on tumblr!" target="_blank">
              <i class="fa fa-tumblr"></i>
            </a>
          </div>
          <input type="button" id="new-quote" onClick={ this.handleClick } value="New quote" />
        </div>
      </div>
    );
  }
}

export default App;
