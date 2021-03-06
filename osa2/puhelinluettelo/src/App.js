import React from 'react'
import Person from './components/Person'
import personService from './services/persons'
import Notification from './components/Notification'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            persons: [],
            newName: '',
            newNumber: '',
            filter: '',
            error: null

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
            const pers = this.state.persons.find(person => person.name === newPerson.name)
            console.log('pers', pers.name)

            if (window.confirm(pers.name + ' on jo luettelossa, korvataanko vanha numero uudella?')) {
                personService
                    .update(pers.id, newPerson)
                    .then(newPerson => {
                        this.setState({
                            persons: this.state.persons.map(person => person.id !== pers.id ? person : newPerson),
                            error: 'numero korvattu'
                        })
                        setTimeout(() => {
                            console.log('timeout')
                            this.setState({ error: null })
                        }, 5000)
                    })
                    .catch(error => {
                        this.setState({
                            error: `henkilö '${pers.name}' on jo valitettavasti poistettu palvelimelta`,
                            persons: this.state.persons.filter(n => n.id !== pers.id)
                          })
                          setTimeout(() => {
                            console.log('timeout')
                            this.setState({ error: null })
                        }, 5000)
                    })
            }
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
                        newNumber: '',
                        error: `henkilö ${pers.name} lisätty`

                    })
                    setTimeout(() => {
                        console.log('timeout')
                        this.setState({ error: null })
                    }, 5000)
                })


        }
    }

    removeContact = (killed) => {
        return () => {
            console.log('poistellaan')
            if (window.confirm('Poistellaanko ' + killed.name)) {
                personService
                    .remove(killed.id)
                    .then(person => {
                        const templist = this.state.persons.filter(n => n.id !== killed.id)
                        console.log(templist.map(pers => pers.name))
                        this.setState({
                            persons: templist,
                            error: 'henkilö poistettu'
                        })
                        setTimeout(() => {
                            console.log('timeout')
                            this.setState({ error: null })
                        }, 5000)
                    })
            }
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

                <Notification message={this.state.error} />

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
                        {this.filteredPersons().map(person => <Person key={person.id} person={person} remove={this.removeContact(person)} />)}
                    </ul>
                </div>

            </div>
        )
    }
}

export default App