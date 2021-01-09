import React from 'react';
import {BarChart} from 'react-chartjs-2';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import Revenue from '../revenue/Revenue'
import Income from '../income/Income'
import Bar from '../bar/Bar'
import Sales from '../sales/Sales'
import './dashboard.css'

const Dashboard = () =>{
    return (
      <Router>
        <div className="dashboard">
          <ul className='menu'>
            <li>
              <Link to = '/dashboard/revenue'>Revenue</Link>
            </li>
            <li>
              <Link to = '/dashboard/sales'>Sales</Link>
            </li>
            <li>
              <Link to = '/dashboard/income'>Income</Link>
            </li>
            <li>
              <Link to = '/dashboard/bar'>Bar</Link>
            </li>
          </ul>
        </div>
        <Switch>
          <Route path='/dashboard/revenue'>
            <Revenue />
          </Route>
          <Route path = '/dashboard/sales'>
            <Sales />
          </Route>
          <Route path='/dashboard/income'>
            <Income />
          </Route>
          <Route path = '/dashboard/bar'>
            <Bar />
          </Route>
        </Switch>
      </Router>
    );
};

export default Dashboard;