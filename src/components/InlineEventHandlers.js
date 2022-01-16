// The typical approach to assigning handler functions to JSX properties is to use a named function. However sometimes you may want to use an inline function where the function is defined as part of the markup.
// This is done by assigning an arrow function firectly to the event property in the JSX markup

import React, { Component } from "react";

export default class InLineEventHandlers extends Component {
  render() {
    return (
      <button onClick={(e) => console.log("Clicked", e)}>
        {this.props.children}
      </button>
    );
  }
}

// The main use of inlining event handlers like this is when you have a static parameter value that you want to pass to another function. In this example you are calling console.log() with the 'Clicked' string. You could have set up a special function for this purpose outside of the JSX markup by creating a new function using bind() or by using a higher order function
