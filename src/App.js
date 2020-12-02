import "./css/App.css";
import React , { Fragment } from "react";
import {BrowserRouter as Router , Route , Switch } from 'react-router-dom'
import Navbar from "./layout/Navbar";
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"


function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Switch>
          <Fragment>
            <Route exact path = '/' component = {Home} />
            <Route exact path = '/home' component = {Home} />
            <Route exact path = '/about' component = {About} />
            <Route exact path = '/contact' component = {Contact} />
          </Fragment>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
