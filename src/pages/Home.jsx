import React, { useEffect } from "react";
import "../styles/Home.css";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LocAutoComp from "../components/LocAutoComp";
import LocationInfo from "../components/LocationInfo";
import Navbar from "../components/Navbar";
import { useHistory } from "react-router-dom";

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

// function scrollUp() {
// 	useEffect(() => {
// 		window.scrollTo(0, 0);
// 	}, [1]);
// }

export default function Home(props) {
	const location = props.match.params.location;
	const history = useHistory();
	const navList = location ? ["Home", location] : ["Home"];
	let noLocationClick = location ? false : true;

	const info =
		"Why step out when you can get everything delivered home with the tap of a button? New Delhi's favourite delivery app gets you Food, Grocery, Medicine, Pet Supplies, Fruits & Vegetables, Meat & Fish, Health & Wellness, Gifts and Send Packages from one end of the city to the other. From your local kirana stores to your favourite brands, grocery shopping to your forgotten charger, we are always on the move for you. Why worry about your chores, when you can get it all Dun!";

	return (
		<div className="home__page">
			<Header />
			{location ? (
				<>
					<Navbar navList={navList} />
					<LocationInfo location={location} info={info} />
				</>
			) : (
				<div className="location__div">
					<div className="home__header_text">
						<h1>Many needs, one app</h1>
						<h3>
							Need groceries, food or pet supplies delivered? Get
							it Dun!
						</h3>
					</div>
					<LocAutoComp history={history} />
					{noLocationClick ? <>No location selected</> : <></>}
				</div>
			)}
			<main className="card__main">
				<div className="card__sub__main">
					<Container className="card__grid">
						<div class="home-title">What do you want?</div>
						<div>
							<hr></hr>
						</div>
						{/* End hero unit */}

						<Grid container spacing={4}>
							{cards.map((card) => (
								<Grid
									item
									key={card}
									xs={12}
									sm={6}
									md={4}
									onClick={() => {
										if (navList.length > 1) {
											history.push({
												pathname: `/Stores/${card
													.trim()
													.toLowerCase()
													.replace(" ", "-")}`,
												state: {
													navList,
													card,
												},
											});
										} else {
											window.scrollTo(0, 0);
											// scrollUp();
										}
									}}
								>
									<Card className="root">
										<div className="details">
											<CardContent className="content">
												<div class="card-image">
													<img
														alt="delivery"
														src="/images/delivery.svg"
													></img>
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
					</Container>
				</div>
			</main>
			<Footer />
		</div>
	);
}
