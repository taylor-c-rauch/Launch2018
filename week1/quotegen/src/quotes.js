import React, { Component } from "react";

export default class QuoteGen extends Component {
  constructor(props) {
    super(props);
    this.state = { i: 0 };
  }
  handleClick() {
    if (this.state.i + 1 === this.props.x.length) this.setState({ i: 0 });
    else this.setState({ i: this.state.i + 1 });
  }
  render() {
    return (
      <button onClick={e => this.handleClick(e)}>
        {this.props.x[this.state.i]}
      </button>
    );
  }
}
