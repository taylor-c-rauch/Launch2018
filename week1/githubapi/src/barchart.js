import React, { Component } from "react";
import { VictoryBar, VictoryChart, VictoryTheme } from "victory";

export default class Bar extends Component {
  render() {
    if (this.props.info.length === 0) {
      return null;
    }
    let output2 = [
      this.props.info[0],
      this.props.info[5],
      this.props.info[11],
      this.props.info[17],
      this.props.info[23]
    ];
    return (
      <VictoryChart theme={VictoryTheme.greyscale} domainPadding={20}>
        <VictoryBar
          style={{ data: { fill: "#3CBAA3" } }}
          data={output2}
          x="contributor"
          y="total"
        />
      </VictoryChart>
    );
  }
}
