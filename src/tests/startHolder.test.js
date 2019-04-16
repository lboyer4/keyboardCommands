import React from 'react';
import StartHolder from '../components/StartHolder';
import { shallow } from 'enzyme'; 


describe('StartHolder', () => {
  
	const mockSetLevel = jest.fn();
	const mockSetWrongCards = jest.fn();
	const mockIncorrectCards = [{test: 'test one'
	}, {test: 'test two'}]

  it("should match the snapshot with all data passed in", () => {
   	let wrapper = shallow(
   		<StartHolder 
	      setLevel={mockSetLevel}
	      setWrongCards={mockSetWrongCards}
	      incorrectCards={mockIncorrectCards}
       />)
   	expect(wrapper).toMatchSnapshot();
  });
});