import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			"& > *": {
				display: "flex",
				"flex-direction": "column",
				margin: theme.spacing(1),
				width: "30ch",
			},
		},
	})
);

export default function SignUp() {
	const classes = useStyles();

	return (
		<Box>
			<form className={classes.root} noValidate autoComplete="off">
				<TextField
					id="email"
					type="email"
					label="Email"
					variant="outlined"
				/>
				<TextField
					id="password"
					type="password"
					label="Password"
					variant="outlined"
				/>
				<TextField
					id="confirm_password"
					type="password"
					label="Confirm Password"
					variant="outlined"
				/>
				<Button
					variant="contained"
					size="large"
					color="primary"
					type="submit"
				>
					SignUp
				</Button>
			</form>
		</Box>
	);
}
