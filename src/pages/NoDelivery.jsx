import React, { useRef, useEffect} from "react";
import "../styles/Home.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Delivery from "../components/Delivery";

export default function NoDelivery(props) {
	const ref = useRef(null);
	useEffect(() => {
		ref.current.scrollIntoView();
	}, [])
	return (
		<div className="home__page" ref={ref}>
			<Header />
			<main >
					<Delivery />
			</main>
			<Footer />
		</div>
	);
}
