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
import Stores from "./pages/Stores";
import LocAutoComp from "./components/LocAutoComp";

function App() {
	const [loggedIn, setLoggedIn] = useState(false);
	const [paths, setPath] = useState([]);

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
					<Route
						path="/"
						exact
						render={(props) => (
							<Home {...props} paths={paths} setPath={setPath} />
						)}
					/>
					<Route path="/LocAutoComp" component={LocAutoComp} />
					<Route path="/Order" component={Order} />
					<Route path="/Header" component={Header} />
					<Route path="/Cart" component={Cart} />
					<Route
						path="/Stores/:type"
						render={(props) => (
							<Stores
								{...props}
								paths={paths}
								setPath={setPath}
							/>
						)}
					/>
					<Route
						path="/:location"
						render={(props) => (
							<Home {...props} paths={paths} setPath={setPath} />
						)}
					/>
				</Switch>
			</UserAuthContext.Provider>
		</div>
	);
}

export default App;
