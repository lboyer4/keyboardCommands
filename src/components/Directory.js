import React, { Component } from 'react';
import '../SCSS/_Directory.scss';

class Directory extends Component {
	constructor() {
		super()
		this.state= {
		}
	}

clearGame = (e) => {
	e.preventDefault()
	this.props.clearAll()
}

	render() {
		return (
				<div> 
					<h5 className="unicorn-count">Unicorns: {this.props.score} </h5>

					<button className="clearAll" onClick={this.clearGame}>Reset Game</button>
				</div>

		)
	}
}

export default Directory;