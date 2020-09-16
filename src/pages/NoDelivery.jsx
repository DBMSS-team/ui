import React from "react";
import "../styles/Home.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Delivery from "../components/Delivery";

export default function NoDelivery(props) {
	return (
		<div className="home__page">
			<Header />
			<main >
					<Delivery />
			</main>
			<Footer />
		</div>
	);
}
