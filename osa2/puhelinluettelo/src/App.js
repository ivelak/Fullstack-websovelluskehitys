import React from 'react';
import Person from './components/Person';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            persons: [
              { name: 'Arto Hellas' }
            ],
            newName: ''
        }
    }
    addContact = (event) => {
        event.preventDefault()
        console.log('Lisäysnappi')
        const newPerson = {
            name: this.state.newName,
            id: this.state.persons.length + 1
        }

        const persons = this.state.persons.concat(newPerson)

        this.setState({
            persons,
            newName: ''
        })
    }
    handleNameChange = (event) => {
        this.setState({ newName: event.target.value})
    }

    render() {
        return (
            <div>
                <h2>Puhelinluettelo</h2>
                <form>
                    <div>
                        nimi: <input value={this.state.newName}
                            onChange={this.handleNameChange}
                        />
                    </div>
                    <div>
                        <button onClick={this.addContact} type="submit">lisää</button>
                    </div>
                </form>
                <h2>Numerot</h2>
                <div>
                    <ul>
                        {this.state.persons.map(person => <Person key={person.name} person={person} />)}
                    </ul>
                </div>

            </div>
        )
    }
}

export default App