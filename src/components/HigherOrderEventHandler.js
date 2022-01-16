import React, { Fragment, Component } from "react";

export default class HigherOrderEventHandler extends Component {
  state = {
    first: 0,
    second: 0,
    third: 0,
  };

  //the onClick function is automatically bound to the component BECAUSE it's defined as an arrow function. It takes a name argument and returns a new function. The function that is returned uses this name value when called. It uses computed property syntax (variables inside []) to increment the state value for the given name.
  onClick = (name) => () => {
    this.setState((state) => ({ ...state, [name]: state[name] + 1 }));
  };

  render() {
    const { first, second, third } = this.state;

    // this component renders three buttons and has three pieces of state. A Counter for each button. The onClick function is automatically bound to the component context BECAUSE it's defined as an arrow function.

    return (
      <Fragment>
        <button onClick={this.onClick("first")}>First {first}</button>
        <button onClick={this.onClick("second")}>Second {second}</button>
        <button onClick={this.onClick("third")}>Third {third}</button>
      </Fragment>
    );
  }
}

// This component demonstrates how to make your event handler functions interact with your component data. If you have a class based component you can bind your function context to the component class so that you have direct access to the component state and properties. Higher order functions are another option for generating distinct callback functions by passing an argument to the higher order function.
