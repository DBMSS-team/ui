import React, { useState, Fragment } from "react";
import "../styles/Cart.css";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";

export default function Cart() {
	const [count, setCount] = useState([0, 0]);
	const cartItems = [
		{
			name: "Chicken Shawarma",
			price: "100/-",
			quantity: "2",
			type: "N",
		},
		{
			name: "Veg Roll",
			price: "200/-",
			quantity: "1",
			type: "V",
		},
	];

	return (
		<div className="cart">
			<div class="cart-title">
				<h2>Your Cart</h2>
				<h2 class="items">(2 Items)</h2>
			</div>
			<div class="cart-items">
				{cartItems.map((item) => (
					<div>
						<div class="cart-item">
							<div>
								{item.type === "V" ? (
									<img src="/Images/Veg.svg" />
								) : (
									<img src="/Images/NonVeg.svg" />
								)}
							</div>
							<div class="cart-item-name">{item.name}</div>
							<div class="quantity">
								<IconButton
									aria-label="delete"
									color="white"
									class="removebutton"
									onClick={() => {
										setCount([count[0] - 1, 0]);
									}}
								>
									<RemoveIcon />
								</IconButton>
								{count[0]}
								<IconButton
									aria-label="add"
									color="primary"
									class="addbutton"
									onClick={() => {
										setCount([count[0] + 1, 0]);
									}}
								>
									<AddIcon />
								</IconButton>
							</div>
							<div class="cart-item-price">
								{"₹" + item.price}
							</div>
						</div>
					</div>
				))}
				<hr className="cart-hr"></hr>
			</div>
			<div class="cart-item">
				<div class="cart-item-name-bold">Item Total</div>
				<div class="cart-item-price">₹175/-</div>
			</div>
			<div class="checkout">
				<Button
					class="button-checkout"
					variant="contained"
					color="primary"
					size="lg"
				>
					Proceed to Checkout
				</Button>
			</div>
		</div>
	);
}
