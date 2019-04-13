import React, { Component } from 'react';
import '../SCSS/_App.scss';
import StartHolder from './StartHolder.js';
import Cloud from '../images/Cloud-One.png';

class App extends Component {
  constructor() {
    super()
    this.state = {
        allCards: [],
        level: '',
        practiceCards: [],
        wrongCards: [],
        correctCards: []
    }
  }

  setLevel = (selectedLevel) => {
    this.setState({level: selectedLevel});
  }

  render() {
    return (
      <div className="App">
        <img className="cloud-one" src={Cloud} width="200px" alt="beautiful magic cloud" /> 
        <StartHolder setLevel={this.setLevel}/>
      </div>
    )
  }
}

export default App;
