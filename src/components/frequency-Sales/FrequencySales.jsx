import React, { Component } from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';
import dat from '../../data/data'
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class BubbleChart extends Component {
  constructor(props) {
    super(); 
  }
	render() {
		const options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "light2", // "light1", "light2", "dark1", "dark2"
			title:{
				text: "Number of Visitors and Purchased Date",
			fontSize: 26
			},
			axisX: {
				title: "Purchase Date"
			},
			axisY: {
        title: "Number of Visitors",
        	// logarithmic: true
			},
			data: [{
				type: "bubble",
				indexLabel: "${z}",
				toolTipContent: "<b>December {label} </b><br>Number of Visitors: {y}<br> Total Sales: '$'{z}",
        dataPoints: 
          dat.xyzDayVisAmt.map(el => {
              return({label: el.day, x: el.day , y: el.visitors, z: Math.round(el.amount)})
          }),
			}]
		}
		
		return (
		<div>
			<CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}

export default BubbleChart;