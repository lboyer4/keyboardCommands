import React from 'react';
import ReactDOM from 'react-dom';
import Card from '../components/Card';
import { shallow } from 'enzyme'; 

describe("Card", () => {
	let wrapper;


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


	it('should compare answers when clicked', () => {
		wrapper.state().answered=false;
		wrapper.find('.answer-btn').simulate('click');
		expect(wrapper.state().answered).toEqual(true);
	})

	// it('should call updateScores on submit', () => {
 //    wrapper.find('.answer-btn').simulate('click', { preventDefault: () => {}
 //  });
 //  //   const wrapperTwo = mount(<Card />);
	// 	// expect(wrapperTwo.find('.answer').parents()).toEqual('command');
 //    expect(mockUpdateScore).toBeCalled();
 //  });	

	 // it('should return answered to false when called', () => {

  // });

	 // it('set the wrong cards when clicked', () => {
	 // 	wrapper.find('.wrong-cards-btn').simulate('click');
	 // 	expect(mocksetWrongCards).toBeCalled();
	 // })
});