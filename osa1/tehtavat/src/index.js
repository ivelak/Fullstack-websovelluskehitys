import React from 'react';
import ReactDOM from 'react-dom';

const Osa = (props) => {
    return (
        <div>
            <p> {props.osa} {props.tehtavia} </p>
        </div>
    )
}

const Otsikko = (props) => {
    return (
        <div>
            <h1> {props.kurssi} </h1>
        </div>
    )
}
const Sisalto = (props) => {
    return (
        <div>
            <Osa osa={props.osa1} tehtavia={props.teht1} />
            <Osa osa={props.osa2} tehtavia={props.teht2} />
            <Osa osa={props.osa3} tehtavia={props.teht3} />
        </div>
    )
}
const Yhteensa = (props) => {
    return (
        <div>
            <p> Yhteensä {props.yht} tehtävää </p>
        </div>
    )
}


const App = () => {
    const kurssi = 'Half Stack -sovelluskehitys'
    const osat = [
        {
            nimi: 'Reactin perusteet',
            tehtavia: 10
        },
        {
            nimi: 'Tiedonvälitys propseilla',
            tehtavia: 7
        },
        {
            nimi: 'Komponenttien tila',
            tehtavia: 14
        }
    ]

    return (
        <div>
            <Otsikko kurssi={kurssi} />
            <Sisalto osa1={osat[0].nimi} teht1={osat[0].tehtavia}
                osa2={osat[1].nimi} teht2={osat[1].tehtavia}
                osa3={osat[2].nimi} teht3={osat[2].tehtavia} />
            <Yhteensa yht={osat[0].tehtavia + osat[1].tehtavia + osat[2].tehtavia} />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

