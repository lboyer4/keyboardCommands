import React from 'react';
import ReactDOM from 'react-dom';
import Directory from '../components/Directory';
import { shallow } from 'enzyme'; 

describe("Directory", () => {
	let wrapper;

	const mockClearGame = jest.fn();
	const mockClearAll = jest.fn();
	const mockReturnStatePage = jest.fn();

	beforeEach(() => {
		wrapper = shallow(
			<Directory 
				score={0} 
        clearAll={mockClearAll} 
        returnStartPage={mockReturnStatePage} 
        incorrectCards={[]}
			/>
		)
	});

	it('should match snap shot', () => {
		expect(wrapper).toMatchSnapshot();
	});

	 it('should clear all when button is pushed', () => {
    wrapper.find('.clearAll').simulate('click');
    expect(mockClearAll).toBeCalled();
  });

	 it('should return to start when clicked', () => {
	 	wrapper.find('.restart').simulate('click');
	 	expect(mockReturnStatePage).toBeCalled();
	 })
});