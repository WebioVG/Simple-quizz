import axios from 'axios';
import React from 'react';
import './App.css';
import Quizz from './Quizz';
import Loader from './Loader';

class App extends React.Component {

  // CONSTRUCTOR
  constructor(props) {
    super(props)
    this.state = {
      arrayQuizz: [],
      loading: true
    }
  }

  // Load the API, get 3 questions and store them
  componentDidMount = () => {
    axios.get('http://localhost:3001/questions').then(response => {

      // Get three random indexes
      let indexes = this.getRandom(response.data)

      setTimeout(() => {

        // Add three questions to the quizz
        for (let i = 0; i < 3; i++) {
          this.state.arrayQuizz.push(response.data[indexes[i]])
        }

        // End the loading screen
        this.setState({ loading: false })

        console.log(this.state.arrayQuizz)
      }, 450);
    })
  }

  // METHOD: Generate three random numbers
  getRandom = (array) => {
    let random1, random2, random3, resultArray = []

    // Generate the three different random indexes
    random1 = Math.floor(Math.random() * array.length)
    do {
      random2 = Math.floor(Math.random() * array.length)
    } while (random2 === random1)
    do {
      random3 = Math.floor(Math.random() * array.length)
    } while (random3 === random1 || random3 === random2)

    resultArray.push(random1)
    resultArray.push(random2)
    resultArray.push(random3)

    return resultArray
  }

  // METHOD: Reload the quizz
  reload = () => {
    this.setState({ arrayQuizz: [], loading: true })
    this.componentDidMount()
  }

  // RENDER
  render() {

    // Loading page
    if (this.state.loading) {
      return (
        <div className='container'>
          <Loader />
        </div>
      )
    }

    // Quizz page
    return (
      <div className="container">
        <Quizz quizz={this.state.arrayQuizz} reload={this.reload} />
      </div>
    )
  }
}

export default App;
