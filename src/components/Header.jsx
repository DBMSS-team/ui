import React, { useState } from "react";
import "../styles/Header.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import IconButton from "@material-ui/core/IconButton";
import { Redirect, Link, useHistory } from "react-router-dom";
// import { Button } from "@material-ui/core";

export default function Header() {
	const history = useHistory();

	return (
		<div className="header">
			<div className="header__content">
				<h1 className="title" onClick={() => history.push("/")}>
					BENZO!
				</h1>
				<div className="header__controls">
					<IconButton
						className="header-cart"
						size="lg"
						onClick={() => history.push("/cart")}
					>
						<ShoppingCartIcon />
					</IconButton>
					<button
						className="header-button"
						onClick={() => history.push("/login")}
					>
						Sign In
					</button>
				</div>
			</div>
		</div>
	);
}
