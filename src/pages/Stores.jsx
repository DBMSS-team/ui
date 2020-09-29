import React, { useState, useEffect, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import StoreCard from "../components/StoreCard";
import { config } from "../config";

import "../styles/Stores.css";
import { useHistory } from "react-router-dom";
import NoDelivery from "./NoDelivery";

export default function Store(props) {
	const { navList, card } = props.location.state;
	const history = useHistory();
	const [stores, setStores] = useState(null);
	const ref = useRef(null);

	useEffect(() => {
		ref.current.scrollIntoView();
		fetch(config.storesHost + "/store")
		.then(stores => {
			console.log(stores);
			return stores.json() 
		})
		.then((data) => {
			console.log(card);
			setStores(data.filter((store)=> { return store.categoryName === card }));
			console.log(data);
		})
		.catch(err => {
			console.log(err);
		})
	},[]);

	function handleStoreClick(name,id) {
		navList.push(card);
		history.push({
			pathname: `/Order/${name.trim().toLowerCase().replace(" ", "-")}`,
			state: {
				navList,
				name,
				id,
			},
		});
	}

	return (
		<div className="Stores" ref={ref}>
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
						{stores && stores.length === 0 ? history.push(`/no-delivery`) : (
						stores == null ? <div>Loading...</div> : stores.map((store) => (
							<StoreCard
								name={store.name}
								id={store._id}
								type={store.categoryName}
								distance={store.distance}
								time={store.time}
								location={store.address.line1}
								handleStoreClick={handleStoreClick}
							/>
						)))}
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
