import React, { useState, Fragment, useEffect } from "react";
import "../styles/Cart.css";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import IconButton from "@material-ui/core/IconButton";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import { green } from "@material-ui/core/colors";

const theme = createMuiTheme({
	palette: {
		primary: green,
	},
});

// const cartItems = [
// 	{
// 		id: 1,
// 		name: "Chicken Shawarma",
// 		price: "100/-",
// 		quantity: "2",
// 		type: "N",
// 	},
// 	{
// 		id: 2,
// 		name: "Veg Roll",
// 		price: "200/-",
// 		quantity: "1",
// 		type: "V",
// 	},
// ];
export default function Cart({ cartItems, checkAndUpdateProduct }) {
	const history = useHistory();
	const [items, setItems] = useState(cartItems);

	useEffect(() => {
		setItems(cartItems.map((cartItem) => cartItem))
	}, [cartItems])

	return (
		<div className="cart">
			<div class="cart-title">
				<h2>Your Cart</h2> 
				&nbsp;&nbsp;
				<h2 class="items">({items.length} Items)</h2>

			</div>
			<div class="cart-items">
				{items.map((item, idx) => {
					return (
						<div>
							<div class="cart-item">
								{/* <div>
									{item.type === "V" ? (
										<img src="/Images/Veg.svg" />
									) : (
										<img src="/Images/NonVeg.svg" />
									)}
								</div> */}
								<div class="cart-item-name">{item.name}</div>
								<div class="quantity">
									<IconButton
										aria-label="delete"
										color="white"
										variant="contained"
										onClick={() => {
											setItems(() => {
												return items.map((i) => {
													if (
														i._id === item._id &&
														i.quantity > 0
													) {
														if (checkAndUpdateProduct) checkAndUpdateProduct(item,false);
															else i.quantity--;
													}
													return i;
												});
											});
										}}
									>
										<RemoveIcon />
									</IconButton>
									{item.quantity}
									<ThemeProvider theme={theme}>
										<IconButton
											color="primary"
											variant="contained"
											aria-label="add"
											onClick={() => {
												setItems(() => {
													return items.map((i) => {
														if (
															i._id === item._id
														) {
															if (checkAndUpdateProduct) checkAndUpdateProduct(item,true);
															else i.quantity++;
															
														}
														return i;
													});
												});
											}}
										>
											<AddIcon />
										</IconButton>
									</ThemeProvider>
								</div>
								<div class="cart-item-price">
									{"₹" +
										(item.price * item.quantity).toFixed(2)}
								</div>
							</div>
						</div>
					);
				})}
				<hr className="cart-hr"></hr>
			</div>
			<div class="cart-item">
				<div class="cart-item-name-bold" hidden={items.length === 0}>
					Item Total
				</div>
				<div class="cart-item-price" hidden={items.length === 0}>
					{"₹" + items.reduce((totalPrice, item) => {
						return totalPrice + item.price * item.quantity;
					}, 0)}
					/-
				</div>
			</div>
			<div hidden={items.length === 0}>
				<ThemeProvider theme={theme}>
					<Button
						class="button-checkout"
						variant="contained"
						color="primary"
						size="lg"
						disableRipple
						onClick={() => {
							history.push({
								pathname:"/payment",
								state:{items},
							})
						}}
					>
						Proceed to Checkout
					</Button>
				</ThemeProvider>
			</div>
		</div>
	);
}
