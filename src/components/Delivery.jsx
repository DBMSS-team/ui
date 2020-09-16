import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../styles/NoDelivery.css";

export default function Deivery() {
	const history = useHistory();
	return (
		<div className="NoDelivery">
			<img className="Image" src='/Images/delivery.svg' />
			<span className="LineOne">
				<h3> We do not deliver here yet.</h3>
			</span>
			<span className="LineTwo">
				<h3>
					Dunzo services are not available at this location yet.
					Please update your location.
				</h3>
			</span>
			<button className="GoBack" onClick={() => history.push("/")}>
				Go Back to Home
			</button>
		</div>
	);
}
