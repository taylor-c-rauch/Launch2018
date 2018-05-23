import React, { Component } from "react";
import "./App.css";
import QuoteGen from "./quotes.js";

class App extends Component {
  render() {
    const quoteList = [
      "Get busy living or get busy dying",
      "Those who dare to fail miserable can achieve greatly",
      "It is hard to fail, but it is worse never to have tried to succeed",
      "Let ys always meet each other with a smile, for the smile is the beginning of love",
      "Only I can change my life. No one can do it for me",
      "With the new day comes new strength and new thoughts"
    ];
    return (
      //pass down the quotelist as a prop
      <QuoteGen x={quoteList} />
    );
  }
}

export default App;
