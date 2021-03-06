import React, { useEffect, useState, useRef } from "react";
import Cart from "../components/Cart";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

import Order from "../components/Order";
import { useHistory } from "react-router-dom";
import { config } from "../config";
import "../styles/OrderPage.css";

export default function OrderPage(props) {
	const { navList, name, id } = props.location.state;
	const [clickedItem, setclickedItem] = useState();
	const [store, setStore] = useState([]);
	const [products, setProduct] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedItem, setSelectedItem] = useState(null);
	const [cartItems, setCartItems] = useState([]);
	const ref = useRef(null);

	useEffect(() => {
		ref.current.scrollIntoView();
		fetch(config.storesHost + "/store/" + id)
			.then((store) => {
				return store.json();
			})
			.then(async (data) => {
				setStore(data);
				const products = [];
				const temp = [];
				for (let i = 0; i < data.storeItems.length; i++) {
					try {
						let res = await fetch(
							config.productsHost +
							"/product/" +
							data.storeItems[i].productId
						);
						products.push({
							...(await res.json()),
							price: data.storeItems[i].price.$numberDecimal,
							quantity: 0,
							totalQuantity: data.storeItems[i].quantity,
						});
					} catch (error) {
						console.log(error);
					}
				}
				setProduct(products);//[...products,...products,...products,...products,...products,...products,...products,...products,...products,...products,...products,...products,...products,...products,...products,{"_id":"5f674040c0399cdb91cd0772","name":"Crispy Corn","subCategoryName":"Kitten Food","categoryName":"Food Delivery","createdAt":"2020-09-20T11:43:09.699Z","updatedAt":"2020-09-20T11:43:09.699Z","__v":0}]);
				if (products.length > 0)
					setclickedItem(products[0].subCategoryName);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	function handleChange(event) {
		setSearchTerm(event.target.value)
	}

	function handleItemSelect(value) {
		setclickedItem(value);
		setSearchTerm('');

	}

	function checkAndSetCart(item, addition) {
		const foundItem = cartItems.find((cartItem) => cartItem._id === item._id);

		if (foundItem) {
			addition ? foundItem.quantity++ : foundItem.quantity--;
			if (foundItem.quantity === 0) {
				const updatedItems = cartItems.filter((cartItem) => cartItem._id !== foundItem._id);
				setCartItems(updatedItems);
			} else {
				const updatedItems = cartItems.map((cartItem) => cartItem._id === foundItem._id ? foundItem : { ...cartItem });
				setCartItems(updatedItems)
			}

		} else {
			setCartItems([{
				...item,
				type: "N",
			}, ...cartItems])
		}
	}

	function checkAndUpdateProduct(item, addition) {
		if (item.quantity !== item.totalQuantity || !addition) checkAndSetCart(item, addition);
		const newProducts = products.map((product) => product._id === item._id ? { ...product, quantity: addition ? (product.quantity !== product.totalQuantity ? product.quantity + 1 : product.quantity) : product.quantity - 1 } : { ...product });
		setProduct(newProducts)
	}

	let filteredProducts = searchTerm.length > 0 ? products.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase())) : [];

	return (
		<div className="OrderPage" ref={ref}>
			<Header />
			<Navbar navList={[...navList, name]} />
			<div className="OrderPage__home">
				<div className="search__bar__container">
					<div className="search__bar">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="18"
							height="18"
							viewBox="0 0 24 24"
						>
							<path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z" />
						</svg>

						<input type="text" placeholder="search for an item" onChange={handleChange} />
					</div>
					<div className={filteredProducts.length > 0 ? "auto__complete" : "auto__complete__hidden"}>{searchTerm.length > 0 ? filteredProducts.map((product) => <div onClick={() => handleItemSelect(product.subCategoryName)} className="auto__complete__content"> {product.name}</div>) : null}</div>
				</div>

				<div className="OrderPage__content">
					<Order selectedItem={selectedItem} products={products} clickedItem={clickedItem} setclickedItem={setclickedItem} setProducts={setProduct} checkAndSetCart={checkAndSetCart} />
					<div className="orderpage__cart"><Cart cartItems={cartItems} checkAndUpdateProduct={checkAndUpdateProduct} /></div>
				</div>
			</div>
		</div>
	);
}
