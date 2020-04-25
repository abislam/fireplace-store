import { ADD_PRODUCT_CART } from './types';

export const addCart = () => {
	return(dispatch) => {
		console.log("Adding to cart function is running")
		dispatch({
			type: ADD_PRODUCT_CART
		})
	}
}
