import React, { Component } from 'react';
import '../SCSS/_Directory.scss';

class Directory extends Component {
	constructor() {
		super()
		this.state= {
		}
	}

clearGame = () => {
	// e.preventDefault()
	this.props.clearAll()
}

returnStart = () => {
	// e.preventDefault()
	this.props.returnStartPage()
}

	render() {
		return (
				<div className="header"> 
					<button className="restart" onClick={this.returnStart}>Return Home</button>
						<h5 className="unicorn-count">Unicorns Helped: {this.props.score} </h5>
					<button className="clearAll" onClick={this.clearGame}>Reset Game</button>
				</div>

		)
	}
}

export default Directory;