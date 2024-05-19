import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ReactComponent as Logo } from './logo.svg';
import Layout from './layout';
import Home from './pages/Home';
import Home2 from './pages/Home2';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="/" element={<Home />} />
					<Route path="/home2" element={<Home2 />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
