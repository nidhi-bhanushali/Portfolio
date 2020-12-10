import "./css/App.css";
import React , { Fragment } from "react";
import {BrowserRouter as Router , Route , Switch } from 'react-router-dom'
import Navbar from "./layout/Navbar";
import Home from "./components/Home"
import About from "./components/About"
import Blog from "./components/Blog"
import Footer from "./layout/Footer";
import Projects from "./components/Projects";


function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Switch>
          <Fragment>
            <Route exact path = '/' component = {Home} />
            <Route exact path = '/project' component = {Projects} />
            <Route exact path = '/about' component = {About} />
            <Route exact path = '/blog' component = {Blog} />
          </Fragment>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
