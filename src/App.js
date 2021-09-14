import React, {Fragment, useState} from 'react';
import {Container} from 'react-bootstrap';

// css
import './App.css';

// pages
import Home from './pages/Home';
import About from './pages/About';

// Components
import AppNavbar from './components/AppNavbar';

// Router
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Fragment>
      <Router>
        <AppNavbar/>
        <Container>
          <Switch>
            <Route exact path="" component={Home}/>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
          </Switch>
        </Container>
      </Router>
    </Fragment>
  );
}

export default App;
