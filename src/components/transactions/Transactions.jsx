import React from 'react';
import { Bar } from 'react-chartjs-2';
import dat from '../../data/data'
import './transactions.css'

const data = {
  labels: ['Dec Week 1','Dec Week 2', 'Dec Week 3', 'Dec Week 4'],
  datasets: [
    {
      label: 'Number of transactions',
      backgroundColor: 'rgba(100,200,200,0.2)',
      borderColor: 'rgba(255,50,50,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(45,45,45,1)',
      data: [dat.salesByWeek.week01,dat.salesByWeek.week02, dat.salesByWeek.week03, dat.salesByWeek.week04 ]
    }
  ]
};

const Transactions = () =>{
  return (
      <div className = 'transactions'>
        <h1 className = 'title'>Number of Transactions in December 2020</h1>
      <div className = 'bar'>
        <Bar
          data={data}
          options={{
            animationEnabled: true,
            maintainAspectRatio: true
          }}
        />
      </div>
      </div>
    );
};

export default Transactions;