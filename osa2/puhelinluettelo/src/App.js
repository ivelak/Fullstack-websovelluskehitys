import React from 'react'
import Person from './components/Person'
import personService from './services/persons'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            persons: [],
            newName: '',
            newNumber: '',
            filter: ''

        }
    }

    componentWillMount() {
        console.log('will mount')
        personService
            .getAll()
            .then(persons => {
                this.setState({ persons })
            })
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
            personService
                .create(newPerson)
                .then(pers => {
                    this.setState({
                        persons: this.state.persons.concat(pers),
                        newName: '',
                        newNumber: ''
                    })
                })
        }
    }

    handleNameChange = (event) => {
        this.setState({ newName: event.target.value })
    }
    handleNumberChange = (event) => {
        this.setState({ newNumber: event.target.value })
    }
    handleFilterChange = (event) => {
        this.setState({ filter: event.target.value })
        const filtered = this.state.persons.filter(per => per.name.toUpperCase().includes(event.target.value.toUpperCase()))
        console.log(event.target.value, filtered.map(per => per.name))
    }
    filteredPersons = () => {
        if (this.state.filter.length === 0) return this.state.persons
        return this.state.persons.filter(per => per.name.toUpperCase().includes(this.state.filter.toUpperCase()))
    }

    render() {
        return (
            <div>
                <h1>Puhelinluettelo</h1>
                <div>
                    rajaa näytettäviä: <input value={this.state.filter}
                        onChange={this.handleFilterChange}
                    />
                </div>
                <form>
                    <h2>Lisää uusi</h2>
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
                        {this.filteredPersons().map(person => <Person key={person.name} person={person} />)}
                    </ul>
                </div>

            </div>
        )
    }
}

export default App