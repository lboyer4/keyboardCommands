import React, { Component } from 'react';
import '../SCSS/_Card.scss';

class Card extends Component {
	constructor() {
		super()
		this.state = {
			answered: false,
			nextCard: false,
		}
	}

	// handleAnswer = (e) => {
	// 	e.preventDefault()
	// 	console.log(e.target.parentElement.querySelector('.answer').value)
	// 	let playerAnswer = e.target.parentElement.querySelector('.answer').value
	// 	// console.log(this.props.command)
	// }

  render() {
  	let nextCard = <button className="next" onClick={this.changeCard}>Next</button>
  	// let nextButton = (this.state.answered) ? nextCard 
    return (
    	<article className="card">
    		<form>
	    		<h4>{this.props.task}</h4>
	    		<input className="answer" type="text" placeholder="input answer here..." />
	    		<h5>{this.props.command}</h5>
	    		<button className="answer-btn" onClick={this.handleAnswer}>Submit Answer</button>
	    		{/*{nextButton}*/}
    		</form>
    	</article>
    
    )
  }
}

export default Card;