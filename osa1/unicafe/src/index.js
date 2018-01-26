import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Display = (props) => {
    return (
        <div>{props.laatu} {props.counter}</div>
    )
}

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hyva: 0,
            neutraali: 0,
            huono: 0
        }
    }

    klikHyva = () => {
        console.log(this.state)
        this.setState({
            hyva: this.state.hyva + 1
        })
    }
    klikNeutraali = () => {
        console.log(this.state)
        this.setState({
            neutraali: this.state.neutraali + 1
        })
    }
    klikHuono = () => {
        console.log(this.state)
        this.setState({
            huono: this.state.huono + 1
        })
    }

    render() {
        return (
            <div>
                <h1>anna palautetta</h1>
                <button onClick={this.klikHyva}>hyvä</button>
                <button onClick={this.klikNeutraali}>neutraali</button>
                <button onClick={this.klikHuono}>huono</button>

                <div>
                    <h1>statistiikka</h1>

                    <Display laatu='hyvä' counter={this.state.hyva} />
                    <Display laatu='neutraali' counter={this.state.neutraali} />
                    <Display laatu='huono' counter={this.state.huono} />
                </div>

            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));