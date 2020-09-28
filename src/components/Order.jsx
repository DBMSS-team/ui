import React from "react";

import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import IconButton from "@material-ui/core/IconButton";

import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { green } from "@material-ui/core/colors";

import "../styles/Order.css";

const theme = createMuiTheme({
	palette: {
		primary: green,
	},
});


export default function Order({
	selectedItem,
	setclickedItem,
	products,
	clickedItem,
	setProducts,
}) {

	const searchResults  = selectedItem ? ["Search Results"] : []; 

	return (
		<div className="Order__home">
			<div className="Order__categories">
				{[
					...searchResults,
					...new Set(
						products.map((product) => product.subCategoryName)
					),
				].map((subCategoryName) => (
					<div
						onClick={() => setclickedItem(subCategoryName)}
						className={
							clickedItem === subCategoryName
								? "Order__category Order__category-selected"
								: "Order__category"
						}
					>
						{subCategoryName}
					</div>
				))}
			</div>
			<div className="Order__items">
				<div className="Order__item__category">{clickedItem}</div>
				{products
					.filter((item) => {
						return item.subCategoryName === clickedItem
					})
					.map((item) => (
						<div className="Order__item__details">
							<div className="Order__item__line">
								<div className="Order__item__line_left">
									{item.type ? (
										<div className="Order__item__type">
											{item.type === "V" ? (
												<img src="/Images/Veg.svg" />
											) : (
												<img src="/Images/NonVeg.svg" />
											)}
										</div>
									) : null}

									<div className="Order__item__name">
										{item.name}
									</div>
								</div>

								<div class="quantity">
									<IconButton
										aria-label="delete"
										color="white"
										onClick={() => {
											setProducts(() => {
												return products.map((i) => {
													if (
														i.id === item.id &&
														i.quantity > 0
													)
														i.quantity--;
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
											aria-label="add"
											variant="contained"
											onClick={() => {
												setProducts(() => {
													return products.map((i) => {
														if (i.id == item.id)
															i.quantity++;
														return i;
													});
												});
											}}
										>
											<AddIcon />
										</IconButton>
									</ThemeProvider>
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
