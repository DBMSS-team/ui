import React, { useState } from "react";
import "../styles/Header.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import IconButton from "@material-ui/core/IconButton";
import { Redirect, Link, useHistory } from "react-router-dom";
import Script from "react-load-script";
import LocAutoComp from "../components/LocAutoComp";
import Popup from "reactjs-popup";
// import { Button } from "@material-ui/core";

export default function Header() {
	const history = useHistory();

	function getLocation() {
		var startPos;
		var geoSuccess = function (position) {
			startPos = position;
			const a = startPos.coords.latitude;
			const b = startPos.coords.longitude;
			console.log(a + " " + b);
		};
		navigator.geolocation.getCurrentPosition(geoSuccess);
	}

	return (
		<div className="header">
			<div className="header__content">
				<div className="title__location">
					<h1 className="title" onClick={() => history.push("/")}>
						BENZO!
					</h1>
					<div
						className="current__location"
						onClick={() => getLocation()}
					>
						<div className="modalWrapper">
							<Popup
								trigger={
									<div>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="20"
											height="20"
											viewBox="0 0 24 24"
										>
											<path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
										</svg>
										<span> Current Location</span>
									</div>
								}
								position="right center"
							>
								<div className="">
									<LocAutoComp />
								</div>
							</Popup>
						</div>
					</div>
				</div>
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
