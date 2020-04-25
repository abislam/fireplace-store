import { ADD_PRODUCT_CART, GET_NUMBERS_CART } from '../actions/types';

const initialState = {
	cartNumbers: 0,
	cartTotalCost: 0, 
	cartProducts: {
		shoe1: {
			name: "Shoe 1",
			price: 60,
			quantity: 0,
			inCart: false
		},
		shoe2: {
			name: "Shoe 2",
			price: 360,
			quantity: 0,
			inCart: false
		},
		shoe3: {
			name: "Shoe 3",
			price: 260,
			quantity: 0,
			inCart: false
		},
		shoe4: {
			name: "Shoe 4",
			price: 300,
			quantity: 0,
			inCart: false
		},
		shoe5: {
			name: "Shoe 5",
			price: 40,
			quantity: 0,
			inCart: false
		},
		shoe6: {
			name: "Shoe 6",
			price: 120,
			quantity: 0,
			inCart: false
		},
		shoe7: {
			name: "Shoe 7",
			price: 30,
			quantity: 0,
			inCart: false
		},
		shoe8: {
			name: "Shoe 8",
			price: 80,
			quantity: 0,
			inCart: false
		},
		shoe9: {
			name: "Shoe 9",
			price: 600,
			quantity: 0,
			inCart: false
		}
	}
	
}

export default (state = initialState, action) => {
	switch(action.type) {
		case ADD_PRODUCT_CART:
			let addQuantity = { ...state.cartProducts[action.payload]}
			
			addQuantity.quantity += 1
			addQuantity.inCart = true
			console.log(addQuantity)
			return {
				...state,
				cartNumbers: state.cartNumbers + 1,
				cartTotalCost: state.cartTotalCost + state.cartProducts[action.payload].price,
				cartProducts: {
					...state.cartProducts,
					[action.payload]: addQuantity
				}
			}
		case GET_NUMBERS_CART:
			return {
				...state
			}
		default:
			return state;
	}
}
