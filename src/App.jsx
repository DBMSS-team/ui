import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

import "./styles/App.css";

import { UserAuthContext } from "./contexts/UserAuthenticationContext";

import Order from "./components/Order";
import Login from "./components/login";
import SignUp from "./components/signup";
import Footer from './components/Footer';
import Home from "./components/Home";
import Search from "./components/Search";

function App() {
	const [loggedIn, setLoggedIn] = useState(false);

	return (
		<div className="App">
			<UserAuthContext.Provider value={{ loggedIn, setLoggedIn }}>
				<Switch>
					<Route
						path="/footer"
						render={(props) => (
							<UserAuthContext.Provider
								value={{ loggedIn, setLoggedIn }}
							>
								<Footer {...props} />
							</UserAuthContext.Provider>
						)}
					/>
					<Route
						path="/login"
						render={(props) => (
							<UserAuthContext.Provider
								value={{ loggedIn, setLoggedIn }}
							>
								<Login {...props} />
							</UserAuthContext.Provider>
						)}
					/>
					<Route path="/signup" component={SignUp} />
					<Route
						path="/order"
						render={(props) => (
							<UserAuthContext.Provider
								value={{ loggedIn, setLoggedIn }}
							>
								<Order {...props} />
							</UserAuthContext.Provider>
						)}
					/>
				</Switch>
			</UserAuthContext.Provider>
			<Switch>
				<Route path="/home" component={Home} />
				<Route path="/maps" component={Search} />
			</Switch>
		</div>
	);
}

export default App;
