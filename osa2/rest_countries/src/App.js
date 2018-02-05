import React from 'react';
import countryService from './services/countries';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: [],
      filter: '',
      show: false
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
    if (this.state.filter.length === 0) return []
    const filtered = this.state.countries.filter(country => country.name.toUpperCase().includes(this.state.filter.toUpperCase()))
    if (filtered.length<10){
      this.setState ({
        show: true
      })
    }
    return 
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

        <ul>
          {this.filteredCountries().map(country => <li key={country.name}>  {country.name} </li>)}
        </ul>

      </div>
    )
  }
}

export default App