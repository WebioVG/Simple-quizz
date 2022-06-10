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

    implementSelectorQuestion = () => {
        this.setState({ selectorQuestion: this.state.selectorQuestion + 1 })
    }

    render() {
        return (
            <div className="container-quizz">
                {this.state.selectorQuestion < 3
                    ?
                    <div>
                        <div className="quizz-counter">Question: {this.state.selectorQuestion + 1}/3</div>

                        <h2 className="quizz-title">{this.state.arrayQuizz[this.state.selectorQuestion].question}</h2>

                        {this.state.arrayQuizz[this.state.selectorQuestion].answers.map(answer =>
                            <div onClick={this.implementSelectorQuestion} className="quizz-answer">
                                {answer}
                            </div>
                        )}
                    </div>

                    :
                    <div className="container-ending">
                        <h2 className="container-ending-title">Votre score est {this.state.score}/3 !</h2>
                        <button className="container-ending-button">Recommencer</button>
                    </div>
                }

            </div>

        )
    }
}

export default Quizz;