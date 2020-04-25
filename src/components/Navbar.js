import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { getNumbers } from '../actions/getAction';
import { Link } from 'react-router-dom';

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
	            <li><Link to="/admin">Admin</Link></li>
	            <li><Link to="/">Store</Link></li>
	            <li className="cart"><Link to="/cart">
	              <ion-icon name="cart-outline"></ion-icon>
	              Cart <span>{props.cartProps.cartNumbers}</span></Link>
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
