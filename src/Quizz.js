import React from "react";
import './Quizz.css';

class Quizz extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            arrayQuizz: this.props.quizz,
            selectorQuestion: 0,
            score: 0
        }
    }

    // METHOD: Go to the the next question and check the answer
    nextMove = (index) => {
        
        // Check if the given answer is correct
        if (index == this.state.arrayQuizz[this.state.selectorQuestion].correctAnswer ) {
            this.setState({ score: this.state.score + 1 })
        }
        
        // Increment the selectorQuestion state
        this.setState({ selectorQuestion: this.state.selectorQuestion + 1 })
    }
    
    // METHOD: Retry the quizz
    retry = () => {
        this.setState({
            selectorQuestion: 0,
            score: 0
        })
    }

    render() {
        return (
            <div className="container-quizz">
                {this.state.selectorQuestion < this.state.arrayQuizz.length

                    // Display the questions
                    ?
                    <div className="quizz-playing">
                        <div className="quizz-playing-counter">Question: {this.state.selectorQuestion + 1}/{ this.state.arrayQuizz.length }</div>

                        <h2 className="quizz-playing-title">{this.state.arrayQuizz[this.state.selectorQuestion].question}</h2>

                        {this.state.arrayQuizz[this.state.selectorQuestion].answers.map((answer, index) =>
                            <div onClick={() => this.nextMove(index)} className="quizz-playing-answer" key={index}>
                                {answer}
                            </div>
                        )}
                    </div>

                    // Display the ending screen
                    :
                    <div className="quizz-ending">
                        <h2 className="quizz-ending-title">Votre score est {this.state.score}/{ this.state.arrayQuizz.length } !</h2>
                        <button onClick={this.retry} className="quizz-ending-button">Recommencer</button>
                    </div>
                }
            </div>
        )
    }
}

export default Quizz;