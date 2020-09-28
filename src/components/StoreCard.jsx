import React from "react";
import "../styles/StoreCard.css";

export default function StoreCard({
	name,
	id,
	type,
	distance,
	location,
	time,
	handleStoreClick,
}) {
	return (
		<div className="storecard" onClick={() => handleStoreClick(name,id)}>
			<div className="storecard__left">
				<img
					src="/assets/images/empire.png"
					alt="empire"
					height="100%"
					width="150px"
				/>
			</div>
			<div className="storecard__right">
				<div className="restaurant__name">{name}</div>
				<div className="restaurant__type">{type}</div>
				<div className="restaurant__details">
					<div className="restaurant__distance">{distance}</div>
					<div className="restaurant__location">{location}</div>
				</div>
				<div className="restaurant__time">{time}</div>
			</div>
		</div>
	);
}
