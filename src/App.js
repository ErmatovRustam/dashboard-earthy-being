import './App.css';
import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom" 
import List from './components/list/List'
import Dashboard from './components/dashboard/Dashboard'
import Productlist from './components/product-list/Product-List'


function App() {
  return (
    <Router>
      <div className="App">
        <ul className = 'mainMenu'>
          <li>
            <Link to = '/list'>List</Link>
          </li>
          <li><Link to = '/dashboard'>Dashboard</Link></li>
          <li>
            <Link to = '/productlist'>Productlist</Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route path='/list'>
          <List />
        </Route>
        <Route path='/dashboard'>
          <Dashboard />
        </Route>
        <Route path='/productlist'>
          <Productlist />
        </Route>
        
      </Switch>
    </Router>
  );
}

export default App;
