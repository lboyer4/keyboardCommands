import React from 'react';
import ReactDOM from 'react-dom';
import CardHolder from '../components/CardHolder';
import { shallow } from 'enzyme'; 


describe("CardHolder", () => {
	let wrapper;

	const mockUpdateScore = jest.fn()
	const mockSetCurrentCard = jest.fn()
	const mockSetIncorrectStack = jest.fn()
	const mockCard = 	{
		"task": "Paste",
		"command": "command P",
		"level": "Beginner"
	}

	beforeEach(() => {
		wrapper = shallow(
			<CardHolder
			updateScore={mockUpdateScore}
      setCurrentCard={mockSetCurrentCard}
      setIncorrectStack={mockSetIncorrectStack}
     	currentCard={mockCard}
			/>
		)
	});

	it('should match snap shot', () => {
		expect(wrapper).toMatchSnapshot();
	});
});

	
