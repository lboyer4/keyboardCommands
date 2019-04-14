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

  setWrongCards = (incorrectCards) => {
    console.log(this.state)
    JSON.parse(localStorage.getItem('storedState'))
    console.log('storedState')
    this.setState({
      currentCard: this.state.incorrectCards.shift()
    })
      if (this.state.incorrectCards.length) {
        this.setState({level: 'Practice'})
      }
  }

  setCurrentCard = () => {
    if (this.state.level === 'Practice' && this.state.incorrectCards.length) {
      this.setWrongCards();
    } else {
    this.setState({currentCard: this.state.currentCards.shift()}) 
    if (!this.state.currentCards.length) {
      this.state.level = ''
    } 
  }
    this.setLocalStorage()   
  }

  setLocalStorage = () => {
    localStorage.setItem('storedState', JSON.stringify(this.state))
  }

  // getLocalStorage = () => {
  //   localStorage.getItem('storedState', JSON.stringify(this.state))
  // }

  setIncorrectStack = () => {
    let wrongAnswers = this.state.incorrectCards
    wrongAnswers.push(this.state.currentCard)
  }

  updateScore = () => {
    this.setState({score: this.state.score += 1})
  }

  clearAll = () => {
    this.setState({ 
        allCards: keyCommands || [],
        level: '',
        currentCards: [],
        currentCard: {},
        incorrectCards: [],
        score: 0
    })
     this.setLocalStorage()
  }

  returnStartPage = () => {
    this.setState({
      level: ''
    })
  }


  render() {
    // console.log(this.state.currentCards)
    // console.log(this.state.incorrectCards)
    let startGame = <StartHolder 
      setLevel={this.setLevel}
      setWrongCards={this.setWrongCards}
      incorrectCards={this.state.incorrectCards}
       />

    let gameBegin = <CardHolder 
      updateScore={this.updateScore}
      setCurrentCard={this.setCurrentCard}
      setIncorrectStack={this.setIncorrectStack}
      currentCard={this.state.currentCard}
      level={this.state.level}
      />

    let scoreBoard = <Directory 
      score={this.state.score} 
      clearAll={this.clearAll} 
      returnStartPage={this.returnStartPage} 
      />

    let display = (this.state.level) ? gameBegin : startGame

    let header = this.state.score && scoreBoard
    return ( 
      
      <main className="App">
        <header className="header">
          {header}
        </header>
        <img className="cloud-one" src={Cloud} width="200px" alt="beautiful magic cloud" />
        
        {display}
        
      </main>
    )
  }
}

export default App;
