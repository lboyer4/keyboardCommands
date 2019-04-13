import React, { Component } from 'react';
import '../SCSS/_CardHolder.scss';
import Card from './Card.js';

function CardHolder(props) {
	console.log(props.allCards) 
	return (
		<section className="card-holder">
			<h6 className="instructions">
				To Play, enter an answer in the input field, and then click "submit answer"
			</h6>
			<p className="example"> Example answer: "command Z"
			</p>
			{

				props.allCards.map(command => {
					return (
						<Card 
							task={command.task}
							command={command.command}
							level={command.level}
							key={command.key}
						/>
					)
				})
			}
		</section>
	)
}

export default CardHolder;