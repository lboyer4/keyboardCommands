import React from 'react';
import ReactDOM from 'react-dom';
import Start from '../components/Start';
import { shallow } from 'enzyme'; 

describe("Start", () => {
	let wrapper;

	const mocksetWrongCards = jest.fn();
	const mocksetLevel = jest.fn();
	const mockPreventDefault = jest.fn();
	const mockEvent = {
    preventDefault: mockPreventDefault
  };

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

	 it('set the wrong cards when clicked', () => {
	 	wrapper.find('.wrong-cards-btn').simulate('click');
	 	expect(mocksetWrongCards).toBeCalled();
	 });

	// 	it('should call setLevel', () => {
	// 	wrapper.instance().handleSubmit(mockEvent);
	// 	expect(mockPreventDefault).toHaveBeenCalled()
	// 	expect(mocksetLevel).toHaveBeenCalled()
	// });
});