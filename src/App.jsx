import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

import "./styles/App.css";

import { UserAuthContext } from "./contexts/UserAuthenticationContext";

import Order from "./components/Order";
import Login from "./components/login";
import SignUp from "./components/signup";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Home from "./pages/Home";
import LocAutoComp from "./components/LocAutoComp";

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
					<Route path="/" exact component={Home} />
					<Route path="/LocAutoComp" component={LocAutoComp} />
					<Route path="/Order" component={Order} />
					<Route path="/Header" component={Header} />
					<Route path="/Cart" component={Cart} />
					<Route path="/:location" component={Home} />
				</Switch>
			</UserAuthContext.Provider>
		</div>
	);
}

export default App;
