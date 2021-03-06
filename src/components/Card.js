import React, { Component } from 'react';
import '../SCSS/_Card.scss';

class Card extends Component {
	constructor() {
		super()
		this.state = {
			answered: false, 
		}
	}

	handleAnswer = (e) => {
		e.preventDefault();
		let playerAnswer = e.target.parentElement.querySelector('.answer').value
		if (playerAnswer.toLowerCase() === this.props.command.toLowerCase()) {
		this.props.updateScore();
		} else {	
		this.props.setIncorrectStack();
		}	
		this.setState({answered: true});
	}

	handleNextCard = (e) => {
		e.preventDefault();
		this.setState({answered: false});
		this.props.setCurrentCard();
	}

  render() {
  	let correctAnswer = this.state.answered && <h5 className="basic">The correct answer is: {this.props.command}</h5>
  	let submitAnswerBtn = <button className="answer-btn" onClick={this.handleAnswer}>Submit Answer</button>
  	let nextCard = <button className="next" onClick={this.handleNextCard}>NEXT CARD</button>
  	let button = this.state.answered ? nextCard : submitAnswerBtn;
    return (
    	<article className="card">
    		<form>
	    		<h5 className="basic">Enter the command for:</h5>
	    		<h3>{this.props.task}</h3>
	    		
	    		<input className="answer" type="text" placeholder="input answer here..." />
	    		{correctAnswer}
	    		{button}
    		</form>
    	</article>
    
    )
  }
}

export default Card;