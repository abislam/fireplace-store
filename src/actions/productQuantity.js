import { INCREASE_QUANTITY, DECREASE_QUANTITY, REMOVE_FROM_CART } from './types';

export const productQuantity = (action, name) => {
	return (dispatch) => {
		console.log("Inside product quantity action")
		console.log("The action  is ", action)
		console.log("the product name is", name)

		dispatch({
			type: action === "increase" ? INCREASE_QUANTITY : DECREASE_QUANTITY,
			payload: name
		})
	}
}

export const removeFromCart = (name) => {
	return (dispatch) => {
		console.log("Inside removeFromCart function")	
		console.log("the product name is", name)

		dispatch({
			type: REMOVE_FROM_CART,
			payload: name
		})
	}

}
