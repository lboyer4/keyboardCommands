import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import { shallow } from 'enzyme'; 

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});



describe("App", () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(
			<App />
		)
	});

	describe("Set Level", () => {
		it('should set the state of level', () => {
			expect(wrapper.state().level).toEqual('');
			wrapper.instance().setLevel('Advanced');
			expect(wrapper.state().level).toEqual('Advanced');
		});
	});

	
});