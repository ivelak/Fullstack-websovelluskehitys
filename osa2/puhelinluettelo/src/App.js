import React from 'react';
import Person from './components/Person';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            persons: [
                {
                    name: 'Arto Hellas',
                    number: '040-1231231'
                }
            ],
            newName: '',
            newNumber: ''
        }
    }
    addContact = (event) => {
        event.preventDefault()
        console.log('Lisäysnappi')
        const newPerson = {
            name: this.state.newName,
            number: this.state.newNumber

        }

        if (this.state.persons.filter(per => per.name === newPerson.name).length > 0) {
            console.log('virhe')
            alert('Nimi on jo käytössä!')
            this.setState({
                newName: '',
                newNumber: ''
            })
        } else {
            const persons = this.state.persons.concat(newPerson)

            this.setState({
                persons,
                newName: '',
                newNumber: ''
            })
        }
    }

    handleNameChange = (event) => {
        this.setState({ newName: event.target.value })
    }
    handleNumberChange = (event) => {
        this.setState({ newNumber: event.target.value })
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
                        numero: <input value={this.state.newNumber}
                            onChange={this.handleNumberChange}
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