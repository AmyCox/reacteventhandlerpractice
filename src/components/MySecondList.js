import React, { Component } from "react";

// You have to bind the event handler context which is done in the constructor. 

// This example teaches where the handler needs access to component properties along with argument values. 
export default class MySecondList extends Component {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
  }

  //the onClick() event handler needs access to the componentso that it can look up the clicked item in this.props.items. Also the onClick() handler is expecting an id parameter

  onClick(id) {
    const { name } = this.props.items.find((i) => i.id === id);
    console.log("clicked", `"${name}"`);
  }

  // calling bind() supplies the argument value for each item in the list. This means that when the handler is called in response to a click event the id of the item is already provided. Parametered event handling is quite different from prior approaches. 
  render() {
    return (
      <ul>
        {this.props.items.map(({ id, name }) => (
          <li key={id} onClick={this.onClick.bind(null, id)}>
            {name}
          </li>
        ))}
      </ul>
    );
  }
}
