import React from 'react';
import countryService from './services/countries';

const Switch = ({ cunts }) => {
  if (cunts.length === 1) {
    const cunt = cunts[0]
    console.log('yksi vain')
    return (

      <div>
        <h2>{cunt.name}</h2>
        <p>capital: {cunt.capital}</p>
        <p>population: {cunt.population}</p>
        <img src={cunt.flag} width="200" />
      </div>
    )
  }
  if (cunts.length < 10) {
    console.log('alle 10')
    return (
      <ul>
        {cunts.map(country => <li key={country.name}>  {country.name} </li>)}
      </ul>
    )
  } else {
    console.log('liikaa', cunts.length)
    return (

      <div>

        <p>Tarkenna rajausta</p>
      </div>
    )
  }

}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: [],
      filter: ''
    }
  }
  componentWillMount() {
    console.log('will mount')
    countryService
      .getAll()
      .then(countries => {
        this.setState({ countries })
      })
  }
  handleFilterChange = (event) => {
    this.setState({ filter: event.target.value })
    const filtered = this.state.countries.filter(country => country.name.toUpperCase().includes(event.target.value.toUpperCase()))
    console.log(event.target.value, filtered.map(country => country.name))
  }
  filteredCountries = () => {

    const filtered = this.state.countries.filter(country => country.name.toUpperCase().includes(this.state.filter.toUpperCase()))
    return filtered
  }

  render() {
    return (
      <div>
        <h1>Maat</h1>
        <div>
          rajaa: <input value={this.state.filter}
            onChange={this.handleFilterChange}
          />
        </div>
        <div>
          <Switch cunts={this.filteredCountries()} />
        </div>

      </div>
    )
  }
}

export default App