import logo from './logo.svg';
import backgroundImage from './images/Bg.png'
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import Destination from './Components/Destination/Destination';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import image from './images/Dhaka Riders.png'


function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <div className="headerImg">
            <img src={image} alt=""/>
          </div>
          <div className="naver">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Destination">Destination</Link>
              </li>
              <li>
                <Link to="/Blog">Blog</Link>
              </li>
              <li>
                <Link to="/Contact">Contact</Link>
              </li>
            </ul>
          </div>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path = "/">
              <Home/>
            </Route>
            <Route path="/Destination">
              <Destination/>
            </Route>
            <Route path="/Blog">
              <Blog/>
            </Route>
            <Route path="/Contact">
              <Contact/>
            </Route>
            <Route path="/">
              <Home/>
            </Route>
          </Switch>
        </nav>
      </Router>
   </div>
  );
}

export default App;
