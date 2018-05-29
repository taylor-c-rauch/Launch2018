import React, { Component } from "react";
import ContractForm from "./ContractForm.js";
import "./App.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import firebase from "./firebase.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      company: "",
      details: "",
      submitted: [],
      removeId: ""
    };
  }

  updateField(field, newValue) {
    this.setState({
      [field]: newValue
    });
  }
  handleClick(e) {
    e.preventDefault();
    if (
      this.state.name === "" ||
      this.state.company === "" ||
      this.state.details === ""
    ) {
      return null;
    }
    let itemsRef = firebase.database().ref("contracts");
    let form = {
      n: this.state.name,
      c: this.state.company,
      d: this.state.details
    };
    itemsRef
      .push(form)
      .then(this.setState({ name: "", company: "", details: "" }));
  }
  handleRemove(e) {
    e.preventDefault();
    if (this.state.removeId === "") {
      return null;
    }
    this.removeItem(this.state.removeId);
  }
  removeItem(itemId) {
    let itemsRef = firebase.database().ref("/contracts/" + itemId);
    itemsRef.remove().then(this.setState({ removeId: "" }));
  }

  componentDidMount() {
    const itemsRef = firebase.database().ref("contracts");
    itemsRef.on("value", snapshot => {
      let submitted = snapshot.val();
      let arr = [];
      for (let form in submitted) {
        arr.push({
          name: submitted[form].n,
          company: submitted[form].c,
          details: submitted[form].d
        });
      }
      this.setState({
        submitted: arr
      });
    });
  }

  render() {
    return (
      <div className="App">
        <AppBar position="static" color="primary">
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
          updateRemove={newValue => this.updateField("removeId", newValue)}
          removeButton={click => this.handleRemove(click)}
          inputRemove={this.state.removeId}
        />
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="title" color="inherit">
              Submitted Contracts
            </Typography>
          </Toolbar>
        </AppBar>
        {this.state.submitted.map(obj => (
          <p style={{ textAlign: "left" }}>
            <strong>Name:</strong> {obj.name} <br />
            <strong>Company:</strong> {obj.company} <br />
            <strong>Details: </strong>
            {obj.details}
            <br />
          </p>
        ))}
      </div>
    );
  }
}

export default App;
