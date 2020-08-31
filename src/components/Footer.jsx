import React from "react";

import '../styles/Footer.css';

export default function Footer({ data }) {
	return (
		<div className="Footer">
			<div className="Footer__top">
				<h3>You can’t stop time, but you can save it!</h3>

				<p>
					Living in the city, there is never enough time to shop for
					groceries, pick-up supplies, grab food and wade through
					traffic on the way back home. How about we take care of all
					of the above for you? What if we can give you all that time
					back? Send packages across the city and get everything from
					food, groceries, medicines and pet supplies delivered right
					to your doorstep. From any store to your door, just make a
					list and we’ll make it disappear. Just Dunzo It!
				</p>
			</div>
			<hr></hr>
			<div className="Footer__middle">
				<h3>Services we offer</h3>
				<div>
					Send Packages in Bangalore|Send Packages in Pune|Send
					Packages in Gurgaon|Send Packages in Hyderabad|Send Packages
					in New Delhi|Send Packages in Chennai
				</div>
			</div>
			<hr></hr>
			<div className="Footer__bottom">
				<div className="Footer__bottom__logo">Logo</div>
				<div className="Footer__bottom__dunzo">
					<div>About</div>
					<div>Jobs</div>
					<div>Content</div>
					<div>T&C</div>
				</div>
				<div className="Footer__bottom__service">
					<div>About</div>
					<div>Jobs</div>
					<div>Content</div>
					<div>T&C</div>
					<div>About</div>
					<div>Jobs</div>
				</div>
				<div className="Footer__bottom__getin">
					<div>About</div>
					<div>Jobs</div>
					<div>Content</div>
					<div>T&C</div>
					<div>About</div>
					<div>Jobs</div>
					<div>Content</div>
					<div>T&C</div>
				</div>
			</div>
		</div>
	);
}
