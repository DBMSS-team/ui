import React from 'react'

import '../styles/Navbar.css'

export default function Navbar({ navlist }) {
	return (
		<div className="Navbar">
			<div className="Navbar__content">
				{navlist.map((nav) => {
					return (
						<span>
							<span> / </span>
							<a href="/Order">{nav.name}</a>
						</span>
					);
				})}
			</div>
		</div>
	);
}
