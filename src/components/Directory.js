import React, { Component } from 'react';
import '../SCSS/_Directory.scss';

class Directory extends Component {
	constructor() {
		super()
		this.state= {
			score: 0,
			wrongCards: 0
		}
	}

	render() {
		return (
				<div> 
					<h5>Unicorns Saved: {this.props.score} </h5>


				</div>

		)
	}
}

export default Directory;