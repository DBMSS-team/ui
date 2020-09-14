import React, { useState } from "react";
import "../styles/Header.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import IconButton from "@material-ui/core/IconButton";
import { Redirect, Link, useHistory } from "react-router-dom";
// import { Button } from "@material-ui/core";

export default function Header() {
	const history = useHistory();

	function handleCart(event) {
		history.push("/cart");
	}

	function handleTitle() {
		history.push("/");
	}

	//if (titleClick === true) return <Redirect to="/" />;

	function handleSignIn(event) {
		history.push("/login");
	}

	return (
		<div className="header">
			<div className="header__content">
				<h1 className="title" onClick={handleTitle}>
					BENZO!
				</h1>
				<div className="header__controls">
					<IconButton
						className="header-cart"
						size="lg"
						onClick={handleCart}
					>
						<ShoppingCartIcon />
					</IconButton>
					<button className="header-button" onClick={handleSignIn}>
						Sign In
					</button>
				</div>
			</div>
		</div>
	);
}
