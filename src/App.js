import logo from './JuanDiaz.jpg';
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import './App.css';
import Home from "./Components/Home"
import About from "./Components/About"
import Projects from "./Components/Projects"
import Contact from "./Components/Contact"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> My name is Juan Diaz and I'm going to master React!
        <a
          className="App-link"
          href="https://github.com/kdiiaz"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check Me Out! 
        </a>
      </header>
    </div>
  );
}

export default App;
