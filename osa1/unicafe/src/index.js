import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Static = (props) => {
    return (
        <div>{props.laatu} {props.counter}</div>
    )
}
const Button = (props) => {
    return (
        <button onClick={props.klik}>{props.kuvaus}</button>
    )
}

const Statistics = (props) => {
    return (
        <div>
            <Static laatu='hyvä' counter={props.hyva} />
            <Static laatu='neutraali' counter={props.neutraali} />
            <Static laatu='huono' counter={props.huono} />
            <Static laatu='keskiarvo' counter={props.keskiarvo()} />
            <Static laatu='positiivista' counter={props.posit() + ' %'} />
        </div>
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
    keskiarvo = () => {
        const ka = (this.state.hyva - this.state.huono) / (this.state.hyva + this.state.neutraali + this.state.huono)
        console.log(ka)
        if (isNaN(ka)) {
            return (
                0
            )
        }
        return (
            ka
        )
    }
    posit = () => {
        const prossa = (this.state.hyva / (this.state.hyva + this.state.neutraali + this.state.huono)) * 100
        if (isNaN(prossa)) {
            return (
                0
            )
        }
        return (
            prossa
        )
    }


    render() {
        return (
            <div>
                <h1>anna palautetta</h1>
                <Button klik={this.klikHyva} kuvaus="hyvä" />
                <Button klik={this.klikNeutraali} kuvaus="neutraali" />
                <Button klik={this.klikHuono} kuvaus="huono" />

                <div>
                    <h1>statistiikka</h1>

                    <Static laatu='hyvä' counter={this.state.hyva} />
                    <Static laatu='neutraali' counter={this.state.neutraali} />
                    <Static laatu='huono' counter={this.state.huono} />
                    <Static laatu='keskiarvo' counter={this.keskiarvo()} />
                    <Static laatu='positiivista' counter={this.posit() + ' %'} />
                </div>

            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'));
