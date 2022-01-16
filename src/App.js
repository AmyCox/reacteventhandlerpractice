import logo from "./logo.svg";
import MyButton from "./components/MyButton";
import MyInput from "./components/MyInput";
import MyList from "./components/MyList";
import HigherOrderEventHandler from "./components/HigherOrderEventHandler";
import InlineEventHandlers from "./components/InlineEventHandlers";
import AsyncEventExample from "./components/AsyncEventExample";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <MyButton>Button</MyButton>
        <MyInput />
        <MyList />
        <HigherOrderEventHandler />
        <InlineEventHandlers>CLICK ME AND I SAY CLICKED</InlineEventHandlers>
        <AsyncEventExample>ASYNC EXAMPLE</AsyncEventExample>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
