import React from 'react';
import '../SCSS/_CardHolder.scss';
import Card from './Card.js';

function CardHolder({ level, currentCard, setCurrentCard}) { 
	return (
		<section className="card-holder">
			<h4> Level: {level} </h4>
			<h6 className="instructions">
				To Play, enter a command in the input field, and then click "submit answer"
			</h6>
			<p className="example"> Example answer: "command Z"
			</p>
			<Card 
				setCurrentCard={setCurrentCard}
				task={currentCard.task}
				command={currentCard.command}
				level={currentCard.level}
			/>
		</section>
	)
}

export default CardHolder;