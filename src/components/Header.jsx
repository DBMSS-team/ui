import React, { useState } from "react";
import "../styles/Header.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import IconButton from "@material-ui/core/IconButton";
import { Redirect, Link } from "react-router-dom";
//import { Button } from "@material-ui/core";

export default function Header() {
  const [cartClick, setCartClick] = useState(false);
  const [loginClick, setLoginClick] = useState(false);

  function handleCart(event) {
    event.preventDefault();
    setCartClick(true);
  }
  if (cartClick === true) return <Redirect to="/cart" />;

  function handleSignIn(event) {
    event.preventDefault();
    setLoginClick(true);
  }
  if (loginClick === true) return <Redirect to="/login" />;

  return (
		<div className="header">
			<div className="header__content">
				<h1 className="title">Benzo!</h1>
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