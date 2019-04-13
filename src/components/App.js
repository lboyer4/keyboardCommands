import React, { Component } from 'react';
import '../SCSS/_App.scss';
import StartHolder from './StartHolder.js';
import Cloud from '../images/Cloud-One.png';
import keyCommands from '../key-command-data.js';
import CardHolder from './CardHolder.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
        allCards: keyCommands || [],
        level: '',
        practiceCards: [],
        wrongCards: [],
        correctCards: []
    }
  }
  
  setLevel = (selectedLevel) => {
    this.setState({level: selectedLevel});
   console.log(this.state.allCards) 
  }

  render() {
    return (
      <main className="App">
        <img className="cloud-one" src={Cloud} width="200px" alt="beautiful magic cloud" /> 
        <StartHolder setLevel={this.setLevel}/>
        <CardHolder />
      </main>
    )
  }
}

export default App;
