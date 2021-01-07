import './App.css';
import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom" 
import List from './components/list/list'
import Productlist from './components/product-list/productlist'

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to = '/list'>List</Link>
          </li>
          <li>
            <Link to = '/productlist'>Productlist</Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route path='/list'>
          <List />
        </Route>
        <Route path='/productlist'>
          <Productlist />
        </Route>
        
      </Switch>
    </Router>
  );
}

export default App;
