import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Bar from "./barchart.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [], output: [] };
  }
  componentDidMount() {
    axios
      .get("https://api.github.com/repos/facebook/react/contributors")
      .then(response => {
        let data2 = response.data.map(obj => ({
          contributor: obj.login,
          total: obj.contributions
        }));
        this.setState({
          data: data2
        });
      })

      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <ul>
        <h3>Contributors to React Github</h3>
        {this.state.data.map(obj1 => (
          <li>
            Contributor: {obj1.contributor}, Total: {obj1.total}
          </li>
        ))}
        <Bar info={this.state.data} />
      </ul>
    );
  }
}

export default App;
