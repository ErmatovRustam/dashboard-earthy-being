import React, { useState, useEffect } from 'react'
import { BarChart } from 'react-chartjs-2';
import { PieChart } from 'react-minimal-pie-chart';
import dat from '../../data/data'
import './income.css'

export default function Dashboard() {
    return(
        <div className='income'>
                <PieChart style={{ height: '400px', top: 20 }} 
                data={[
                    { title: 'Received', value: dat.total.sumReceived, color: '#00ff00', filltext: 'A'},
                    { title: 'Cancelled', value: dat.total.sumCancelled, color: '#FF0000' },
                    { title: 'Pending', value: dat.total.sumPending, color: '#FFA500'},
                 ]}
            />;  
            <h3>Cancelled :  { dat.total.sumCancelled}</h3>
            <h3>Received :  { dat.total.sumReceived}</h3>
            <h3>Pending :  { dat.total.sumPending}</h3>
       </div>
   )      
}



// how to import charts each one seperatelly or from chartjs
// styling with css or as paramentr
//is Chart a component ?