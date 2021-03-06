import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Static = (props) => {
    return (

        <tr>
            <td>{props.laatu}</td><td>{props.counter}</td>
        </tr>

    )
}
const Button = (props) => {
    return (
        <button onClick={props.klik}>{props.kuvaus}</button>
    )
}

const Statistics = (props) => {
    if (props.hyva + props.neutraali + props.huono === 0) {
        return (
            <div>
                <p>ei palautteita vielä</p>
            </div>
        )
    }
    return (

        <table>
            <tbody>
                <Static laatu='hyvä' counter={props.hyva}/>
                <Static laatu='neutraali' counter={props.neutraali}/>
                <Static laatu='huono' counter={props.huono}/>
                <Static laatu='keskiarvo' counter={props.keskiarvo}/>
                <Static laatu='positiivista' counter={props.posit + ' %'}/>
            </tbody>
        </table>

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

    klikNappia = (nappi, arvo) => {


        return () => {
            this.setState({
                [nappi]: this.state[nappi] + 1
            })
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
    noStats = () => {
        if ((this.state.hyva + this.state.neutraali + this.state.huono) === 0) {
            return (
                true
            )
        }
        return false

    }


    render() {
        return (
            <div>
                <h1>anna palautetta</h1>

                <Button klik={this.klikNappia('hyva')} kuvaus="hyvä" />
                <Button klik={this.klikNappia('neutraali')} kuvaus="neutraali" />
                <Button klik={this.klikNappia('huono')} kuvaus="huono" />

                <div>
                    <h1>statistiikka</h1>


                    <Statistics hyva={this.state.hyva} neutraali={this.state.neutraali}
                        huono={this.state.huono} keskiarvo={this.keskiarvo()} posit={this.posit()} />

                </div>

            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'));
