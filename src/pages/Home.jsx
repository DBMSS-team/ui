import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import "../styles/Home.css";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import SearchBar from "material-ui-search-bar";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import LinkUI from "@material-ui/core/Link";
import { Route, Redirect, Link } from "react-router-dom";
import Login from "../components/login";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LocAutoComp from "../components/LocAutoComp";

const cards = [
	"Groceries",
	"Food",
	"Medicines",
	"Pet Supplies",
	"Send Packages",
	"Meat",
	"Health",
	"Bike Pool",
];

function handleClick() {
	return <Login />;
}

export default function Album() {
	return (
		<div className="home__page">
			<Header />

			<div className="location__div">
				<div className="home__header_text">
					<h1>Many needs, one app</h1>
					<h3>
						Need groceries, food or pet supplies delivered? Get it
						Dun!
					</h3>
				</div>
				<LocAutoComp />
			</div>
			<main className="card__main">
				<div className="card__sub__main">
					<Container className="card__grid">
						<div class="home-title">What do you want?</div>
						<div>
							<hr></hr>
						</div>
						{/* End hero unit */}
						<Link to="/Store" style={{ textDecoration: "none" }}>
							<Grid container spacing={4}>
								{cards.map((card) => (
									<Grid item key={card} xs={12} sm={6} md={4}>
										<Card className="root">
											<div className="details">
												<CardContent className="content">
													<div class="card-image">
														<img src="/images/delivery.svg"></img>
													</div>
													<Typography
														component="h5"
														variant="h5"
														class="home-card-detail"
													>
														{card}
													</Typography>
												</CardContent>
												<div className="controls"></div>
											</div>
											<CardMedia
												className="cover"
												image="https://source.unsplash.com/random"
												title="{code}"
											/>
										</Card>
									</Grid>
								))}
							</Grid>
						</Link>
					</Container>
				</div>
			</main>
			<Footer />
		</div>
	);
}
