import React from 'react';
import './App.css';
import Quizz from './Quizz';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      arrayQuizz: [
        { question: 'Combien font 1 + 1 ?', answers: [ '2', '4', '5', '10' ], correctAnswer: 0 },
        { question: 'Quel arrondi correspond le mieux à pi ?', answers: [ '2.15', '3.07', '3.14', '4.13' ], correctAnswer: 2 },
        { question: "À quoi sert le PGCD ?", answers: [ "À trouver la racine cube d'un nombre", "À déterminer si deux nombres sont multipliables", "À trouver le diviseur commun d'un nombre", '42 est la réponse universelle.' ], correctAnswer: 2 }
      ]
    }
  }
  
  render() {
    return (
      <div className="container">
        <Quizz quizz={this.state.arrayQuizz} />
      </div>
    );
  }
}

export default App;
