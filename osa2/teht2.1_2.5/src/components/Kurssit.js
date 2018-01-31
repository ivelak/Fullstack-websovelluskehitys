import React from 'react'

const Kurssit = ({ kurssit }) => {

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
    const Otsikko = (props) => <h1>{props.kurssi.nimi}</h1>
  
    return (
      <div>
        <ul>
          {kurssit.map(kurssi => <li key={kurssi.id}><Kurssi kurssi={kurssi} /></li>)}
        </ul>
      </div>
    )
  }

  export default Kurssit