import React from 'react';

function Home() {
	return(
		<header>
	        <div className="overlay"></div>
	        <nav>
	          <h2>Store</h2>
	          <ul>
	            <li><a href="#">Admin</a></li>
	            <li><a href="#">Store</a></li>
	            <li className="cart"><a href="#">
	              <ion-icon name="cart-outline"></ion-icon>
	              Cart <span>0</span></a>
	            </li>
	          </ul>
	        </nav>
	     </header>

	)
}


export default Home;
