import React, { useState } from "react";

import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import IconButton from "@material-ui/core/IconButton";

import "../styles/Order.css";

export default function Order() {
	const [clickedItem, setclickedItem] = useState("Quick Bites");
	const listItems = [
		{
			name: "Quick Bites",
			items: [
				{ name: "Shawarma", type: "V", price: 32 },
				{ name: "Egg Omlett", type: "N", price: 33 },
			],
		},
		{
			name: "Starter",
			items: [
				{ name: "steew", type: "N", price: 2 },
				{ name: "Egg Omlett", type: "N", price: 33 },
			],
		},
		{
			name: "Main Course",
			items: [
				{ name: "adrs", type: "V", price: 52 },
				{ name: "Egg Omlett", type: "N", price: 33 },
			],
		},
		{
			name: "Combos",
			items: [
				{ name: "Shawarma", type: "V", price: 32 },
				{ name: "Egg Omlett", type: "N", price: 33 },
				{ name: "Shawarma", type: "V", price: 32 },
				{ name: "Shawarma", type: "V", price: 32 },
				{ name: "Shawarma", type: "V", price: 32 },
				{ name: "Shawarma", type: "V", price: 32 },
				{ name: "Egg Omlett", type: "N", price: 33 },
				{ name: "Shawarma", type: "V", price: 32 },
				{ name: "Shawarma", type: "V", price: 32 },
				{ name: "Shawarma", type: "V", price: 32 },
				{ name: "Shawarma", type: "V", price: 32 },
				{ name: "Egg Omlett", type: "N", price: 33 },
				{ name: "Shawarma", type: "V", price: 32 },
				{ name: "Shawarma", type: "V", price: 32 },
				{ name: "Shawarma", type: "V", price: 32 },
				{ name: "Shawarma", type: "V", price: 32 },
				{ name: "Egg Omlett", type: "N", price: 33 },
				{ name: "Shawarma", type: "V", price: 32 },
				{ name: "Shawarma", type: "V", price: 32 },
				{ name: "Shawarma", type: "V", price: 32 },
				{ name: "Shawarma", type: "V", price: 32 },
				{ name: "Egg Omlett", type: "N", price: 33 },
				{ name: "Shawarma", type: "V", price: 32 },
				{ name: "Shawarma", type: "V", price: 32 },
				{ name: "Shawarma", type: "V", price: 32 },
				{ name: "Shawarma", type: "V", price: 32 },
				{ name: "Egg Omlett", type: "N", price: 33 },
				{ name: "Shawarma", type: "V", price: 32 },
				{ name: "Shawarma", type: "V", price: 32 },
				{ name: "Shawarma", type: "V", price: 32 },
			],
		},
	];

	return (
		<div className="Order__home">
			<div className="Order__categories">
				{listItems.map((item) => (
					<div
						onClick={() => setclickedItem(item.name)}
						className={
							clickedItem === item.name
								? "Order__category Order__category-selected"
								: "Order__category"
						}
					>
						{item.name}
					</div>
				))}
			</div>
			<div className="Order__items">
				<div className="Order__item__category">{clickedItem}</div>
				{listItems
					.find((item) => item.name === clickedItem)
					.items.map((item) => (
						<div className="Order__item__details">
							<div className="Order__item__line">
								<div className="Order__item__line_left">
									<div className="Order__item__type">
										{item.type === "V" ? (
											<img src="/Images/Veg.svg" />
										) : (
											<img src="/Images/NonVeg.svg" />
										)}
									</div>
									<div className="Order__item__name">
										{item.name}
									</div>
								</div>

								<div class="quantity">
									<IconButton
										aria-label="delete"
										color="white"
										class="removebutton"
										onClick={() => {}}
									>
										<RemoveIcon />
									</IconButton>
									{item.quantity}
									<IconButton
										aria-label="add"
										color="primary"
										class="addbutton"
										onClick={() => {}}
									>
										<AddIcon />
									</IconButton>
								</div>
							</div>
							<div className="Order__item__price">
								{"₹ " + item.price}
							</div>
						</div>
					))}
			</div>
		</div>
	);
}
