import React, { Component } from "react";

export default class MyInput extends Component {
  onChange() {
    console.log("changed");
  }

  onBlur() {
    console.log("blurred");
  }

  render() {
    return <input onChange={this.onChange} onBlur={this.onBlur} />;
  }
}
