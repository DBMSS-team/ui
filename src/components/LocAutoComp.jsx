import React, {
	useState
} from "react";
import axios from "axios";
import {
	config
} from "../config";
import SearchBar from 'material-ui-search-bar';
import Script from 'react-load-script';
import '../styles/LocAutoComp.css';

export default function LocAutoComp({
	data
}) {

	const [state, setState] = useState({
		city: '',
		query: '',
	});

	function handleScriptLoad() {
		// Declare Options For Autocomplete
		const options = {
			types: [],
		};

		// Initialize Google Autocomplete
		/*global google*/ // To disable any eslint 'google not defined' errors
		const autocomplete = new google.maps.places.Autocomplete(
			document.getElementById('autocomplete'),
			options,
		);

		// Avoid paying for data that you don't need by restricting the set of
		// place fields that are returned to just the address components and formatted
		// address.
		autocomplete.setFields(['address_components', 'formatted_address', "geometry", "icon", "name"]);

		// Fire Event when a suggested name is selected
		autocomplete.addListener('place_changed', () => {
			// Extract City From Address Object
			const addressObject = autocomplete.getPlace();
			const la = addressObject.geometry.location.lat();
			const lo = addressObject.geometry.location.lng();
			const address = addressObject.address_components;

			// Check if address is valid
			if (address) {
				// Set State
				setState({
					city: address[0].long_name,
					query: addressObject.formatted_address,
				});
			}
			handleSubmit(la)
		});
	}

	function handleSubmit(la) {
		var payload = {
			location: la
		};
		axios
			.post(config.SERVER_URL + "/location", payload)
			.then(function (response) {
				console.log(response);
				if (response.status === 200) {
					console.log("Success");
				} else {
					console.log("Error");
				}
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	return ( 
		<div className = "LocAutoComp">
		<Script url = "https://maps.googleapis.com/maps/api/js?key=&libraries=places" onLoad = {handleScriptLoad}/> 
		<div className = "Search__bar" >
		<SearchBar className = "Search__box"
		id = "autocomplete"
		placeholder = "Search for a location"
		hintText = "Search City"
		value = {
			state.query
		}
		/> 
		<button className = "Search__button" >
		Proceed 
		</button> 
		</div> 
		</div>
	);
}