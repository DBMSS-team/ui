import React from 'react';
import Login from './components/login';
import SignUp from './components/signup';
import { Route, Switch } from 'react-router-dom';
import './styles/App.css';

function App() {
	return (
		<div className="App">
			<Switch>
				<Route path="/login" component={Login} />
				<Route path="/signup" component={SignUp} />
			</Switch>
		</div>
	);
}

export default App;
