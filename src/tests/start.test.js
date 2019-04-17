import React from 'react';
import ReactDOM from 'react-dom';
import Start from '../components/Start';
import { shallow } from 'enzyme'; 

describe("Start", () => {
	let wrapper;

	const mocksetWrongCards = jest.fn();
	const mocksetLevel = jest.fn();

	beforeEach(() => {
		wrapper = shallow(
    			<Start 
    				setLevel={mocksetLevel}
            setWrongCards={mocksetWrongCards}
            incorrectCards={[]}
            />
		)
	});

	it('should match snap shot', () => {
		expect(wrapper).toMatchSnapshot();
	});

	 // it('should clear all when button is pushed', () => {
  //   wrapper.find('.choose-level-btn').simulate('click', {target: {}});
  //   expect(mocksetLevel).toBeCalled();
  // });

	 it('set the wrong cards when clicked', () => {
	 	wrapper.find('.wrong-cards-btn').simulate('click');
	 	expect(mocksetWrongCards).toBeCalled();
	 })
});