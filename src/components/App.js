import React, { Component } from 'react';
import '../SCSS/_App.scss';
import StartHolder from './StartHolder.js';
import Cloud from '../images/Cloud-One.png';
import keyCommands from '../key-command-data.js';
import CardHolder from './CardHolder.js';
import Directory from './Directory.js';

class App extends Component {
  constructor() {
    super()
    this.state = {
        allCards: keyCommands || [],
        level: '',
        currentCards: [],
        currentCard: {},
        incorrectCards: [],
        score: 0
    }
  }
  
  setLevel = (selectedLevel) => {
      this.setState({level: selectedLevel}) 
      this.setCurrentCards(this.state.allCards, selectedLevel); 
      this.setCurrentCard() 
  }

  setCurrentCards = (allCards, selectedLevel) => {
    let all = this.state.allCards
    let current = this.state.currentCards
    return all.filter((card) => {
      if(card['level'] === selectedLevel) {
        this.state.currentCards.push(card)
      }
    })
  }

  setCurrentCard = () => {
    this.setState({currentCard: this.state.currentCards.shift()}) 
    if (!this.state.currentCards.length) {
      this.state.level = ''
    } 
    console.log(this.state)
    this.setLocalStorage()
    
  }

  setLocalStorage = () => {
    localStorage.setItem(['storedState'], JSON.stringify([this.state]))
  }

  setIncorrectStack = () => {
    let wrongAnswers = this.state.incorrectCards
    wrongAnswers.push(this.state.currentCard)
  }

  updateScore = () => {
    this.setState({score: this.state.score += 1})
  }


  render() {
    let startGame = <StartHolder setLevel={this.setLevel} />
    let gameBegin = <CardHolder 
      updateScore={this.updateScore}
      setCurrentCard={this.setCurrentCard}
      setIncorrectStack={this.setIncorrectStack}
      currentCard={this.state.currentCard}
      level={this.state.level}
      />
    let display = (this.state.level) ? gameBegin : startGame
    return ( 
      
      <main className="App">
        <header className="header">
          <Directory 
            score={this.state.score}
            />
        </header>
        <img className="cloud-one" src={Cloud} width="200px" alt="beautiful magic cloud" />
        
        {display}
        
      </main>
    )
  }
}

export default App;
