import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import StoreCard from "../components/StoreCard";

import "../styles/Stores.css";

export default function Store({ match }) {
	const storeType = match.params.type;
	const navlist = [{ name: "home" }, { name: "delhi" }, { name: storeType }];

	const stores = [
		{
			name: "Yumlane Pizza",
			type: "",
			distance: "25km",
			location: "Italian, Dessert Halasuru",
			time: "20 min",
		},
		{
			name: "Yumlane Pizza",
			type: "",
			distance: "25km",
			location: "Italian, Dessert Halasuru",
			time: "20 min",
		},
		{
			name: "Yumlane Pizza",
			type: "",
			distance: "25km",
			location: "Italian, Dessert Halasuru",
			time: "20 min",
		},
		{
			name: "Yumlane Pizza",
			type: "",
			distance: "25km",
			location: "Italian, Dessert Halasuru",
			time: "20 min",
		},
		{
			name: "Yumlane Pizza",
			type: "Fast Food",
			distance: "25km",
			location: "Italian, Dessert Halasuru",
			time: "20 min",
		},
		{
			name: "Yumlane Pizza",
			type: "",
			distance: "25km",
			location: "Italian, Dessert Halasuru",
			time: "20 min",
		},
	];

	return (
		<div className="Stores">
			<Header />
			<Navbar navlist={navlist} />
			<div className="Stores__content">
				<div className="Stores__content_body">
					<div className="Stores__count">
						<div className="Stores__count__left">
							<img
								alt="count"
								src="/assets/images/empire.png"
								width="150px"
								height="100%"
							/>
						</div>
						<div className="Stores__count__right">
							<h2>Order from Restaurants</h2>
							<span>192 Restaurants</span>
						</div>
					</div>
					<div className="Stores__list">
						{stores.map((store) => (
							<StoreCard
								name={store.name}
								type={store.type}
								distance={store.distance}
								time={store.time}
								location={store.location}
							/>
						))}
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
