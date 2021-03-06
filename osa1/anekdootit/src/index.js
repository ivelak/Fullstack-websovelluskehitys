import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: 0,
            votes: [0, 0, 0, 0, 0, 0]
        }
    }

    setNewRandom = () => {
        let nmb = Math.floor(Math.random() * 6)
        return () => {
            this.setState({ selected: nmb })

        }
    }
    addVote = () => {
        return () => {
            const a = this.state.votes[this.state.selected]
            const temparray = this.state.votes
            temparray[this.state.selected] = a + 1
            this.setState({
                votes: temparray
            })
        }
    }
    findLeader = () => {
        const tempvotes = this.state.votes
        let biggest = 0

        for (var i = 0; i < 6; i++) {
            if (tempvotes[i] > tempvotes[biggest]) {
                biggest = i
            }
        }
        return biggest
    }

    render() {
        return (
            <div>
                <p>{this.props.anecdotes[this.state.selected]}</p>
                <p>has {this.state.votes[this.state.selected]} votes</p>
                <button onClick={this.addVote()}>vote</button>
                <button onClick={this.setNewRandom()}>next</button>
                <div>
                    <h1>anecdote with most votes:</h1>
                    <p>{this.props.anecdotes[this.findLeader()]}</p>
                    <p>has {this.state.votes[this.findLeader()]} votes</p>
                </div>
            </div>
        )
    }

}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)