import React, { Component } from "react";

function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 3000);
  });
}

export default class AsyncEventExample extends Component {
  onClick(e) {
    console.log("Clicked", e.currentTarget.style);

    fetchData().then(() => {
      console.log("callback", e.currentTarget.style);
    });
  }

  render() {
    return <button onClick={this.onClick}>{this.props.children}</button>;
  }
}

// the second call to console.log() is attempting to access a synthetic event propery from an asynchronous callback that doesn't run until the event handler completes which causes the event to empty it's properties. This results in a warning and an undefined value.
// the aim of this example is to illustrate how things can break when you write asynchronous code that interacts with events. DO NOT DO IT.
// events are pooled for performance reasons, which means you should never access event objects in an async way.
