import React, { useState, useEffect } from 'react'
import {
	Chart as ChartJS,

	BarElement,

} from 'chart.js';
import { API, BASE_URL, PROXY_URL } from '../services/consts';

import { Bar } from 'react-chartjs-2';

ChartJS.register(
	BarElement,
);


const BarChart = () => {
	const [chart, setChart] = useState({})



	useEffect(() => {
		const fetchCoins = async () => {
			await fetch(`${PROXY_URL}${BASE_URL}`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					'x-access-token': `${API}`,
					'Access-Control-Allow-Origin': "*"
				}
			})
				.then((response) => {
					if (response.ok) {
						response.json().then((json) => {
							console.log(json.data);
							setChart(json.data)
						});
					}
				}).catch((error) => {
					console.log(error);
				});
		};
		fetchCoins()
	}, [BASE_URL, PROXY_URL, API])

	console.log("chart", chart);
	var data = {
		labels: chart?.coins?.map(x => x.name),
		datasets: [{
			label: `${chart?.coins?.length} Coins Available`,
			data: chart?.coins?.map(x => x.price),
			backgroundColor: [
				'rgba(255, 99, 132)',
				'rgba(54, 162, 235)',
				'rgba(255, 206, 86)',
				'rgba(75, 192, 192)',
				'rgba(153, 102, 255)',
				'rgba(255, 159, 64)'
			],
			borderColor: [
				'rgba(255, 99, 132)',
				'rgba(54, 162, 235)',
				'rgba(255, 206, 86)',
				'rgba(75, 192, 192)',
				'rgba(153, 102, 255)',
				'rgba(255, 159, 64)'
			],
			borderWidth: 1
		}]
	};

	var options = {
		maintainAspectRatio: false,
		scales: {
		},
		legend: {
			labels: {
				fontSize: 25,
			},
		},
	}

	return (
		<div>
			<Bar
				data={data}
				height={400}
				options={options}

			/>
		</div>
	)
}

export default BarChart
