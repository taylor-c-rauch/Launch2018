import React, { Component } from "react";
import ContractForm from "./ContractForm.js";
import "./App.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      company: "",
      details: "",
      submitted: []
    };
  }

  updateField(field, newValue) {
    this.setState({
      [field]: newValue
    });
  }
  handleClick(e) {
    if (
      this.state.name === "" ||
      this.state.company === "" ||
      this.state.details === ""
    ) {
      return null;
    }
    let form = {
      n: this.state.name,
      c: this.state.company,
      d: this.state.details
    };
    let arr = this.state.submitted;
    arr.push(form);
    this.setState({ submitted: arr });
    this.setState({ name: "", company: "", details: "" });
  }

  render() {
    return (
      <div className="App">
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="title" color="inherit">
              Contract Form
            </Typography>
          </Toolbar>
        </AppBar>
        <ContractForm
          updateName={newValue => this.updateField("name", newValue)}
          updateCompany={newValue => this.updateField("company", newValue)}
          updateDetails={newValue => this.updateField("details", newValue)}
          subButton={click => this.handleClick(click)}
          inputName={this.state.name}
          inputCompany={this.state.company}
          inputDetails={this.state.details}
        />
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="title" color="inherit">
              Submitted Contracts
            </Typography>
          </Toolbar>
        </AppBar>
        {this.state.submitted.map(obj => (
          <p style={{ textAlign: "left" }}>
            <strong>Name:</strong> {obj.n} <br />
            <strong>Company:</strong> {obj.c} <br />
            <strong>Details:</strong>
            {obj.d} <br />
            <br />
          </p>
        ))}
      </div>
    );
  }
}

export default App;
