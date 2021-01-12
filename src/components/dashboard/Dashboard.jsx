import React from 'react';
import {BarChart} from 'react-chartjs-2';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import Revenue from '../revenue/Revenue'
import Transactions from '../transactions/Transactions'
import Sales from '../sales/Sales'
import FrequencySales from '../frequency-Sales/FrequencySales'
import './dashboard.css'
import dat from '../../data/data'


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
              <Link to = '/dashboard/frequencySales'>Frequency Sales</Link>
            </li>
            <li>
              <Link to = '/dashboard/transactions'>Transactions</Link>
            </li>
          </ul>
        </div>
        <Switch >
          <Route path='/dashboard/revenue'>
            <Revenue />
          </Route>
          <Route path = '/dashboard/sales'>
            <Sales />
          </Route>
          <Route path = '/dashboard/frequencySales'>
            <FrequencySales numbers={ dat}/>
          </Route>
          <Route path = '/dashboard/transactions'>
            <Transactions />
          </Route>
        </Switch>
      </Router>
    );
};

export default Dashboard;