import React, { Component } from 'react';
import '../SCSS/_App.scss';
import StartHolder from './StartHolder.js';

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

  render() {
    return (
      <div className="App">
        <StartHolder />
      </div>
    )
  }
}

export default App;
