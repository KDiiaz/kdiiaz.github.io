import logo from './Components/JuanDiaz.jpg';
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import './App.css';
import Home from "./Components/Home"
import About from "./Components/About"
import Projects from "./Components/Projects"
import Contact from "./Components/Contact"

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <url>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/about">About</Link>
            </li>
            <li>
            <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </url>
        </nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
  
        </Switch>
      </div>
    </Router>
  );
 }
 
export default App;
