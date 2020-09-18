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
			<div className="OrderPage__home">
				<div className="search__bar">
					<div className="search__icon">icon:  </div>
					<div className="search__text"> search </div>
				</div>
				<div className="OrderPage__content">
					<Order className="order" />
					<Cart className="cart" />
				</div>
			</div>
		</div>
	);
}
