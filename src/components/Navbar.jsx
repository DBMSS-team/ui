import React from "react";
import { useHistory } from "react-router-dom";

import "../styles/Navbar.css";

export default function Navbar({ navList }) {
	const history = useHistory();
	return (
		<div className="Navbar">
			<div className="Navbar__content">
				{navList.map((nav, id) => {
					const offset = navList.length - id - 1;
					return (
						<span
							className={offset === 0 ? "" : "nav"}
							onClick={() => {
								if (offset) history.go(-offset);
							}}
						>
							{nav + " / "}
						</span>
					);
				})}
			</div>
		</div>
	);
}
