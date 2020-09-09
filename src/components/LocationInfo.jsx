import React from 'react'

import "../styles/LocationInfo.css";

export default function LocationInfo({location, info}) {
	return (
		<div className="LocationInfo">
			<div className="LocationInfo__content">
				<h1>
					Welcome to{" "}
					<span className="LocationInfo__name">{location}</span>
				</h1>
				<p>{info}</p>
			</div>
		</div>
	);
}
