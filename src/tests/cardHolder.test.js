import React from 'react';
import ReactDOM from 'react-dom';
import CardHolder from '../components/CardHolder';
import { shallow } from 'enzyme'; 


describe("CardHolder", () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(
			<CardHolder/>
		)
	});

	it('should match snap shot', () => {
		expect(wrapper).toMatchSnapshot();
	});

	
});