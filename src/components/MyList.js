import { render } from "@testing-library/react";
import React, { Component } from "react";
import reverse from "../functions/reverse";

export default class MyList extends Component {
  state = {
    items: ["Angular", "Ember", "React"],
  };

  onReverseClick = reverse.bind(this);

  //The onReverseClick method actually calls the generic reverse function. It is created using bind() to bind the context of the generic function to this component instance.

  render() {
    const {
      state: { items },
      onReverseClick,
    } = this;

    return (
      <section>
        <button onClick={onReverseClick}>Reverse</button>
        <ul>
          {items.map((v, i) => (
            <li key={i}>{v}</li>
          ))}
        </ul>
      </section>
    );
  }
}
