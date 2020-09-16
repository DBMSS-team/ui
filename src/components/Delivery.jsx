import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../styles/NoDelivery.css";

export default function Deivery() {
	const history = useHistory();
	return (
		<div className="NoDelivery">
			<img className="Image" src="/Images/delivery.svg" />
			<span className="LineOne">We do not deliver here yet.</span>
			<span className="LineTwo">
				Dunzo services are not available at this location yet.
			</span>
			<span className="LineThree">Please update your location.</span>
			<button className="GoBack" onClick={() => history.push("/")}>
				Go Back to Home Page
			</button>
		</div>
	);
}
