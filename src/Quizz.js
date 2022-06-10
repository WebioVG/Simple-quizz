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

    nextMove = (index) => {
        
        // Check if the given answer is correct
        if (index == this.state.arrayQuizz[this.state.selectorQuestion].correctAnswer ) {
            this.setState({ score: this.state.score + 1 })
        }

        // Increment the selectorQuestion state
        this.setState({ selectorQuestion: this.state.selectorQuestion + 1 })
    }

    render() {
        return (
            <div className="container-quizz">
                {this.state.selectorQuestion < 3
                    ?
                    <div className="quizz-playing">
                        <div className="quizz-playing-counter">Question: {this.state.selectorQuestion + 1}/3</div>

                        <h2 className="quizz-playing-title">{this.state.arrayQuizz[this.state.selectorQuestion].question}</h2>

                        {this.state.arrayQuizz[this.state.selectorQuestion].answers.map((answer, index) =>
                            <div onClick={() => this.nextMove(index)} className="quizz-playing-answer" key={index}>
                                {answer}
                            </div>
                        )}
                    </div>

                    :
                    <div className="quizz-ending">
                        <h2 className="quizz-ending-title">Votre score est {this.state.score}/3 !</h2>
                        <button className="quizz-ending-button">Recommencer</button>
                    </div>
                }

            </div>

        )
    }
}

export default Quizz;