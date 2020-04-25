
import React, {useState} from 'react';
import { connect } from 'react-redux';
import { addCart } from '../actions/addAction'
import shoe1 from '../images/image1.jpg'
import shoe2 from '../images/image2.jpg'
import shoe3 from '../images/image3.jpg'
import shoe4 from '../images/image4.jpg'
import shoe5 from '../images/image5.jpg'
import shoe6 from '../images/image6.jpg'
import shoe7 from '../images/image7.jpg'
import shoe8 from '../images/image8.jpg'
import shoe9 from '../images/image9.jpg'

const imageStyle = {
	width: '300px',
	height: '250px'
}

const Home = (props) => {
	console.log(props)
	return(
		<div className="container">
			<div className="image">
				<img src={shoe1} alt="Shoe 1" style={imageStyle} />
				<h3>Shoe 1</h3>
				<h3>$15,00</h3>
				<a onClick={() => props.addCart('shoe1')} className="addToCart cart1" href="#">Add to Cart</a>
			</div>
			<div className="image">
				<img src={shoe2} alt="Shoe 2" style={imageStyle} />
				<h3>Shoe 2</h3>
				<h3>$15,00</h3>
				<a onClick={() => props.addCart('shoe2')} className="addToCart cart2" href="#">Add to Cart</a>
			</div>
			<div className="image">
				<img src={shoe3} alt="Shoe 3" style={imageStyle} />
				<h3>Shoe 3</h3>
				<h3>$15,00</h3>
				<a onClick={() => props.addCart('shoe3')} className="addToCart cart3" href="#">Add to Cart</a>
			</div>
			<div className="image">
				<img src={shoe4} alt="Shoe 4" style={imageStyle} />
				<h3>Shoe 4</h3>
				<h3>$15,00</h3>
				<a onClick={() => props.addCart('shoe4')} className="addToCart cart4" href="#">Add to Cart</a>
			</div>
			<div className="image">
				<img src={shoe5} alt="Shoe 5" style={imageStyle} />
				<h3>Shoe 5</h3>
				<h3>$15,00</h3>
				<a onClick={() => props.addCart('shoe5')} className="addToCart cart5" href="#">Add to Cart</a>
			</div>
			<div className="image">
				<img src={shoe6} alt="Shoe 6" style={imageStyle} />
				<h3>Shoe 6</h3>
				<h3>$15,00</h3>
				<a onClick={() => props.addCart('shoe6')} className="addToCart cart6" href="#">Add to Cart</a>
			</div>
			<div className="image">
				<img src={shoe7} alt="Shoe 7" style={imageStyle} />
				<h3>Shoe 7</h3>
				<h3>$15,00</h3>
				<a onClick={() => props.addCart('shoe7')} className="addToCart cart7" href="#">Add to Cart</a>
			</div>
			<div className="image">
				<img src={shoe8} alt="Shoe 8" style={imageStyle} />
				<h3>Shoe 8</h3>
				<h3>$15,00</h3>
				<a onClick={() => props.addCart('shoe8')} className="addToCart cart8" href="#">Add to Cart</a>
			</div>
			<div className="image">
				<img src={shoe9} alt="Shoe 9" style={imageStyle} />
				<h3>Shoe 9</h3>
				<h3>$15,00</h3>
				<a onClick={() => props.addCart('shoe9')} className="addToCart cart9" href="#">Add to Cart</a>
			</div>
			
		</div>

	)
}

export default connect(null, { addCart })(Home);
