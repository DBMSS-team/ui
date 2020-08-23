import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./components/Login";
import SignUp from "./components/SignUp";

import "./styles/App.css";

function App() {
	return (
		<div className="App">
			<Router>
				<Route path="/user/login" component={Login} />
				<Route path="/user/signup" component={SignUp} />
			</Router>
		</div>
	);
}

export default App;
