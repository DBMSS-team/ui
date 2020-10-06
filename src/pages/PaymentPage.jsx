import { Card } from '@material-ui/core'
import React from 'react'
import Address from '../components/Address'
import Cart from '../components/Cart'
import Footer from '../components/Footer'
import Header from '../components/Header'

import '../styles/PaymentPage.css'

export default function PaymentPage(props) {
		const cartItems = props.location.state.items;
	return (
		<div className="PaymentPage">
			<Header />
			<div className="PaymentPage__content">
				<div className="PaymentPage__body">
					<div className="PaymentPage__left">
						<Address />
						<Address />
						<Address />
					</div>
					<div className="PaymentPage__right">
						<Cart cartItems={cartItems}/>
					</div>
				</div>
			</div>
		</div>
	);
}
