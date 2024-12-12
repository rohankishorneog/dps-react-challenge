import dpsLogo from './assets/DPS.svg';
import './App.css';
import HomeCard from './components/HomeCard/HomeCard';

function App() {
	return (
		<>
			<div>
				<a href="https://www.digitalproductschool.io/" target="_blank">
					<img src={dpsLogo} className="logo" alt="DPS logo" />
				</a>
			</div>
			<div className="home-card">
				<HomeCard />
			</div>
		</>
	);
}

export default App;
