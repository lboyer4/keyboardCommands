import React from 'react';
import '../SCSS/_CardHolder.scss';
import Card from './Card.js';
import Rainbow from '../images/rainbow.png';

function CardHolder({ level, currentCard, setCurrentCard, setIncorrectStack, updateScore, setWrongCards, incorrectCards}) { 
	return (
		<section className="card-holder">
			<img className="rainbow" src={Rainbow} alt="magical rainbow" />
			<div className="cards">
				<h4> Level: {level} </h4>
				<h5 className="instructions">
					To Play, enter a command in the input field, and then click "submit answer".
				</h5>
				<h5> Check your answer and then click "next card".</h5>
				<p className="example"> Example answer: "command Z"
				</p>
				<Card 
					updateScore={updateScore}
					setIncorrectStack={setIncorrectStack}
					setWrongCards={setWrongCards}
					setCurrentCard={setCurrentCard}
					task={currentCard.task}
					command={currentCard.command}
					level={currentCard.level}
					incorrectCards={incorrectCards}
				/>
			</div>
		</section>
	)
}

export default CardHolder;