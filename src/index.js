import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import MySecondList from "./components/MySecondList";

// The mysecond list component is passed an array of values

const items = [
  { id: 0, name: "First" },
  { id: 1, name: "Second" },
  { id: 2, name: "Third" },
];

ReactDOM.render(
  <React.StrictMode>
    <App />
    <MySecondList items={items} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
