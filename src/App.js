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

  // Load the API and store it
  componentDidMount() {
    axios.get('http://localhost:3001/questions').then(response => {
      setTimeout(() => {
        this.setState({ arrayQuizz: response.data, loading: false })
      }, 450);  
    })
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
        <Quizz quizz={this.state.arrayQuizz} />
      </div>
    )
  }
}

export default App;
