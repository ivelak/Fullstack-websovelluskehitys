import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => <h1>{props.kurssi.nimi}</h1>

/*
const Yhteensa = (props) => {
  const [osa1, osa2, osa3] = props.kurssi.osat

  return (
    <p>yhteensä {osa1.tehtavia + osa2.tehtavia + osa3.tehtavia} tehtävää</p>
  )
}
*/
const Kurssi = ({ kurssi }) => {
  var tehtaviaYhteensa = kurssi.osat.reduce((summa, osa) => summa + osa.tehtavia, 0)
  return (
    <div>
      <Otsikko kurssi={kurssi} />
      <ul>
        {kurssi.osat.map(osa => <li key={osa.id}>{osa.nimi} {osa.tehtavia}</li>)}
      </ul>
      <p>yhteensä {tehtaviaYhteensa} tehtävää</p>
    </div>
  )

}

const App = () => {
  const kurssi = {
    nimi: 'Half Stack -sovelluskehitys',
    osat: [
      {
        nimi: 'Reactin perusteet',
        tehtavia: 10,
        id: 1
      },
      {
        nimi: 'Tiedonvälitys propseilla',
        tehtavia: 7,
        id: 2
      },
      {
        nimi: 'Komponenttien tila',
        tehtavia: 14,
        id: 3
      },
      {
        nimi: 'Lisätään vielä yksi',
        tehtavia: 14,
        id: 4
      }
    ]
  }
  return (
    <div>
      <Kurssi kurssi={kurssi} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)