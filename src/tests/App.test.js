import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import { shallow } from 'enzyme'; 


describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <App />
    );
  });

  it("should match the snapshot with all data passed in", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe("update score method", () => {
		it("should update the score by one", () => {
			expect(wrapper.state().score).toEqual(0)
			wrapper.instance().updateScore();
			expect(wrapper.state().score).toEqual(1)
		});
  });

  describe("clear all method", () => {
  	it("should return state to original values", () => {
  		wrapper.setState({
  			allCards: ['one', 'two'],
        level: 'foobar',
        currentCards: ['3'],
        currentCard: {test: 'cardddds'},
        incorrectCards: ['four', 'five'],
        score: 5
    	});
    	wrapper.instance().clearAll();
    	expect(wrapper.state()).toEqual({        
    		allCards: [],
        level: '',
        currentCards: [],
        currentCard: {},
        incorrectCards: [],
        score: 0
    	});
  	});
  });

  describe("return Start Page Method", () => {
  	it("should return to the start page when level is empty", () => {
  		wrapper.setState({level: 'Beginner'});
  		expect(wrapper.state().level).toEqual('Beginner');
  		wrapper.instance().returnStartPage();
  		expect(wrapper.state().level).toEqual('');
  	});
  });
  	
  describe("Set incorrect Stack Method", () => {
  	it("should set the incorrect cards state", () => {
  		wrapper.setState({currentCard: {test: 'one'}})
  		expect(wrapper.state().currentCard).toEqual({test: 'one'});
  		expect(wrapper.state().incorrectCards).toEqual([]);
  		wrapper.instance().setIncorrectStack();
  		expect(wrapper.state().incorrectCards).toEqual([{test: 'one'}]);
  	});
  });

  describe("Set current cards", () => {
  	it("should set the current cards in state", () => {
  		wrapper.setState({currentCards: ['one', 'two']});
  		wrapper.instance().setCurrentCard();
  		expect(wrapper.state().currentCard).toEqual('one');
  	});
  	 it("should set level to empty string if current cards empty", () => {
  		wrapper.setState({
  			currentCards: [],
  			level: 'Beginner'
  		});
  		expect(wrapper.state().level).toEqual('Beginner');
  		wrapper.instance().setCurrentCard();
  		expect(wrapper.state().level).toEqual('');
  	});
  });

  describe("Set Wrong Cards Method", () => {
		it("should invoke set wrong cards if level equals practice", () => {
			const mockSetWrongCards = jest.fn();
			wrapper.setState({
				incorrectCards: ['one', 'two']
			});
			wrapper.instance().setWrongCards();
			expect(wrapper.state().currentCard).toEqual('one');
		});
		it("should invoke set wrong cards if level equals practice", () => {
			wrapper.setState({
				incorrectCards: ['one', 'two']
			});
			wrapper.instance().setWrongCards();
			expect(wrapper.state().level).toEqual('Practice');
		})
  });

  describe("Set Current Cards Method", () => {
  	it("should return current cards that match the level", () => {
  		let allCards = [{level: 'Beginner'}, {level: 'Advanced'}];
  		wrapper.instance().setCurrentCards(allCards, 'Beginner');
  		expect(wrapper.state().currentCards).toEqual([{level: 'Beginner'}]);
  	});
  });

  describe("Set Level Method", () => {
  	it("should set state level", () => {
  		wrapper.setState({currentCards: ['one', 'two']})
  		expect(wrapper.state().level).toEqual('');
  		wrapper.instance().setLevel('Beginner');
  		expect(wrapper.state().level).toEqual('Beginner');
  	});
  });
});





































// const mockData =  [{
// 		"task": "Copy",
// 		"command": "command C",
// 		"level": "Beginner"
// 	},

// 	{
// 		"task": "Paste",
// 		"command": "command P",
// 		"level": "Beginner"
// 	},

// 	{
// 		"task": "Cut",
// 		"command": "command X",
// 		"level": "Beginner"
// 	},

// 	{
// 		"task": "Save",
// 		"command": "command S",
// 		"level": "Beginner"
// 	}];

// 	const mockIncorrectCards = [

// 		{
// 		"task": "Cut",
// 		"command": "command X",
// 		"level": "Beginner"
// 	},
// 	{
// 		"task": "Save",
// 		"command": "command S",
// 		"level": "Beginner"
// 	}
// 	];



// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

// describe("App", () => {
// 	let wrapper;

// 	beforeEach(() => {
// 		wrapper = shallow(
// 			<App />
// 		);
// 	});

// 	it("should match snapshot", () => {
// 		expect(wrapper).toMatchSnapshot();
// 	});

//  	it("should have a proper default state", () => {
//   	expect(wrapper.state()).toEqual({
// 	   	allCards: [],
// 	    level: '',
// 	    currentCards: [],
// 	    currentCard: {},
// 	    incorrectCards: [],
// 	    score: 0    
//   	});
//  	});
  
// 	describe("Set Level", () => {
// 		it("should set the state of level", () => {
// 			expect(wrapper.state().level).toEqual('');
// 			wrapper.instance().setLevel(
// 				"Advanced");
// 			expect(wrapper.setState({level:'Advanced'}))
// 		});

// 	// it("should call setCurrentCard", () => {

// 	// 	expect(mockSetCurrentCards).toBeCalled()
// 	// 	})
// 	// });
// 	});


// 	describe("Should set current cards", () => {

// 		it("should set the current cards", () => {
// 			expect(wrapper.state().currentCards).toEqual([])
// 			wrapper.instance().setCurrentCards(mockData)
// 			expect(wrapper.state().currentCards).toEqual(mockData)
// 		});
// 	});

// 	describe("it should set wrong cards", () => {

// 		it('should set level to Practice', () => {
// 			expect(wrapper.state().level).toEqual("");
// 			wrapper.instance().setWrongCards(mockIncorrectCards)
// 			expect(wrapper.state().level).toEqual('Practice');
// 		});
// 	});

// });

