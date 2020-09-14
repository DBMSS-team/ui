import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import StoreCard from "../components/StoreCard";

import "../styles/Stores.css";
import { useHistory } from "react-router-dom";

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

export default function Store(props) {
	const { navList, card } = props.location.state;
	const history = useHistory();

	function handleStoreClick(name) {
		history.push({
			pathname: `/Order/${name.trim().toLowerCase().replace(" ", "-")}`,
			state: {
				navList,
				card,
			},
		});
	}

	return (
		<div className="Stores">
			<Header />
			<Navbar navList={[...navList, card]} />
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
								handleStoreClick={handleStoreClick}
							/>
						))}
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
