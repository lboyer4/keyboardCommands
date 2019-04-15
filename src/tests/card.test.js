import React from 'react';
import ReactDOM from 'react-dom';
import Card from '../components/Card';
import { shallow } from 'enzyme'; 

describe("Card", () => {
	let wrapper;
	let wrapper2;


	const mocksetIncorrectStack = jest.fn();
	const mockUpdateScore = jest.fn();
	const mocksetWrongCards = jest.fn();
	const mocksetCurrentCard = jest.fn()
	// const mockSetCurrentCard = jest.fn();

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

	 it('should call the next card when clicked', () => {
	 	wrapper.state().answered=true;
    wrapper.find('.next').simulate('click');
    expect(mockhandleNextCard).toBeCalled();
  });

	 // it('set the wrong cards when clicked', () => {
	 // 	wrapper.find('.wrong-cards-btn').simulate('click');
	 // 	expect(mocksetWrongCards).toBeCalled();
	 // })
});