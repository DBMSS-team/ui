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
				<div className="search__bar__container">
					<div className="search__bar">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="18"
							height="18"
							viewBox="0 0 24 24"
						>
							<path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z" />
						</svg>

						<input type="text" placeholder="search for an item" />
					</div>
				</div>

				<div className="OrderPage__content">
					<Order className="order" />
					<Cart className="cart" />
				</div>
			</div>
		</div>
	);
}
