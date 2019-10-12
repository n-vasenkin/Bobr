import React, { Component } from 'react';

/* Redux */
import connect from 'react-redux/es/connect/connect';

/* Module */
const LineChart = require('react-chartjs-2').Bar;

class Bar extends Component {
	state = {
		chartOptions: {
			elements: { line: { tension: 0 } },
			legend: { position: 'none' },
			maintainAspectRatio: false,
			scales: {
				yAxes: [
					{
						ticks: {
							beginAtZero: false,
							fontColor: '#8798AD',
							fontSize: 14,
						},
					},
				],
				xAxes: [
					{
						ticks: {
							beginAtZero: false,
							fontColor: '#8798AD',
							fontSize: 14,
						},
					},
				],
			},
		},
	};

	render() {
		const { chartOptions } = this.state;
		const data = {
			labels: ['1', '1', '1', '1', '1'],
			datasets: [
				{
					borderColor: '#3091F1',
					backgroundColor: 'rgba(136, 136, 136, 0.3)',
					label: ['1', '1', '1', '1', '1'],
					data: ['1', '1', '1', '1', '1'],
				},
			],
		};

		return (
			<div className="analytics__graph">
				<LineChart data={data} options={chartOptions} width={600} height={400} />
			</div>
		);
	}
}

export default connect('')(Bar);
