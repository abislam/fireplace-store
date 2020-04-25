import { ADD_PRODUCT_CART, GET_NUMBERS_CART, INCREASE_QUANTITY, DECREASE_QUANTITY } from '../actions/types';

const initialState = {
	cartNumbers: 0,
	cartTotalCost: 0, 
	cartProducts: {
		shoe1: {
			name: "Shoe 1",
			tagName: 'shoe1',
			price: 60,
			quantity: 0,
			inCart: false
		},
		shoe2: {
			name: "Shoe 2",
			tagName: 'shoe2',
			price: 360,
			quantity: 0,
			inCart: false
		},
		shoe3: {
			name: "Shoe 3",
			tagName: 'shoe3',
			price: 260,
			quantity: 0,
			inCart: false
		},
		shoe4: {
			name: "Shoe 4",
			tagName: 'shoe4',
			price: 300,
			quantity: 0,
			inCart: false
		},
		shoe5: {
			name: "Shoe 5",
			tagName: 'shoe5',
			price: 40,
			quantity: 0,
			inCart: false
		},
		shoe6: {
			name: "Shoe 6",
			tagName: 'shoe6',
			price: 120,
			quantity: 0,
			inCart: false
		},
		shoe7: {
			name: "Shoe 7",
			tagName: 'shoe7',
			price: 30,
			quantity: 0,
			inCart: false
		},
		shoe8: {
			name: "Shoe 8",
			tagName: 'shoe8',
			price: 80,
			quantity: 0,
			inCart: false
		},
		shoe9: {
			name: "Shoe 9",
			tagName: 'shoe9',
			price: 600,
			quantity: 0,
			inCart: false
		}
	}
	
}

export default (state = initialState, action) => {
	let productSelected = ""
	switch(action.type) {
		case ADD_PRODUCT_CART:
			productSelected = { ...state.cartProducts[action.payload]}
			
			productSelected.quantity += 1
			productSelected.inCart = true
			console.log(productSelected)
			return {
				...state,
				cartNumbers: state.cartNumbers + 1,
				cartTotalCost: state.cartTotalCost + state.cartProducts[action.payload].price,
				cartProducts: {
					...state.cartProducts,
					[action.payload]: productSelected
				}
			}
		case GET_NUMBERS_CART:
			return {
				...state
			}
		case INCREASE_QUANTITY:
			productSelected = { ...state.cartProducts[action.payload]}
			productSelected.quantity += 1;
			return {
				...state,
				cartTotalCost: state.cartTotalCost + state.cartProducts[action.payload].price,
				cartProducts: {
					...state.cartProducts,
					[action.payload]: productSelected
				}
			}
		case DECREASE_QUANTITY:
			productSelected = { ...state.cartProducts[action.payload]}
			let newCartCost = 0;
			if(productSelected.quantity === 0){
				productSelected.quantity = 0
				newCartCost = state.cartTotalCost
			}else{
				productSelected.quantity -= 1;
				newCartCost = state.cartTotalCost - state.cartProducts[action.payload].price
			}
			
			return {
				...state,
				cartTotalCost: newCartCost,
				cartProducts: {
					...state.cartProducts,
					[action.payload]: productSelected
				}
			}
		default:
			return state;
	}
}
