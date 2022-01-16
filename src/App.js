import logo from "./logo.svg";
import MyButton from "./components/MyButton";
import MyInput from "./components/MyInput";
import MyList from "./components/MyList";
import HigherOrderEventHandler from "./components/HigherOrderEventHandler";
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
