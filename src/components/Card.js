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
    		<h4>{this.props.task}</h4>
    		<input type="text" placeholder="input answer here..." />
    		<h5>{this.props.command}</h5>
    		<button className="answer-btn" onClick={this.handleAnswer}>Submit Answer</button>
    	</article>
    
    )
  }
}

export default Card;