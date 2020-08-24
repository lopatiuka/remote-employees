import React from 'react';
import './App.css';
import { Wrapper } from './components/wrapper';
import { Route, Switch } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom';
import AdminComponent from './components/admin/admincomp';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path = "/" component = { Wrapper }/>
          <Route path = "/admin" component = { AdminComponent }/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
