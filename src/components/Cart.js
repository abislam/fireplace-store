//42:27
import React from 'react'
import { connect } from 'react-redux';
import shoe1 from '../images/image1.jpg'
import shoe2 from '../images/image2.jpg'
import shoe3 from '../images/image3.jpg'
import shoe4 from '../images/image4.jpg'
import shoe5 from '../images/image5.jpg'
import shoe6 from '../images/image6.jpg'
import shoe7 from '../images/image7.jpg'
import shoe8 from '../images/image8.jpg'
import shoe9 from '../images/image9.jpg'

function Cart({cartProps}){
	console.log(cartProps)

	let productsInCart = [];

	Object.keys(cartProps.cartProducts).forEach( function(item) {
		console.log(item)
		console.log(cartProps.cartProducts[item].inCart)
		if(cartProps.cartProducts[item].inCart){
			productsInCart.push(cartProps.cartProducts[item])
		}
		console.log(productsInCart)
	})

	const productImages = [shoe1, shoe2, shoe3, shoe4, shoe5, shoe6, shoe7, shoe8, shoe9]

	productsInCart = productsInCart.map( (product, idx) =>{
		console.log("My product is:");
		console.log(product);
		return(
			<div>
				<div className="product"><ion-icon name="close-circle"></ion-icon><img src={productImages[idx]} />
					<span className="sm-hide">{product.name}</span>
				</div>
				<div className="price sm-hide">${product.price}</div>
				<div className="quantity">
					<ion-icon className="decrease" name="arrow-back-circle-outline"></ion-icon>
						<span>{product.quantity}</span>
					<ion-icon className="increase" name="arrow-forward-circle-outline"></ion-icon>
				</div>
				<div className="total">${product.quantity * product.price}</div>
			</div>
		)
	})

	return (
		<div className="container-products">
			<div className="product-header">
				<h5 className="product-title">PRODUCT</h5>
				<h5 className="price sm-hide">PRICE</h5>
				<h5 className="quantity">QUANTITY</h5>
				<h5 className="total">TOTAL</h5>
			</div>
			<div className="products">
				{ productsInCart }
			</div>
			<div className="cartTotalContainer">
				<h4 className="cartTotalTitle"> Cart Total</h4>
				<h4 className="cartTotal"> {cartProps.cartTotalCost} </h4>
			</div>
		</div>
	)
}

const mapStateToProps = state => ({
	cartProps: state.cartState
})

export default connect(mapStateToProps)(Cart);
