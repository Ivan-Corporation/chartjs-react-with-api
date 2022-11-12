import { useState } from 'react';
import './App.css';
import BarChart from './Charts/BarChart';
import DoughnutChart from './Charts/DoughnutChart';
import LineChart from './Charts/LineChart';
import PieChart from './Charts/PieChart';
import './styles/button.css'

function App() {

	const [active, setActive] = useState(0);
	const handleClick = (e) => {
		const index = parseInt(e.target.id, 0);
		if (index !== active) {
			setActive(index);
		}
	};

	return (
		<div className="App">

			<div className="buttons">
				<button className='button' onClick={handleClick} active={active === 0} id={0}>
					BarChart
				</button>
				<button className='button' onClick={handleClick} active={active === 1} id={1}>
					DoughnutChart
				</button>
				<button className='button' onClick={handleClick} active={active === 2} id={2}>
					LineChart
				</button>
				<button className='button' onClick={handleClick} active={active === 3} id={3}>
					PieChart
				</button>

			</div>


			<div className='charts'>

				{active === 0 ?
					<div><BarChart /></div>
					: ""}
				{active === 1 ?
					<div><DoughnutChart /></div>
					: ""}
				{active === 2 ?
					<div><LineChart /></div>
					: ""}
				{active === 3 ?
					<div><PieChart /></div>
					: ""}

			</div>
			{/* <BarChart /> */}
			{/* <DoughnutChart /> */}
			{/* <LineChart /> */}
			{/* <PieChart /> */}
		</div>
	);
}

export default App;
