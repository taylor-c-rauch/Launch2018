import React, { Component } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default class ContractForm extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <form>
        <TextField
          id="name"
          label="Name"
          fullWidth
          margin="normal"
          value={this.props.inputName}
          onChange={e => this.props.updateName(e.target.value)}
        />
        <TextField
          id="company"
          label="Company"
          fullWidth
          margin="normal"
          value={this.props.inputCompany}
          onChange={e => this.props.updateCompany(e.target.value)}
        />
        <TextField
          id="details"
          label="Contract Details"
          multiline
          rows="4"
          fullWidth
          margin="normal"
          value={this.props.inputDetails}
          onChange={e => this.props.updateDetails(e.target.value)}
        />
        <Button
          variant="raised"
          color="default"
          onClick={e => this.props.subButton(e)}
        >
          SUBMIT
        </Button>
        <br />
        <br />
      </form>
    );
  }
}
