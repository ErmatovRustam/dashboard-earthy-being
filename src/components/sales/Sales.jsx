import React, {useState, useEffect} from 'react';
import { Line } from 'react-chartjs-2';
import './sales.css'
import dat from '../../data/data'

function LineGraph() {
    const [data, setData] = useState({});

    useEffect(() => {
        setData({
            labels: ['Dec Week#1', 'Dec Week#2', 'Dec Week#3', 'Dec Week#4'],
            datasets: [
              {
                label: 'Number of sales',
                fill: false,
                lineTension: 0.5,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgb(10,100,255, 0.9)',
                borderWidth: 4,
                data: [dat.salesByWeek.week01, dat.salesByWeek.week02, dat.salesByWeek.week03, dat.salesByWeek.week04]
              }
            ]
          });
    }, [])

    return (
        <div className = 'line'>
            <Line
                data={data}
                options={{
                    title:{
                    display:true,
                    text:'Trend of the Sales',
                    fontSize:20
                    },
                    legend:{
                    display:true,
                    position:'right'
                    }
            }}
        />
        </div>
    )
}

export default LineGraph;