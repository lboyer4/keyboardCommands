import React from 'react';
import Card from '../components/Card';
import { shallow } from 'enzyme'; 

describe("Card", () => {
	let wrapper;


	const mocksetIncorrectStack = jest.fn();
	const mockUpdateScore = jest.fn();
	const mocksetWrongCards = jest.fn();
	const mocksetCurrentCard = jest.fn()
	const mockPreventDefault = jest.fn();
	const mockEvent = {
    preventDefault: mockPreventDefault
  };

	beforeEach(() => {
		wrapper = shallow(
					<Card 
					updateScore={mockUpdateScore}
					setIncorrectStack={mocksetIncorrectStack}
					setWrongCards={mocksetWrongCards}
					setCurrentCard={mocksetCurrentCard}
					task={"Save"}
					command={"command S"}
					level={'Beginner'}
					incorrectCards={[]}/>
		)
	});

	it('should match snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});

	// it('should change answered from false to true', () => {
	// 	wrapper.setState({answered:false})
	// 	wrapper.instance().handleAnswer(mockEvent);
	// 	expect(mockPreventDefault).toHaveBeenCalled()
	// 	expect(wrapper.state().answered).toEqual(true);
	// });

	it('should change answered state to false', () => {
		wrapper.setState({answered: true})
		wrapper.instance().handleNextCard(mockEvent);
		expect(mockPreventDefault).toHaveBeenCalled()
		expect(wrapper.state().answered).toEqual(false)
	});

		it('should call set current card', () => {
		wrapper.setState({answered: true})
		wrapper.instance().handleNextCard(mockEvent);
		expect(mockPreventDefault).toHaveBeenCalled()
		expect(mocksetCurrentCard).toHaveBeenCalled()
	});
});