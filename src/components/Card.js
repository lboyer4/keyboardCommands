import React, { Component } from 'react';
import '../SCSS/_Card.scss';

class Card extends Component {
	constructor() {
		super()
		this.state = {
			beginnerCards: [],
			intermediateCards: [],
			advancedCards: [],
			answered: false
		}



	}
  render() {
    return (
    	<article className="card">
    		<h4>Question</h4>
    		<input type="text" placeHolder="input answer here..." />
    		<h5>Answer</h5>
    	</article>
    
    )
  }
}

export default Card;