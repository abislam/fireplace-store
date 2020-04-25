
import React, {Fragment} from 'react'
import { connect } from 'react-redux';
import { productQuantity } from '../actions/productQuantity'
import shoe1 from '../images/image1.jpg'
import shoe2 from '../images/image2.jpg'
import shoe3 from '../images/image3.jpg'
import shoe4 from '../images/image4.jpg'
import shoe5 from '../images/image5.jpg'
import shoe6 from '../images/image6.jpg'
import shoe7 from '../images/image7.jpg'
import shoe8 from '../images/image8.jpg'
import shoe9 from '../images/image9.jpg'

function Cart({cartProps, productQuantity}){
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

	//const productImages = [shoe1, shoe2, shoe3, shoe4, shoe5, shoe6, shoe7, shoe8, shoe9]
	const productImages = (product) => {
		if(product.tagName === 'shoe1'){
			return shoe1
		}else if(product.tagName === 'shoe2'){
			return shoe2
		}else if(product.tagName === 'shoe3'){
			return shoe3
		}else if(product.tagName === 'shoe4'){
			return shoe4
		}else if(product.tagName === 'shoe5'){
			return shoe5
		}else if(product.tagName === 'shoe6'){
			return shoe6
		}else if(product.tagName === 'shoe7'){
			return shoe7
		}else if(product.tagName === 'shoe8'){
			return shoe8
		}else if(product.tagName === 'shoe9'){
			return shoe9
		}
	}
	productsInCart = productsInCart.map( (product, idx) =>{
		console.log("My product is:");
		console.log(product);
		return(
			<Fragment key={idx}>
				<div className="product"><ion-icon name="close-circle"></ion-icon><img src={productImages(product)} />
					<span className="sm-hide">{product.name}</span>
				</div>
				<div className="price sm-hide">${product.price}</div>
				<div className="quantity">
					<ion-icon onClick={()=> productQuantity('decrease', product.tagName)} className="decrease" name="arrow-back-circle-outline"></ion-icon>
						<span>{product.quantity}</span>
					<ion-icon onClick={()=> productQuantity('increase', product.tagName)} className="increase" name="arrow-forward-circle-outline"></ion-icon>
				</div>
				<div className="total">${product.quantity * product.price}</div>
			</Fragment>
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
				<h4 className="cartTotalTitle">Cart Total</h4>
				<h4 className="cartTotal"> {cartProps.cartTotalCost} </h4>
			</div>
		</div>
	)
}

const mapStateToProps = state => ({
	cartProps: state.cartState
})

export default connect(mapStateToProps, { productQuantity })(Cart);
