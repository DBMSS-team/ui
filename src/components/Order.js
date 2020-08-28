import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import Button from "@material-ui/core/Button";

import { UserAuthContext } from "../contexts/UserAuthenticationContext";

export default function Order() {
	const { loggedIn, setLoggedIn } = useContext(UserAuthContext);
	if (loggedIn)
		return (
			<div>
				<div>Orders</div>
				<Button
					variant="contained"
					color="primary"
					onClick={() => setLoggedIn(false)}
				>
					Logout
				</Button>
			</div>
		);
	else return <Redirect to="/login" />;
}
