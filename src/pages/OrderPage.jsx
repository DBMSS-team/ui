import React from "react";
import Cart from "../components/Cart";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

import Order from "../components/Order";

import "../styles/OrderPage.css";

export default function OrderPage(props) {
	const { navList, name } = props.location.state;
	return (
		<div className="OrderPage">
			<Header />
			<Navbar navList={[...navList, name]} />
			<div className="OrderPage__content__wrapper">
				<div className="OrderPage__content">
					<Order className="order" />
					<Cart className="cart" />
				</div>
			</div>
		</div>
	);
}
