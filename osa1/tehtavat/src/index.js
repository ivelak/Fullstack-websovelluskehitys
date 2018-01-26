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
    const osa1 = {
        nimi: 'Reactin perusteet',
        tehtavia: 10
    }
    const osa2 = {
        nimi: 'Tiedonvälitys propseilla',
        tehtavia: 7
    }
    const osa3 = {
        nimi: 'Komponenttien tila',
        tehtavia: 14
    }

    return (
        <div>
            <Otsikko kurssi={kurssi} />
            <Sisalto osa1={osa1.nimi} teht1={osa1.tehtavia} osa2={osa2.nimi} teht2={osa2.tehtavia}
                osa3={osa3.nimi} teht3={osa3.tehtavia} />
            <Yhteensa yht={osa1.tehtavia + osa2.tehtavia + osa3.tehtavia} />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

