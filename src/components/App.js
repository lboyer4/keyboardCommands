import React, { Component } from 'react';
import '../SCSS/_App.scss';
import StartHolder from './StartHolder.js';
import Cloud from '../images/Cloud-One.png';
import CardHolder from './CardHolder.js';
import Directory from './Directory.js';

class App extends Component {
  constructor() {
    super()
    this.state = {
        allCards: [],
        level: '',
        currentCards: [],
        currentCard: {},
        incorrectCards: [],
        score: 0
    }
  }

  componentDidMount = () => {
    if (!(localStorage.getItem("storedState") === null)) {
      this.setState(this.getLocalStorage("storedState"));
    }
    fetch('https://fe-apps.herokuapp.com/api/v1/memoize/1901/lboyer-data/keyCommands')
      .then(response => response.json())
      .then(data => {
        this.setState({
          allCards: data.keyCommands
        })
      })
      .catch(error => {throw new Error(error)}); 
  }
  
  setLevel = (selectedLevel) => {
    this.setState({level: selectedLevel}) 
    this.setCurrentCards(this.state.allCards, selectedLevel); 
    this.setCurrentCard() 
  }

  setCurrentCards = (allCards, selectedLevel) => {  
    allCards.forEach((card) => {
      if(card.level === selectedLevel) {
        this.state.currentCards.push(card);
      }
    });
  }

  setWrongCards = (incorrectCards) => {
    this.setState({
      currentCard: this.state.incorrectCards.shift()
    });
    if (this.state.incorrectCards.length) {
      this.setState({level: 'Practice'});
    }
  }

  setCurrentCard = () => {
    if (this.state.level === 'Practice' && this.state.incorrectCards.length) {
      this.setWrongCards();
    } else {
      this.setState({currentCard: this.state.currentCards.shift()});
      if (!this.state.currentCards.length) {
        this.setState({level: ''});
      } 
    }
    this.setLocalStorage();  
  }

  setLocalStorage = () => {
    localStorage.setItem('storedState', JSON.stringify(this.state));
  }

  getLocalStorage = () => {
    return JSON.parse(localStorage.getItem('storedState'));
  }

  setIncorrectStack = () => {
    this.state.incorrectCards.push(this.state.currentCard);
  }

  updateScore = () => {
    this.setState({score: this.state.score += 1});
  }

  clearAll = () => {
    this.setState({ 
        allCards: [],
        level: '',
        currentCards: [],
        currentCard: {},
        incorrectCards: [],
        score: 0
    });
    localStorage.clear();
  }

  returnStartPage = () => {
    this.setState({
      level: ''
    });
  }

  render() {
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

    let display = (this.state.level) ? gameBegin : startGame;
      
    return ( 
      
      <main className="App">
        <header className="header">
               <Directory 
                score={this.state.score} 
                clearAll={this.clearAll} 
                returnStartPage={this.returnStartPage} 
                incorrectCards={this.state.incorrectCards}
                />
        </header>
        <img className="cloud-one" src={Cloud} width="200px" alt="beautiful magic cloud" /> 
        {display}       
    </main>
    )
  }
}

export default App;
