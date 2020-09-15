import React, { useState } from "react";
import axios from "axios";
import { config } from "../config";
import SearchBar from "material-ui-search-bar";
import Script from "react-load-script";
import "../styles/LocAutoComp.css";

export default function LocAutoComp({ history, handleClick }) {
	const [state, setState] = useState({
		city: "",
		query: "",
	});
	const gmapsUrl = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GMAPS_API_KEY}&libraries=places`;

	function handleScriptLoad() {
		// Declare Options For Autocomplete
		const options = {
			types: [],
		}; // To disable any eslint 'google not defined' errors

		// Initialize Google Autocomplete
		/*global google*/ const autocomplete = new google.maps.places.Autocomplete(
			document.getElementById("autocomplete"),
			options
		);

		// Avoid paying for data that you don't need by restricting the set of
		// place fields that are returned to just the address components and formatted
		// address.
		autocomplete.setFields([
			"address_components",
			"formatted_address",
			"geometry",
			"icon",
			"name",
		]);

		// Fire Event when a suggested name is selected
		autocomplete.addListener("place_changed", () => {
			// Extract City From Address Object
			const addressObject = autocomplete.getPlace();
			const address = addressObject.address_components;

			// Check if address is valid
			if (address) {
				// Set State
				setState({
					city: address[0].long_name,
					query: addressObject.formatted_address,
				});
			}
			handleSubmit(addressObject);
		});
	}

	function handleSubmit(addressObject) {
		var payload = {
			latitude: addressObject.geometry.location.lat(),
			longitude: addressObject.geometry.location.lng(),
			place: addressObject.address_components[0].long_name,
		};
		axios
			.post(config.SERVER_URL + "/location", payload)
			.then(function (response) {
				if (response.status === 200) {
				} else {
				}
			})
			.catch(function (error) {});
	}

	return (
		<div className="LocAutoComp">
			<Script url={gmapsUrl} onLoad={handleScriptLoad} />
			<div className="Search__bar">
				<SearchBar
					className="Search__box"
					id="autocomplete"
					placeholder="Search for a location"
					hintText="Search City"
					value={state.query}
					onClick={handleClick}
				/>
				<button
					className="Search__button"
					onClick={() => {
						history.push(`/${state.city}`);
					}}
				>
					Proceed
				</button>
			</div>
		</div>
	);
}
