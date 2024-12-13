import dpsLogo from './assets/DPS.svg';
import './App.css';
import HomeCard from './components/HomeCard/HomeCard';

function App() {
	return (
		<main className="flex flex-col ">
			<div>
				<a href="https://www.digitalproductschool.io/" target="_blank">
					<img src={dpsLogo} className="logo" alt="DPS logo" />
				</a>
			</div>
			<HomeCard />
		</main>
	);
}

export default App;
