import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { getNumbers } from '../actions/getAction'

function Navbar(props) {
	console.log(props)

	useEffect(() => {
		getNumbers();
	}, [])
	return(
		<header>
	        <div className="overlay"></div>
	        <nav>
	          <h2>Store</h2>
	          <ul>
	            <li><a href="/#">Admin</a></li>
	            <li><a href="/#">Store</a></li>
	            <li className="cart"><a href="/#">
	              <ion-icon name="cart-outline"></ion-icon>
	              Cart <span>{props.cartProps.cartNumbers}</span></a>
	            </li>
	          </ul>
	        </nav>
	     </header>

	)
}

const mapStateToProps = state => ({
	cartProps: state.cartState
})

export default connect(mapStateToProps, { getNumbers })(Navbar);
