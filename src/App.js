import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import Navbar, { NavItems } from './components/Navbar';
import Routes from './components/Routes';
import pagesData from './pages/pagesData';

import './App.css';


function App() {
  return (
  <div className="App">
      <Router>
        <Navbar>
          <NavItems pages={pagesData} />
        </Navbar>
        <Switch>
          <Routes pages={pagesData} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
