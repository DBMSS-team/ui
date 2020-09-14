import React from "react";

import "../styles/Navbar.css";

export default function Navbar({ navlist, history }) {
	return (
		<div className="Navbar">
			<div className="Navbar__content">
				{navlist.map((nav, id) => {
					return (
						<span
							onClick={() => {
								history.go(navlist.length - id - 1);
							}}
						>
							{nav + " /"}
						</span>
					);
				})}
			</div>
		</div>
	);
}
