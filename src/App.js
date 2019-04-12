import React, { Component } from 'react';
import './SCSS/App.scss';

class App extends Component {
  constructor() {
    super()
    this.state = {
        allCards=[],
        level: '',
        practiceCards=[],
        wrongCards=[],
        correctCards=[]
    }

  }
  render() {
    return (
      <div>

      </div>
      )
  }
}

export default App;
