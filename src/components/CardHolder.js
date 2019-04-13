import React, { Component } from 'react';
import '../SCSS/_CardHolder.scss';
import Card from './Card.js';

class CardHolder extends Component {

	render() {
		return (
			<section className="card-holder">
				<Card />
			</section>
		)
	}
}

export default CardHolder;